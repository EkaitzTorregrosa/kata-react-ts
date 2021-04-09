import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { FormularioPesos } from "./Formulario-pesos";

export default function App() {
  return (
    <div className="App">
      <header>
        <h2>Consulta Mejor Destino</h2>
      </header>
      <body>
        <FormularioPesos />
      </body>
    </div>
  );
}
