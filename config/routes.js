//importar rutas.
let usuarioRoutes = require("../routes/usuario.route")
let loginRoutes = require("../routes/login/login.route")
let uploadRoutes = require("../routes/upload")
let imagenesRoutes = require("../routes/imagenes")

// ============================================
// IMPORTAR RUTAS PARA SISTEMA
// ============================================

let skuRoutes = require("../routes/gestionModelos/sku.route")
let clienteRoutes = require("../routes/cliente")
let departamentoRoutes = require("../routes/departamento")
let procesoRoutes = require("../routes/proceso")
let familiaDeProcesosRoutes = require("../routes/familiaDeProcesos")
let ordenRoutes = require("../routes/orden")
let maquinaRoutes = require("../routes/maquina")

let reportesRoute = require("../routes/reportes/reportes")
let almacenDeProductoTerminadoRoute = require("../routes/almacenDeProductoTerminado/almacenDeProductoTerminado")

let folioNewRoutes = require("../routes/folio.route")

const almacenDescripcionRoute = require("../routes/almacenDeMateriaPrimaYRefacciones/almacenDescripcion.route")
const articuloRoute = require("../routes/almacenDeMateriaPrimaYRefacciones/articulo.route")

const proveedorRoute = require("../routes/proveedores/proveedor.route")
const DivisaRoute = require("../routes/divisa/divisa.route")
const RequisicionRoute = require("../routes/requisiciones/requisicion.route")

const CursoRoute = require("../routes/recursosHumanos/cursos/curso.route")
const AreaRoute = require("../routes/recursosHumanos/areas/area.route")
const PuestoRoute = require("../routes/recursosHumanos/puestos/puesto.route")
const EmpleadoRoute = require("../routes/recursosHumanos/empleado/empleado.route")

const Parametros = require("../routes/parametros/parametros.route")
const Changelogs = require("../routes/changelogs.route")

const ReportePersonalizadoAlmacenProduccion = require("../routes/almacenDeMateriaPrimaYRefacciones/reportePersonalizadoAlmacenProduccion.route")

const ProgramacionTransformacion = require("../routes/ingenieria/programacionTransformacion.route")

const jwt = require("express-jwt")
const guard = require("express-jwt-permissions")()
const $ = require("@codice-progressio/easy-permissions").$

module.exports.ROUTES = function (app) {
  //Aseguramos todo menos el login y paremetros. Internamente paraemtros
  // se asegura. Tambien crea el req.user
  const rutasAExcluir = [
    "/parametros",
    "/parametros/super-admin/crear",
    "/login",
    "/img/usuarios/xxx",
  ]
  app.use(
    jwt({ secret: process.env.SEED, algorithms: ["HS256"] }).unless({
      path: rutasAExcluir,
    })
  )
  
  //Excluimos rutas
  app.use(
    guard.check("login").unless({
      path: rutasAExcluir,
    })
  )

  app.use("/img", imagenesRoutes)
  //Este va primero por que se usan permisos especiales internamente
  app.use("/parametros", Parametros)

  //Cargamos todos los parametros en cada peticion para tener disponible
  //la informacion en req.parametros
  const ParametrosModel = require("../models/defautls/parametros.model")
  app.use((req, res, next) => {
    ParametrosModel.findOne()
      .exec()
      .then(parametros => {
        if (!parametros)
          throw "No has definido el documento que contiene los parametros. Es necesario que los definas para poder continuar."

        req["parametros"] = parametros
        next()
      })
      .catch(err => next(err))
  })
  app.use("/login", loginRoutes)

  //Para usar esta parte debe tener permisos de login

  app.use("/changelogs", Changelogs)

  app.use("/programacionTransformacion", ProgramacionTransformacion)
  app.use(
    "/reportePersonalizadoAlmacenProduccion",
    ReportePersonalizadoAlmacenProduccion
  )

  // app.use("/empleado", EmpleadoRoute)
  // app.use("/puesto", PuestoRoute)
  // app.use("/area", AreaRoute)
  // app.use("/curso", CursoRoute)
  // app.use("/requisicion", RequisicionRoute)
  // app.use("/divisa", DivisaRoute)
  app.use("/proveedor", proveedorRoute)
  // app.use("/articulo", articuloRoute)
  // app.use("/almacenDescripcion", almacenDescripcionRoute)
  // app.use("/almacenDeProductoTerminado", almacenDeProductoTerminadoRoute)
  // app.use("/reportes", reportesRoute)

  // //Gestion de folios
  // app.use("/folios", folioNewRoutes)
  // app.use("/orden", ordenRoutes)
  // //----------------------------
  // app.use("/usuario", usuarioRoutes)
  // app.use("/upload", uploadRoutes)

  app.use("/sku", skuRoutes)
  // app.use("/cliente", clienteRoutes)
  // app.use("/departamento", departamentoRoutes)
  // app.use("/proceso", procesoRoutes)
  // app.use("/familiaDeProcesos", familiaDeProcesosRoutes)
  // app.use("/maquina", maquinaRoutes)
}
//
