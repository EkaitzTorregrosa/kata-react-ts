import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { datosMercancia } from "./logica-beneficio";
import { Component } from "react";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      kgVieira: "",
      kgPulpo: "",
      kgCentollo: "",
    };

    this.handleChangeVieira = this.handleChangeVieira.bind(this);
    this.handleChangePulpo = this.handleChangePulpo.bind(this);
    this.handleChangeCentollo = this.handleChangeCentollo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeVieira(e: any) {
    this.setState({ kgVieira: e.target.value });
  }
  handleChangePulpo(e: any) {
    this.setState({ kgPulpo: e.target.value });
  }
  handleChangeCentollo(e: any) {
    this.setState({ kgCentollo: e.target.value });
  }

  handleSubmit(event: any) {
    alert(
      datosMercancia(
        this.state.kgVieira,
        this.state.kgPulpo,
        this.state.kgCentollo
      )
    );
    event.preventDefault();
  }
  render() {
    return (
      <div className="container mt-5 col-6">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="vieiraKg" className="col-sm-2 col-form-label">
              Vieira KG:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                pattern="[0-9]*"
                required={true}
                className="form-control"
                onChange={this.handleChangeVieira}
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
                pattern="[0-9]*"
                required={true}
                className="form-control"
                onChange={this.handleChangePulpo}
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
                pattern="[0-9]*"
                required={true}
                className="form-control"
                onChange={this.handleChangeCentollo}
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
}

export default App;
