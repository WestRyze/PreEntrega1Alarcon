alert("¡Bienvenido a nuestra tienda ClotheSite!");

alert(
  "Categorías de productos disponibles:\n1. Monitor\n2. Mouse\n3. Auriculares\n4. Teclado"
);

var productos = [
  {
    nombre:
      "Monitor Led Samsung 22'' Con Diseño Sin Bordes - Lf22t35 Dark blue gray",

    descripcion:
      "Pantalla led de 22. Tiene una resolución de 1920px-1080px. Relación de aspecto de 16:9. Panel IPS. Subrillo es de 250cd/m². Tipos de conexión: HDMI 1.4, D-Sub. Es reclinable.",

    precio: 85000,
  },
  {
    nombre: "Mouse De Juego Logitech G Series Lightsync G203 Negro",

    descripcion:
      "Mouse de Logitech G203 de color negro con 8000 de dpi maximo con 6 botones",

    precio: 40000,
  },
  {
    nombre: "Auriculares gamer HyperX Cloud Stinger HX-HSCS negro",

    descripcion:
      "Con cancelación de ruido. Micrófono flexible incorporado. El largo del cable es de 1.3 m. Sonido superior y sin límites. Cómodos y prácticos. Tamaño del altavoz: 50mm.",

    precio: 57000,
  },
  {
    nombre:
      "Teclado gamer T-Dagger Bora T-TGK315 QWERTY T-Dagger Blue español color negro con luz RGB",

    descripcion:
      "Resiste a salpicaduras. Función antighosting incorporada. Tipo de teclado: mecánico. Tecla cilíndrica. Con conector USB 3.1. Con cable removible. Medidas: 35cm de ancho, 3cm de alto y 12cm de profundidad.",

    precio: 30000,
  },
];

productos.sort(function (a, b) {
  return a.nombre.localeCompare(b.nombre);
});

var listaProductos = "Productos disponibles:\n\n";
for (var i = 0; i < productos.length; i++) {
  listaProductos += i + 1 + ". " + productos[i].nombre + "\n\n";
}

var eleccion = prompt(
  listaProductos + "Ingrese el número del producto que desea comprar:"
);

eleccion = parseInt(eleccion);
if (eleccion >= 1 && eleccion <= productos.length) {
  var productoElegido = productos[eleccion - 1];
  var confirmacion = confirm(
    "Has seleccionado: " +
      productoElegido.nombre +
      "\nDescripción: " +
      productoElegido.descripcion +
      "\nPrecio: $" +
      productoElegido.precio +
      "\n¿Quiere terminar su compra?"
  );
  if (confirmacion) {
    var fechaEntrega = new Date();
    fechaEntrega.setDate(fechaEntrega.getDate() + 7);
    alert(
      "¡Gracias por tu compra! La fecha estimada de entrega es " +
        fechaEntrega.toDateString() +
        "."
    );
  } else {
    alert("Gracias por visitarnos. ¡Esperamos verte de nuevo pronto!");
  }
} else {
  alert(
    "El número de producto ingresado no es válido. Por favor, selecciona un número de producto válido."
  );
}
