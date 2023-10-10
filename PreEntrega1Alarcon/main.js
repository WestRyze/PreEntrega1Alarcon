let nombreUsuario = prompt("Ingresa tu nombre");
alert("Bienvenido a Clothesite " + nombreUsuario);

let contador = 0;

function calcularPrecioFinal(precio, impuestos, descuento) {
  const impuestosCalculados = (precio * impuestos) / 100;
  const descuentoCalculado = (precio * descuento) / 100;
  const precioFinal = precio + impuestosCalculados - descuentoCalculado;
  return precioFinal;
}

function main() {
  console.log("Este es el precio final del producto que queres saber");

  while (contador < 3) {
    const precio = Number(prompt("Ingrese el precio del producto:"));
    const impuestos = Number(prompt("Ingrese el porcentaje de impuestos (%):"));
    const descuento = Number(prompt("Ingrese el porcentaje de descuento (%):"));

    if (precio < 0 || impuestos < 0 || descuento < 0) {
      alert("Por favor, ingrese valores numéricos mayores a 0");
      console.log("Por favor, ingrese valores numéricos mayores a 0");
      return;
    }

    contador++;
    alert("Estas llevando estos productos: " + contador);
  }
  const precioFinal = calcularPrecioFinal(precio, impuestos, descuento);
  console.log(`El precio final del producto es: ${precioFinal}`);
}

main();
