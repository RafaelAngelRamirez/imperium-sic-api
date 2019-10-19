const Empleado = require("../../../models/recursosHumanos/empleados/empleado.model")

module.exports = function(datos) {
  return Empleado.findById(datos._id)
    .exec()
    .then((empleado) => {
      if (!empleado) throw "El empleado no existe"

      empleado.eventos.unshift(crearEvento(datos))
      return empleado.save()
    })
}

function crearEvento(datos) {
  const evento = {
    bono: {
      porAsistencia: datos.porAsistencia,
      porPuntualidad: datos.porPuntualidad,
      porProductividad: datos.porProductividad,
      porResultados: datos.porResultados,
      ayudaEscolarEventual: datos.ayudaEscolarEventual
    }
  }

  Object.keys(evento.bono).forEach((k) => {
    if (!evento.bono[k]) delete evento.bono[k]
  })

  return crearHistorialDeEventos(evento)
}

function crearHistorialDeEventos(evento) {
  return {
    fechaDeRegistroDeEvento: new Date(),
    evento: evento
  }
}
