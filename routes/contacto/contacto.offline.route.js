const app = require("express")()
const Contacto = require("../../models/contacto/contacto.model")

app.get("/sincronizar", (req, res, next) => {
  Contacto.find({
    eliminado: false,
    esCliente: true,
    usuariosAsignados: req.user._id
  })
    .then(contactos => res.send({ contactos }))
    .catch(_ => next(_))
})

module.exports = app
