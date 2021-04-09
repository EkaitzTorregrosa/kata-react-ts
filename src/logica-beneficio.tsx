const gananciasCiudades: any = {
  madrid: 0,
  barcelona: 0,
  lisboa: 0,
};

const vieira: string = "vieira";
const pulpo: string = "pulpo";
const centollo: string = "centollo";

const madrid: string = "madrid";
const barcelona: string = "barcelona";
const lisboa: string = "lisboa";

export function ciudadConMayorBeneficio(
  kgVieiras: number,
  kgPulpo: number,
  kgCentollo: number
): string {
  let precioBrutoMadrid =
    calcularPrecioBruto(vieira, kgVieiras, madrid) +
    calcularPrecioBruto(pulpo, kgPulpo, madrid) +
    calcularPrecioBruto(centollo, kgCentollo, madrid);

  let precioBrutoBarcelona =
    calcularPrecioBruto(vieira, kgVieiras, barcelona) +
    calcularPrecioBruto(pulpo, kgPulpo, barcelona) +
    calcularPrecioBruto(centollo, kgCentollo, barcelona);

  let precioBrutoLisboa =
    calcularPrecioBruto(vieira, kgVieiras, lisboa) +
    calcularPrecioBruto(pulpo, kgPulpo, lisboa) +
    calcularPrecioBruto(centollo, kgCentollo, lisboa);

  calcularGanancias(madrid, precioBrutoMadrid);
  calcularGanancias(barcelona, precioBrutoBarcelona);
  calcularGanancias(lisboa, precioBrutoLisboa);

  let ciudadesPorGanancias = ordenarCiudadesPorGanancia();

  return `El sitio donde obtendrá mayor beneficio es ${ciudadesPorGanancias[0][0]}, con un beneficio de ${ciudadesPorGanancias[0][1]} €`;
}

function calcularPrecioBruto(
  producto: string,
  kilos: number,
  ciudad: string
): number {
  let precioProductosPorCiudad: any = {
    vieira: { madrid: 500, barcelona: 450, lisboa: 600 },
    pulpo: { madrid: 0, barcelona: 120, lisboa: 100 },
    centollo: { madrid: 450, barcelona: 0, lisboa: 500 },
  };

  let preciosProducto: any = precioProductosPorCiudad[producto];
  let precioEstimado: number = kilos * preciosProducto[ciudad];
  return precioEstimado;
}

function calcularGanancias(ciudad: string, precioEstimado: number) {
  let distancias: any = {
    madrid: 800,
    barcelona: 1100,
    lisboa: 600,
  };
  let distanciaACiudad: number = distancias[ciudad];
  let precioFinal: number =
    (precioEstimado - (5 + 2 * distanciaACiudad)) *
    ((100 - distanciaACiudad / 100) / 100);
  gananciasCiudades[ciudad] = precioFinal.toFixed(2);
}

function ordenarCiudadesPorGanancia() {
  let ciudades = Object.keys(gananciasCiudades).map(function (key) {
    return [key[0].toUpperCase() + key.slice(1), gananciasCiudades[key]];
  });
  ciudades.sort(function (first: any, second: any) {
    return second[1] - first[1];
  });

  return ciudades;
}
