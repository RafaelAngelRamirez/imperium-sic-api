const fs = require("fs")

var NO_DEFINIDO = ""

const permisos = {
  SUPER_ADMIN: NO_DEFINIDO,
  login: "login",
  "XXXXX:multiplePuesto": NO_DEFINIDO,
  "administrador:usuario:crear": NO_DEFINIDO,
  "administrador:usuario:eliminar": NO_DEFINIDO,
  "administrador:usuario:leer": NO_DEFINIDO,
  "administrador:usuario:leer:id": NO_DEFINIDO,
  "administrador:usuario:leer:termino": NO_DEFINIDO,
  "administrador:usuario:modificar": NO_DEFINIDO,
  "administrador:usuario:permisos": NO_DEFINIDO,
  "almacenDeProductoTerminado:consolidar:modelo": NO_DEFINIDO,
  "almacenDeProductoTerminado:devolucion": NO_DEFINIDO,
  "almacenDeProductoTerminado:leer:todo": NO_DEFINIDO,
  "almacenDeProductoTerminado:lote:crear": NO_DEFINIDO,
  "almacenDeProductoTerminado:lote:eliminar": NO_DEFINIDO,
  "almacenDeProductoTerminado:lote:modificar": NO_DEFINIDO,
  "almacenDeProductoTerminado:salida": NO_DEFINIDO,
  "almacenDescripcion:crear": NO_DEFINIDO,
  "almacenDescripcion:eliminar": NO_DEFINIDO,
  "almacenDescripcion:leer:id": NO_DEFINIDO,
  "almacenDescripcion:leer:termino": NO_DEFINIDO,
  "almacenDescripcion:leer:todo": NO_DEFINIDO,
  "almacenDescripcion:modificar": NO_DEFINIDO,
  "almacenProductoTerminado:leer:termino": NO_DEFINIDO,
  "area:crear": NO_DEFINIDO,
  "area:eliminar": NO_DEFINIDO,
  "area:leer:id": NO_DEFINIDO,
  "area:leer:termino": NO_DEFINIDO,
  "area:leer:todo": NO_DEFINIDO,
  "area:modificar": NO_DEFINIDO,
  "articulo:crear": NO_DEFINIDO,
  "articulo:eliminar": NO_DEFINIDO,
  "articulo:leer:id": NO_DEFINIDO,
  "articulo:leer:termino": NO_DEFINIDO,
  "articulo:leer:todo": NO_DEFINIDO,
  "articulo:modificar": NO_DEFINIDO,
  "cliente:crear": NO_DEFINIDO,
  "cliente:eliminar": NO_DEFINIDO,
  "cliente:leer:id": NO_DEFINIDO,
  "cliente:leer:termino": NO_DEFINIDO,
  "cliente:leer:todo": NO_DEFINIDO,
  "cliente:modificar": NO_DEFINIDO,
  "color:crear": NO_DEFINIDO,
  "color:eliminar": NO_DEFINIDO,
  "color:leer:id": NO_DEFINIDO,
  "color:leer:termino": NO_DEFINIDO,
  "color:leer:todo": NO_DEFINIDO,
  "color:modificar": NO_DEFINIDO,
  "curso:crear": NO_DEFINIDO,
  "curso:eliminar": NO_DEFINIDO,
  "curso:leer:id": NO_DEFINIDO,
  "curso:leer:termino": NO_DEFINIDO,
  "curso:leer:tipoDeCurso:troncoComun": NO_DEFINIDO,
  "curso:leer:todo": NO_DEFINIDO,
  "curso:modificar": NO_DEFINIDO,
  "departamento:crear": NO_DEFINIDO,
  "departamento:eliminar": NO_DEFINIDO,
  "departamento:leer:id": NO_DEFINIDO,
  "departamento:leer:multiple": NO_DEFINIDO,
  "departamento:leer:termino": NO_DEFINIDO,
  "departamento:leer:todo": NO_DEFINIDO,
  "departamento:modificar": NO_DEFINIDO,
  "divisa:crear": NO_DEFINIDO,
  "divisa:eliminar": NO_DEFINIDO,
  "divisa:leer:id": NO_DEFINIDO,
  "divisa:leer:termino": NO_DEFINIDO,
  "divisa:leer:todo": NO_DEFINIDO,
  "divisa:modificar": NO_DEFINIDO,
  "empleado:crear": NO_DEFINIDO,
  "empleado:eliminar": NO_DEFINIDO,
  "empleado:evento:amonestacion": NO_DEFINIDO,
  "empleado:evento:bono": NO_DEFINIDO,
  "empleado:evento:castigo": NO_DEFINIDO,
  "empleado:evento:curso": NO_DEFINIDO,
  "empleado:evento:eliminar": NO_DEFINIDO,
  "empleado:evento:estatusLaboral:baja": NO_DEFINIDO,
  "empleado:evento:estatusLaboral:incapacidad:enfermedadGeneral": NO_DEFINIDO,
  "empleado:evento:estatusLaboral:incapacidad:maternidad": NO_DEFINIDO,
  "empleado:evento:estatusLaboral:incapacidad:riesgoDeTrabajo": NO_DEFINIDO,
  "empleado:evento:estatusLaboral:reingreso": NO_DEFINIDO,
  "empleado:evento:felicitacion": NO_DEFINIDO,
  "empleado:evento:permiso": NO_DEFINIDO,
  "empleado:evento:permiso:autorizar": NO_DEFINIDO,
  "empleado:evento:permiso:rechazar": NO_DEFINIDO,
  "empleado:evento:puesto": NO_DEFINIDO,
  "empleado:evento:sueldo": NO_DEFINIDO,
  "empleado:evento:vacaciones": NO_DEFINIDO,
  "empleado:leer:id": NO_DEFINIDO,
  "empleado:leer:termino": NO_DEFINIDO,
  "empleado:leer:todo": NO_DEFINIDO,
  "empleado:modificar": NO_DEFINIDO,
  "familiaDeProcesos:crear": NO_DEFINIDO,
  "familiaDeProcesos:eliminar": NO_DEFINIDO,
  "familiaDeProcesos:leer:id": NO_DEFINIDO,
  "familiaDeProcesos:leer:termino": NO_DEFINIDO,
  "familiaDeProcesos:leer:todo": NO_DEFINIDO,
  "familiaDeProcesos:modificar": NO_DEFINIDO,
  "folio:crear": NO_DEFINIDO,
  "folio:detalle:folio": NO_DEFINIDO,
  "folio:detalle:orden": NO_DEFINIDO,
  "folio:detalle:pedido": NO_DEFINIDO,
  "folio:eliminar": NO_DEFINIDO,
  "folio:entregarARevision": NO_DEFINIDO,
  "folio:filtrar": NO_DEFINIDO,
  "folio:leer:id": NO_DEFINIDO,
  "folio:liberarParaProduccion": NO_DEFINIDO,
  "folio:marcarComoImpreso": NO_DEFINIDO,
  "folio:modificar": NO_DEFINIDO,
  "folio:modificar:senalarOrdenesImpresas": NO_DEFINIDO,
  "folio:porEntregarAProduccion:vendedor": NO_DEFINIDO,
  "folio:reporte:paraRevision": NO_DEFINIDO,
  "folio:retornarAlVendedor": NO_DEFINIDO,
  "imagenes:tipo:ver": NO_DEFINIDO,
  login: NO_DEFINIDO,
  "maquina:crear": NO_DEFINIDO,
  "maquina:eliminar": NO_DEFINIDO,
  "maquina:leer:departamento": NO_DEFINIDO,
  "maquina:leer:id": NO_DEFINIDO,
  "maquina:leer:termino": NO_DEFINIDO,
  "maquina:leer:todo": NO_DEFINIDO,
  "maquina:modificar": NO_DEFINIDO,
  "modelo:crear": NO_DEFINIDO,
  "modelo:eliminar": NO_DEFINIDO,
  "modelo:leer:id": NO_DEFINIDO,
  "modelo:leer:termino": NO_DEFINIDO,
  "modelo:leer:todo": NO_DEFINIDO,
  "modelo:modificar": NO_DEFINIDO,
  "modeloCompleto:crear": NO_DEFINIDO,
  "modeloCompleto:eliminar": NO_DEFINIDO,
  "modeloCompleto:leer:id": NO_DEFINIDO,
  "modeloCompleto:leer:termino": NO_DEFINIDO,
  "modeloCompleto:leer:todo": NO_DEFINIDO,
  "modeloCompleto:leer:transito": NO_DEFINIDO,
  "modeloCompleto:modificar": NO_DEFINIDO,
  "modeloCompleto:stock:modificar": NO_DEFINIDO,
  "proceso:crear": NO_DEFINIDO,
  "proceso:eliminar": NO_DEFINIDO,
  "proceso:leer:id": NO_DEFINIDO,
  "proceso:leer:multiple": NO_DEFINIDO,
  "proceso:leer:termino": NO_DEFINIDO,
  "proceso:leer:todo": NO_DEFINIDO,
  "proceso:modificar": NO_DEFINIDO,
  "programacionTransformacion:actualizarUbicacion": NO_DEFINIDO,
  "programacionTransformacion:asignar": NO_DEFINIDO,
  "programacionTransformacion:desasignar": NO_DEFINIDO,
  "programacionTransformacion:ordenesPorAsignar": NO_DEFINIDO,
  "proveedor:crear": NO_DEFINIDO,
  "proveedor:eliminar": NO_DEFINIDO,
  "proveedor:leer:id": NO_DEFINIDO,
  "proveedor:leer:termino": NO_DEFINIDO,
  "proveedor:leer:todo": NO_DEFINIDO,
  "proveedor:modificar": NO_DEFINIDO,
  "puesto:crear": NO_DEFINIDO,
  "puesto:eliminar": NO_DEFINIDO,
  "puesto:leer:id": NO_DEFINIDO,
  "puesto:leer:termino": NO_DEFINIDO,
  "puesto:leer:todo": NO_DEFINIDO,
  "puesto:modificar": NO_DEFINIDO,
  "reportePersonalizadoAlmacenDeProduccion:crear": NO_DEFINIDO,
  "reportePersonalizadoAlmacenDeProduccion:eliminar": NO_DEFINIDO,
  "reportePersonalizadoAlmacenDeProduccion:leer:id": NO_DEFINIDO,
  "reportePersonalizadoAlmacenDeProduccion:leer:todo": NO_DEFINIDO,
  "reportePersonalizadoAlmacenDeProduccion:leer:todo:termino": NO_DEFINIDO,
  "reportePersonalizadoAlmacenDeProduccion:modificar": NO_DEFINIDO,
  "reportes:almacenDeProduccion:faltantes": NO_DEFINIDO,
  "reportes:almacenDeProduccion:personalizado:id": NO_DEFINIDO,
  "reportes:productoTerminado:faltes": NO_DEFINIDO,
  "requisicion:crear": NO_DEFINIDO,
  "requisicion:eliminar": NO_DEFINIDO,
  "requisicion:estatus:actualizar": NO_DEFINIDO,
  "requisicion:leer:id": NO_DEFINIDO,
  "requisicion:leer:todo": NO_DEFINIDO,
  "requisicion:modificar": NO_DEFINIDO,
  "requisicion:estatus:cancelar": NO_DEFINIDO,
  "requisicion:estatus:generarCompra": NO_DEFINIDO,
  "requisicion:estatus:agregarParcialidad": NO_DEFINIDO,
  "requisicion:estatus:finalizar": NO_DEFINIDO,
  "tamano:crear": NO_DEFINIDO,
  "tamano:eliminar": NO_DEFINIDO,
  "tamano:leer:id": NO_DEFINIDO,
  "tamano:leer:termino": NO_DEFINIDO,
  "tamano:leer:todo": NO_DEFINIDO,
  "tamano:modificar": NO_DEFINIDO,
  "terminado:crear": NO_DEFINIDO,
  "terminado:eliminar": NO_DEFINIDO,
  "terminado:leer:id": NO_DEFINIDO,
  "terminado:leer:termino": NO_DEFINIDO,
  "terminado:leer:todo": NO_DEFINIDO,
  "terminado:modificar": NO_DEFINIDO,
  "upload:tipo:id": NO_DEFINIDO,
  "menu:administrador": NO_DEFINIDO,
  "menu:administrador:almacenDescripcion": NO_DEFINIDO,
  "menu:administrador:areas": NO_DEFINIDO,
  "menu:administrador:clientes": NO_DEFINIDO,
  "menu:administrador:departamentos": NO_DEFINIDO,
  "menu:administrador:usuarios": NO_DEFINIDO,
  "menu:almacen": NO_DEFINIDO,
  "menu:almacen:produccion": NO_DEFINIDO,
  "menu:almacen:produccion:entradasYSalidas": NO_DEFINIDO,
  "menu:almacen:productoTerminado": NO_DEFINIDO,
  "menu:almacen:reportesPersonalizados": NO_DEFINIDO,
  "menu:almacen:requisiciones": NO_DEFINIDO,
  "menu:compras": NO_DEFINIDO,
  "menu:compras:divisas": NO_DEFINIDO,
  "menu:compras:proveedores": NO_DEFINIDO,
  "menu:controlDeProduccion": NO_DEFINIDO,
  "menu:controlDeProduccion:folios:asignarOrdenes": NO_DEFINIDO,
  "menu:controlDeProduccion:folios:revision": NO_DEFINIDO,
  "menu:controlDeProduccion:folios:seguimiento": NO_DEFINIDO,
  "menu:ingenieria:": NO_DEFINIDO,
  "menu:ingenieria:colores": NO_DEFINIDO,
  "menu:ingenieria:familiaDeProcesos": NO_DEFINIDO,
  "menu:ingenieria:maquinas": NO_DEFINIDO,
  "menu:ingenieria:modelos": NO_DEFINIDO,
  "menu:ingenieria:procesos": NO_DEFINIDO,
  "menu:ingenieria:sku": NO_DEFINIDO,
  "menu:ingenieria:tamanos": NO_DEFINIDO,
  "menu:ingenieria:terminados": NO_DEFINIDO,
  "menu:produccion": NO_DEFINIDO,
  "menu:produccion:scanner": NO_DEFINIDO,
  "menu:reportes": NO_DEFINIDO,
  "menu:reportes:almacenDeProduccion:faltantes": NO_DEFINIDO,
  "menu:reportes:almacenDeProduccion:personalizado": NO_DEFINIDO,
  "menu:reportes:productoTerminado:faltantes": NO_DEFINIDO,
  "menu:reportes:transformacion": NO_DEFINIDO,
  "menu:rh": NO_DEFINIDO,
  "menu:rh:cursos": NO_DEFINIDO,
  "menu:rh:empleados": NO_DEFINIDO,
  "menu:rh:puestos": NO_DEFINIDO,
  "menu:ventas": NO_DEFINIDO,
  "menu:ventas:misFolios": NO_DEFINIDO,
  "menu:ventas:stock": NO_DEFINIDO,
  "menu:parametros": NO_DEFINIDO,
  "menu:parametros:localizacionDeOrdenes": NO_DEFINIDO,
  "menu:parametros:procesosEspeciales":NO_DEFINIDO
}

var guard = require("express-jwt-permissions")()

/**
 *Comprueba que el permiso esta definido. Si el estring
 esta definido lo retorna, si no, manda un error. 
 *
 * @param {*} permiso
 * @returns
 */
module.exports.$ = (permiso, esMiddleware = true) => {
  const funcion = function (req, res, next) {
    req["permisoSolicitado"] = permiso
    return guard.check(permiso)(req, res, next)
  }
  if (process.env.NODE_ENV === "production")
    return esMiddleware ? funcion : permiso

  if (permisos.hasOwnProperty(permiso)) return esMiddleware ? funcion : permiso

  const archivo = "config/permisos.config.txt"

  if (fs.existsSync(archivo)) {
    var data = fs.readFileSync(archivo, "utf-8")
    if (!data.includes(permiso)) {
      data = data.concat(`"${permiso}":NO_DEFINIDO,\n`)

      data = data
        .split("\n")
        .sort((a, b) => {
          return a > b ? 1 : -1
        })
        .filter(x => x !== "")
        .map(x => x.concat("\n"))
        .join("")

      console.log("Permiso no definido " + permiso)
    }

    fs.writeFileSync(archivo, data)
  }

  return esMiddleware ? funcion : permiso
}
module.exports.lista = Object.keys(permisos)