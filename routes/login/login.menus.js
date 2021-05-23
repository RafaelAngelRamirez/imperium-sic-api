const codice_security = require("@codice-progressio/express-authentication")
const $ = codice_security.configuraciones.easy_permissions.$
const p = codice_security.configuraciones.permisos


module.exports = function (permisos) {
  var menusSeleccionables = generarMenus()
  if (!permisos.includes(p.administrador.permiso)) {
    //En caso de que no sea el SUPER_ADMIN debemos eliminar los
    // menus que no coinciden contra los permisos que estan
    // en el arreglo del usuario.
    menusSeleccionables = generarMenuSegunPermisos(
      permisos,
      menusSeleccionables
    )
  }

  //Obtenemos solo los valores
  var menu = Object.values(menusSeleccionables)
  menu.sort((a, b) => (a.titulo > b.titulo ? 1 : -1))
  //Agregmos el dashboar
  menu.unshift(principal())
  menu.forEach(m => m.submenu.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)))
  return menu
}

function generarMenuSegunPermisos(permisos, OBJETO_MENUS) {
  return (
    Object.keys(OBJETO_MENUS)
      //Dejamos solo los menus generales de los que tenemos permiso
      .filter(key => {
        return permisos.includes(OBJETO_MENUS[key].permiso)
      })
      .map(key => {
        //Filtramos los submenus
        const menu = OBJETO_MENUS[key]
        menu.submenu = menu.submenu.filter(sm => permisos.includes(sm.permiso))
        return menu
      })
  )
}

function generarMenus() {
  return {
    // REPORTES: reportes(),
    ALMACENES: almacenes(),
    // CONTROL_DE_PRODUCCION: controlDeProduccion(),
    // INGENIERIA: ingenieria(),
    VENTAS: ventas(),
    COMPRAS: compras(),
    ADMINISTRADOR: administrador(),
    // RH: rh(),
    // parametros: parametros(),
  }
}

function principal() {
  const menu = {
    // TODO MUNDO DEBE DE TENER ESTO.
    permiso: $("login", false),
    titulo: "Avisos",
    icono: "fas fa-comments",
    submenu: [
      {
        titulo: "Dashboard",
        url: "/dashboard",
        permiso: $("login", false),
      },
    ],
  }
  return menu
}

function reportes() {
  const menu = {
    permiso: $("menu:reportes", false, "Ver el menu de reportes"),
    titulo: "Reportes",
    icono: "fas fa-chart-pie",
    submenu: [
      {
        titulo: "Faltante producto terminado",
        url: "/reportes/productoTerminado/faltantes",
        permiso: $("menu:reportes:productoTerminado:faltantes", false),
      },
      {
        titulo: "Faltantes almacen de produccion",
        url: "/reportes/almacenDeProduccion/faltantes",
        permiso: $("menu:reportes:almacenDeProduccion:faltantes", false),
      },
      {
        titulo: "Personalizados",
        url: "/reportes/almacenDeProduccion/personalizado",
        permiso: $("menu:reportes:almacenDeProduccion:personalizado", false),
      },
      {
        titulo: "Transformacion",
        url: "/reportes/transformacion",
        permiso: $("menu:reportes:transformacion", false),
      },
    ],
  }

  return menu
}

function almacenes() {
  const menu = {
    permiso: $("menu:almacen", false, "Mostrar el menu de almacen"),
    titulo: " Almacen",
    icono: "fas fa-warehouse",
    submenu: [
      {
        titulo: "Almacen",
        url: "/almacen",
        permiso: $(
          "menu:almacen:sku",
          false,
          "Menu de gestion general del almacen"
        ),
      },
    ],
  }
  return menu
}

function controlDeProduccion() {
  const menu = {
    permiso: $("menu:controlDeProduccion", false),
    titulo: "Control de Producción",
    icono: "fas fa-project-diagram",
    submenu: [
      {
        titulo: "Revision de folios",
        url: "/folios/revision",
        permiso: $("menu:controlDeProduccion:folios:revision", false),
      },
      {
        titulo: "Seguimientos",
        url: "/folios/seguimiento",
        permiso: $("menu:controlDeProduccion:folios:seguimiento", false),
      },
      {
        titulo: "Asignar ordenes",
        url: "/folios/asignarOrdenes",
        permiso: $("menu:controlDeProduccion:folios:asignarOrdenes", false),
      },
    ],
  }

  return menu
}

function ingenieria() {
  const menu = {
    permiso: $("menu:ingenieria:", false),
    titulo: "Ingenieria",
    icono: "fas fa-cogs",
    submenu: [
      {
        titulo: "Procesos",
        url: "/procesos",
        permiso: $("menu:ingenieria:procesos", false),
      },
      {
        titulo: "Procesos - Familias",
        url: "/familiaDeProcesos",
        permiso: $("menu:ingenieria:familiaDeProcesos", false),
      },
      {
        titulo: "Modelos",
        url: "/modelos",
        permiso: $("menu:ingenieria:modelos", false),
      },
      {
        titulo: "Tamanos",
        url: "/tamanos",
        permiso: $("menu:ingenieria:tamanos", false),
      },
      {
        titulo: "Colores",
        url: "/colores",
        permiso: $("menu:ingenieria:colores", false),
      },
      {
        titulo: "Terminados",
        url: "/terminados",
        permiso: $("menu:ingenieria:terminados", false),
      },
      {
        titulo: "SKU - Produccion",
        url: "/sku",
        permiso: $("menu:ingenieria:sku", false),
      },
      {
        titulo: "Maquinas",
        url: "/maquinas",
        permiso: $("menu:ingenieria:maquinas", false),
      },

      // { titulo: 'Costos de proceso', url: '/procesos/costos', permiso: [] },
      // { titulo: 'Hit', url: '/hits', permiso: [] },
    ],
  }
  return menu
}

function ventas() {
  const menu = {
    permiso: $("menu:ventas", "Ver el menu de ventas"),
    titulo: "Ventas",
    icono: "fas fa-file-contract",
    submenu: [
      {
        titulo: "Mis Pedidos",
        url: "/ventas/misPedidos",
        permiso: $("menu:ventas:mis-pedidos", false),
      },
    ],
  }

  return menu
}

function parametros() {
  const menu = {
    permiso: $(
      "menu:parametros",
      "Ver el menú para  modificar parametros del sistema"
    ),
    titulo: "Parametros",
    icono: "fas fa-microchip",
    submenu: [
      // {
      //   titulo: "Localizacion de pedidos",
      //   url: "/parametros/localizacion",
      //   permiso: $(
      //     "menu:parametros:localizacion",
      //     "Ver el menú para crear la localiz"
      //   ),
      // },
      // {
      //   titulo: "Estaciones de escaneo",
      //   url: "/parametros/estaciones",
      //   permiso: $("SUPER_ADMIN", false),
      // },
    ],
  }
  return menu
}

function compras() {
  const menu = {
    permiso: $("menu:compras", false),
    titulo: "Compras",
    icono: "fas fa-shopping-bag",
    submenu: [
      {
        titulo: "Compras",
        url: "/compras",
        permiso: $("menu:compras", false),
      },
      {
        titulo: "Contactos",
        url: "/compras/contactos",
        permiso: $("menu:compras:contactos", false),
      },
      // {
      //   titulo: "Divisas",
      //   url: "/divisas",
      //   permiso: $("menu:compras:divisas", false),
      // },
    ],
  }
  return menu
}

function administrador() {
  const menu = {
    permiso: $("menu:administrador", "Ver el menu de administrador"),
    titulo: "Administrador",
    icono: "fas fa-user-cog",
    submenu: [
      {
        titulo: "Usuarios",
        url: "/usuario",
        permiso: $(
          "menu:administrador:usuarios",
          "Ver el menu de usuarios dentro del menu administrador"
        ),
      },
      // {
      //   titulo: "Departametos",
      //   url: "/departamentos",
      //   permiso: $(
      //     "menu:administrador:departamentos",
      //     "Ver el menu de gestion de departamentos"
      //   ),
      // },
      {
        titulo: "Parametros",
        url: "/parametros",
        permiso: $(
          "menu:administrador:parametros",
          "Ver el menu de parametros"
        ),
      },
      {
        titulo: "Rutas",
        url: "/parametros/rutas-de-entrega",
        permiso: $(
          "menu:administrador:rutas-de-entrega",
          "Ver el menu de parametros de ruta de entrega"
        ),
      },
      // {
      //   titulo: "Areas",
      //   url: "/areas",
      //   permiso: $("menu:administrador:areas", false),
      // },
      // {
      //   titulo: "Clientes",
      //   url: "/clientes",
      //   permiso: $("menu:administrador:clientes", false),
      // },
      // {
      //   titulo: "Almacen descripcion",
      //   url: "/almacenDescripcion",
      //   permiso: $("menu:administrador:almacenDescripcion", false),
      // },
    ],
  }
  return menu
}

function rh() {
  const menu = {
    permiso: $("menu:rh", false),
    titulo: "RH",
    icono: "fas fa-user-plus",
    submenu: [
      {
        titulo: "Empleados",
        url: "/empleados",
        permiso: $("menu:rh:empleados", false),
      },
      {
        titulo: "Cursos",
        url: "/cursos",
        permiso: $("menu:rh:cursos", false),
      },
      {
        titulo: "Puestos",
        url: "/puestos",
        permiso: $("menu:rh:puestos", false),
      },
    ],
  }
  return menu
}
