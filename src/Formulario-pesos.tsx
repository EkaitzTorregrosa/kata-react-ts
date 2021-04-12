import "bootstrap/dist/css/bootstrap.css";
import { ciudadConMayorBeneficio } from "./logica-beneficio";
import { useState, useEffect } from "react";

export function FormularioPesos() {
  const [cantidadVieiras, setCantidadVieiras] = useState(0);
  const [cantidadPulpo, setCantidadPulpo] = useState(0);
  const [cantidadCentollo, setCantidadCentollo] = useState(0);
  const [isWithValue, setIsValue] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  let msgCiudadMayorBeneficio: string = "";

  useEffect(() => {
    if (isWithValue) {
      msgCiudadMayorBeneficio = ciudadConMayorBeneficio(
        isNaN(cantidadVieiras) ? 0 : cantidadVieiras,
        isNaN(cantidadPulpo) ? 0 : cantidadPulpo,
        isNaN(cantidadCentollo) ? 0 : cantidadCentollo
      );
      // @ts-ignore: Object is possibly 'null'.
      document.getElementById(
        "msgCiudadMayorBeneficio"
      ).innerHTML = msgCiudadMayorBeneficio;

      setIsValue(false);
    }
  }, [isWithValue]);

  return (
    <div className="container mt-5 col-6">
      <form id="formPesos">
        <div className="row mb-3">
          <label htmlFor="vieiraKg" className="col-sm-2 col-form-label">
            Vieira KG:
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              name="vieiras"
              required={true}
              className="form-control"
              onChange={(event) => {
                setCantidadVieiras(parseFloat(event.target.value));
                setIsValue(true);
                setHasResult(true);
              }}
              defaultValue="0"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="pulpoKg" className="col-sm-2 col-form-label">
            Pulpo KG:
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              name="pulpos"
              required={true}
              className="form-control"
              onChange={(event) => {
                setCantidadPulpo(parseFloat(event.target.value));
                setIsValue(true);
                setHasResult(true);
              }}
              defaultValue="0"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="centolloKg" className="col-sm-2 col-form-label">
            Centollo KG:
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              name="centollos"
              required={true}
              className="form-control"
              onChange={(event) => {
                setCantidadCentollo(parseFloat(event.target.value));
                setIsValue(true);
                setHasResult(true);
              }}
              defaultValue="0"
            />
          </div>
        </div>
      </form>
      {hasResult && (
        <div
          id="msgCiudadMayorBeneficio"
          className="m-5 alert alert-success"
        ></div>
      )}
    </div>
  );
}
