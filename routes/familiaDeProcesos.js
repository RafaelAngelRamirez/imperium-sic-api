let express = require("express")
let app = express()
let FamiliaDeProcesos = require("../models/procesos/familiaDeProcesos")
let RESP = require("../utils/respStatus")
const $ =  require("@codice-progressio/easy-permissions").$

const erro = (res, err, msj) => {
  return RESP._500(res, {
    msj: msj,
    err: err,
  })
}

// ============================================
// Guardamos una nueva famila de procesos.
// ============================================
app.post(
  "/",
  $("familiaDeProcesos:crear"),
  (req, res) => {
    new FamiliaDeProcesos(req.body)
      .save()
      .then(familiaNueva => {
        return RESP._200(res, "Se guardo la familia de manera correcta.", [
          { tipo: "familiaDeProcesos", datos: familiaNueva },
        ])
      })
      .catch(err => {
        return RESP._500(res, {
          msj: "Hubo un error guardando la familia de procesos.",
          err: err,
        })
      })
  }
)

app.get(
  "/",
  $("familiaDeProcesos:leer:todo"),
  async (req, res) => {
    const desde = Number(req.query.desde || 0)
    const limite = Number(req.query.limite || 30)
    const sort = Number(req.query.sort || 1)
    const campo = String(req.query.campo || "nombre")

    const total = await FamiliaDeProcesos.countDocuments().exec()
    FamiliaDeProcesos.find()
      .sort({ [campo]: sort })
      .limit(limite)
      .skip(desde)
      .exec()
      .then(familiasDeProcesos => {
        return RESP._200(res, null, [
          { tipo: "familiaDeProcesos", datos: familiasDeProcesos },
          { tipo: "total", datos: total },
        ])
      })
      .catch(err =>
        erro(res, err, "Hubo un error buscando las familias de procesos")
      )
  }
)

app.get(
  "/:id",
  $("familiaDeProcesos:leer:id"),
  (req, res) => {
    FamiliaDeProcesos.findById(req.params.id)
      .exec()
      .then(familiaDeProcesos => {
        if (!familiaDeProcesos) throw "No existe el id"
        return RESP._200(res, null, [
          { tipo: "familiaDeProcesos", datos: familiaDeProcesos },
        ])
      })
      .catch(err =>
        erro(
          res,
          err,
          "Hubo un error buscando la familia de procesos por su id"
        )
      )
  }
)

app.get(
  "/buscar/:termino",
  $("familiaDeProcesos:leer:termino"),
  async (req, res) => {
    const desde = Number(req.query.desde || 0)
    const limite = Number(req.query.limite || 30)
    const sort = Number(req.query.sort || 1)
    const campo = String(req.query.campo || "nombre")
    const termino = req.params.termino

    const b = campo => ({
      [campo]: { $regex: termino, $options: "i" },
    })
    const $match = {
      $or: [],
    }

    ;["nombre", "observaciones"].forEach(x => $match.$or.push(b(x)))

    const total = await FamiliaDeProcesos.aggregate([
      { $match },
      { $count: "total" },
    ]).exec()

    FamiliaDeProcesos.aggregate([
      { $match },

      //Fin de populacion

      { $sort: { [campo]: sort } },
      //Desde aqui limitamos unicamente lo que queremos ver
      { $limit: desde + limite },
      { $skip: desde },
      { $sort: { [campo]: sort } },
    ])
      .exec()
      .then(familiasDeProcesos => {
        //Si no hay resultados no se crea la propiedad
        // y mas adelante nos da error.
        if (!total.length) total.push({ total: 0 })

        return RESP._200(res, null, [
          { tipo: "familiasDeProcesos", datos: familiasDeProcesos },
          { tipo: "total", datos: total.pop().total },
        ])
      })
      .catch(err =>
        erro(
          res,
          err,
          "Hubo un error buscando las familias por el termino " + termino
        )
      )
  }
)

app.delete(
  "/:id",
  $("familiaDeProcesos:eliminar"),
  (req, res) => {
    FamiliaDeProcesos.findById(req.params.id)
      .exec()
      .then(familiaDeProcesos => {
        if (!familiaDeProcesos) throw "No existe el id"

        return familiaDeProcesos.remove()
      })
      .then(familiaDeProcesos => {
        return RESP._200(res, "Se elimino de manera correcta", [
          { tipo: "familiaDeProcesos", datos: familiaDeProcesos },
        ])
      })
      .catch(err =>
        erro(res, err, "Hubo un error eliminando la familia de procesos")
      )
  }
)

app.put(
  "/",
  $("familiaDeProcesos:modificar"),
  (req, res) => {
    return FamiliaDeProcesos.findById(req.body._id)
      .exec()
      .then(familiaDeProcesos => {
        if (!familiaDeProcesos) throw "No existe el id"
        ;[
          "procesos",
          "nombre",
          "soloParaProductoTerminado",
          "observaciones",
        ].forEach(x => (familiaDeProcesos[x] = req.body[x]))

        return familiaDeProcesos.save()
      })
      .then(familiaDeProcesos => {
        return RESP._200(res, "Se modifico correctamente", [
          { tipo: "familiaDeProcesos", datos: familiaDeProcesos },
        ])
      })
      .catch(err =>
        erro(res, err, "Hubo un error actualizando el familiaDeProcesos")
      )
  }
)


module.exports = app
