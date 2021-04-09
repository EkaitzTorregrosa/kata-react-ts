import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ciudadConMayorBeneficio } from "./logica-beneficio";
import { useState, useEffect } from "react";

/* Author: Ekaitz Torregrosa */

export default function App() {
  const [cantVieiras, setCantVieiras] = useState(0);
  const [cantPulpo, setCantPulpo] = useState(0);
  const [cantCentollo, setCantCentollo] = useState(0);
  const [isWithValue, setIsValue] = useState(false);

  useEffect(() => {
    if (isWithValue) {
      alert(ciudadConMayorBeneficio(cantVieiras, cantPulpo, cantCentollo));
      setIsValue(false);
    }
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    setCantVieiras(parseFloat(event.target.elements.vieiras.value));
    setCantPulpo(parseFloat(event.target.elements.pulpos.value));
    setCantCentollo(parseFloat(event.target.elements.centollos.value));

    setIsValue(true);

    limpiarInputs(event);
  }
  function limpiarInputs(event: any) {
    event.target.elements.vieiras.value = "";
    event.target.elements.pulpos.value = "";
    event.target.elements.centollos.value = "";
  }

  return (
    <div className="container mt-5 col-6">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="vieiraKg" className="col-sm-2 col-form-label">
            Vieira KG:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="vieiras"
              pattern="[0-9]*"
              required={true}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="pulpoKg" className="col-sm-2 col-form-label">
            Pulpo KG:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="pulpos"
              pattern="[0-9]*"
              required={true}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="centolloKg" className="col-sm-2 col-form-label">
            Centollo KG:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="centollos"
              pattern="[0-9]*"
              required={true}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
