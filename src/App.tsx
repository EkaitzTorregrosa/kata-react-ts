
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {datosMercancia} from './logica-beneficio';

function App() {
  function handleSubmit(event:any) {
    event.preventDefault()

    alert(
      datosMercancia(
        event.target.kgVieira.value,
        event.target.kgPulpo.value,
        event.target.kgCentollo.value
      )
    )
  }
  return (
    <div className="container mt-5 col-6">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="vieiraKg" className="col-sm-2 col-form-label">Vieira KG:</label>
          <div className="col-sm-10">
            <input
              id="vieiraKg"
              type="text"
              pattern="[0-9]*"
              required={true}
              name="kgVieira"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="pulpoKg" className="col-sm-2 col-form-label">Pulpo KG:</label>
          <div className="col-sm-10">
            <input
              id="pulpoKg"
              type="text"
              pattern="[0-9]*"
              required={true}
              name="kgPulpo"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="centolloKg" className="col-sm-2 col-form-label">Centollo KG:</label>
          <div className="col-sm-10">
            <input
              id="centolloKg"
              type="text"
              pattern="[0-9]*"
              required={true}
              name="kgCentollo"
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default App;