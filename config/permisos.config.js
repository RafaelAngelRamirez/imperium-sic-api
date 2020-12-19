const permisos = {
  "programacionTransformacion:actualizarUbicacion": "",
  "programacionTransformacion:ordenesPorAsignar": "",
  "programacionTransformacion:asignar": "",
  "reportePersonalizadoAlmacenDeProduccion:eliminar": "",
  "reportePersonalizadoAlmacenDeProduccion:modificar": "",
  "reportePersonalizadoAlmacenDeProduccion:leer:todo:termino": "",
  "reportePersonalizadoAlmacenDeProduccion:leer:id": "",
  "reportePersonalizadoAlmacenDeProduccion:leer:todo": "",
  "reportePersonalizadoAlmacenDeProduccion:crear": "",
  "parametros:estacionesDeEscaneo": "",
  "parametros:departamentoTransformacion": "",
  "parametros:procesosEspeciales": "",
  "parametros:localizacionDeOrdenes": "",
  "empleado:ingreso:modificar": "",
  "empleado:evento:eliminar": "",
  "empleado:evento:bono": "",
  "empleado:evento:amonestacion": "",
  "empleado:evento:felicitacion": "",
  "empleado:evento:castigo": "",
  "empleado:evento:curso": "",
  "empleado:evento:vacaciones": "",
  "empleado:evento:permiso:rechazar": "",
  "empleado:evento:permiso:autorizar": "",
  "empleado:evento:permiso": "",
  "empleado:evento:estatusLaboral:incapacidad:maternidad": "",
  "empleado:evento:estatusLaboral:incapacidad:riesgoDeTrabajo": "",
  "empleado:evento:estatusLaboral:incapacidad:enfermedadGeneral": "",
  "empleado:evento:estatusLaboral:reingreso": "",
  "empleado:evento:estatusLaboral:baja": "",
  "empleado:evento:sueldo": "",
  "empleado:evento:puesto": "",
  "empleado:eliminar": "",
  "empleado:crear": "",
  "empleado:leer:termino": "",
  "empleado:leer:id": "",
  "empleado:leer:todo": "",
  "puesto:eliminar": "",
  "XXXXX:multiplePuesto": "",
  "puesto:modificar": "",
  "puesto:crear": "",
  "puesto:leer:termino": "",
  "puesto:leer:id": "",
  "puesto:leer:todo": "",
  "area:eliminar": "",
  "area:modificar": "",
  "area:leer:termino": "",
  "area:leer:id": "",
  "area:leer:todo": "",
  "area:crear": "",
  "curso:leer:tipoDeCurso:troncoComun": "",
  "curso:eliminar": "",
  "curso:modificar": "",
  "curso:leer:termino": "",
  "curso:leer:id": "",
  "curso:leer:todo": "",
  "curso:crear": "",
  "requisicion:estatus:actualizar": "",
  "requisicion:leer:todo": "",
  "requisicion:leer:id": "",
  "requisicion:eliminar": "",
  "requisicion:modificar": "",
  "requisicion:crear": "",
  "divisa:eliminar": "",
  "divisa:modificar": "",
  "divisa:leer:termino": "",
  "divisa:leer:id": "",
  "divisa:leer:todo": "",
  "divisa:crear": "",
  "proveedor:eliminar": "",
  "proveedor:modificar": "",
  "proveedor:leer:termino": "",
  "proveedor:leer:id": "",
  "proveedor:leer:todo": "",
  "proveedor:crear": "",
  "articulo:eliminar": "",
  "articulo:modificar": "",
  "articulo:reportes:existencias": "",
  "articulo:leer:termino": "",
  "articulo:leer:id": "",
  "articulo:leer:todo": "",
  "articulo:crear": "",
  "almacenDescripcion:eliminar": "",
  "almacenDescripcion:modificar": "",
  "almacenDescripcion:crear": "",
  "almacenDescripcion:leer:termino": "",
  "almacenDescripcion:leer:id": "",
  "almacenDescripcion:leer:todo": "",
  "folio:liberarParaProduccion": "",
  "folio:entregarARevision": "",
  "folio:retornarAlVendedor": "",
  "folio:porEntregarAProduccion:vendedor": "",
  "folio:filtrar": "",
  "folio:reporte:paraRevision": "",
  "folio:detalle:folio": "",
  "folio:detalle:pedido": "",
  "folio:detalle:orden": "",
  "folio:modificar:senalarOrdenesImpresas": "",
  "folio:modificar": "",
  "folio:leer:id": "",
  "folio:crear": "",
  "folio:eliminar": "",
  "almacenDeProductoTerminado:consolidar:modelo": "",
  "almacenProductoTerminado:leer:termino": "",
  "almacenDeProductoTerminado:leer:todo": "",
  "reportes:almacenDeProduccion:personalizado:id": "",
  "reportes:almacenDeProduccion:faltantes": "",
  "reportes:productoTerminado:faltes": "",
  "maquina:leer:departamento": "",
  "maquina:eliminar": "",
  "maquina:modificar": "",
  "maquina:leer:termino": "",
  "maquina:leer:id": "",
  "maquina:leer:todo": "",
  "maquina:crear": "",
  "familiaDeProcesos:modificar": "",
  "familiaDeProcesos:eliminar": "",
  "familiaDeProcesos:leer:termino": "",
  "familiaDeProcesos:leer:id": "",
  "familiaDeProcesos:leer:todo": "",
  "familiaDeProcesos:crear": "",
  "proceso:leer:multiple": "",
  "proceso:eliminar": "",
  "proceso:modificar": "",
  "proceso:leer:termino": "",
  "proceso:leer:id": "",
  "proceso:leer:todo": "",
  "proceso:crear": "",
  "departamento:leer:multiple": "",
  "departamento:eliminar": "",
  "departamento:modificar": "",
  "departamento:leer:termino": "",
  "departamento:leer:id": "",
  "departamento:leer:todo": "",
  "departamento:crear": "",
  "cliente:modificar": "",
  "cliente:eliminar": "",
  "cliente:leer:termino": "",
  "cliente:leer:id": "",
  "cliente:leer:todo": "",
  "cliente:crear": "",
  "sku:stock:modificar": "",
  "sku:leer:transito": "",
  "sku:modificar:parte": "",
  "sku:modificar": "",
  "sku:eliminar": "",
  "sku:leer:termino": "",
  "sku:leer:id": "",
  "sku:leer:todo": "",
  "sku:imagen:eliminar": "Eliminar una imagen del sku",
  "sku:imagen:agregar": "Agregar una imagen al SKU",
  "sku:crear": "Crea un nuevo SKU",
  "upload:tipo:id": "",
  SUPER_ADMIN: "",
  "administrador:usuario:leer:id": "",
  "administrador:usuario:leer:termino": "",
  "administrador:usuario:eliminar": "",
  "administrador:usuario:crear": "",
  "administrador:usuario:modificar": "",
  "administrador:usuario:leer": "",
  login: "",
}

const fs = require("fs")
var guard = require("express-jwt-permissions")()

/**
 *Comprueba que el permiso esta definido. Si el estring
 esta definido lo retorna, si no, manda un error. 
 *
 * @param {*} permiso
 * @returns
 */
module.exports.$ = (permiso, esMiddleware = true, descripcion = "") => {
  // En caso de que sea midleware debe retornar una funcion
  const funcion = function (req, res, next) {
    req["permisoSolicitado"] = permiso
    return guard.check(permiso)(req, res, next)
  }
  // En modod produccion, o en caso de que el permiso exista, regresa el permiso
  // la funcion segun este definido.
  if (process.env.NODE_ENV === "production" || permisos.hasOwnProperty(permiso))
    return esMiddleware ? funcion : permiso

  try {
    // Modificamos este mismo archivo para agregar los permisos
    // directamente.
    const archivo = "config/permisos.config.js"
    // Leemos este mesmo archivo.
    var data = fs.readFileSync(archivo, "utf-8")
    // Si no existe el permiso lo agregamos.
    if (!data.includes(permiso)) {
      // Estructuramos
      let nuevaLinea = `  "${permiso}":"${descripcion}",`

      // Separamos el archivo en lineas.
      let texto = data.toString().split("\n")
      // Agregamos una nueva linea siempre en la segunda posicion
      texto.splice(1, 0, nuevaLinea)
      // Escribimos el archivo
      fs.writeFileSync(archivo, texto.join("\n"))
    }
  } catch (error) {
    console.log(error)
  }
  return esMiddleware ? funcion : permiso
}
module.exports.lista = Object.keys(permisos)
