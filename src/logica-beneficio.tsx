/* Author: Ekaitz Torregrosa */

var gananciasCiudades: any = {};
export function ciudadConMayorBeneficio(
  kgVieiras: number,
  kgPulpo: number,
  kgCentollo: number
) {
  var precioBrutoMadrid =
    calcularPrecioBruto("vieira", kgVieiras, "madrid") +
    calcularPrecioBruto("pulpo", kgPulpo, "madrid") +
    calcularPrecioBruto("centollo", kgCentollo, "madrid");

  var precioBrutoBarcelona =
    calcularPrecioBruto("vieira", kgVieiras, "barcelona") +
    calcularPrecioBruto("pulpo", kgPulpo, "barcelona") +
    calcularPrecioBruto("centollo", kgCentollo, "barcelona");

  var precioBrutoLisboa =
    calcularPrecioBruto("vieira", kgVieiras, "lisboa") +
    calcularPrecioBruto("pulpo", kgPulpo, "lisboa") +
    calcularPrecioBruto("centollo", kgCentollo, "lisboa");

  calcularGanancias("madrid", precioBrutoMadrid);
  calcularGanancias("barcelona", precioBrutoBarcelona);
  calcularGanancias("lisboa", precioBrutoLisboa);

  var items = Object.keys(gananciasCiudades).map(function (key) {
    return [key[0].toUpperCase() + key.slice(1), gananciasCiudades[key]];
  });
  items.sort(function (first: any, second: any) {
    return second[1] - first[1];
  });
  return `El sitio donde obtendrá mayor beneficio es ${items[0][0]}, con un beneficio de ${items[0][1]} €`;
}

function calcularPrecioBruto(producto: string, kilos: number, ciudad: string) {
  var precioProductosPorCiudad: any = {
    vieira: { madrid: 500, barcelona: 450, lisboa: 600 },
    pulpo: { madrid: 0, barcelona: 120, lisboa: 100 },
    centollo: { madrid: 450, barcelona: 0, lisboa: 500 },
  };

  var preciosProducto: any = precioProductosPorCiudad[producto];
  var precioEstimado: number = kilos * preciosProducto[ciudad];
  return precioEstimado;
}

function calcularGanancias(ciudad: string, precioEstimado: number) {
  var distancias: any = {
    madrid: 800,
    barcelona: 1100,
    lisboa: 600,
  };
  var distanciaACiudad: number = distancias[ciudad];
  var precioFinal: number =
    (precioEstimado - (5 + 2 * distanciaACiudad)) *
    ((100 - distanciaACiudad / 100) / 100);
  gananciasCiudades[ciudad] = precioFinal.toFixed(2);
}
