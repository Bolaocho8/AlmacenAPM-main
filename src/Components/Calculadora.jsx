import { render } from "@testing-library/react";
import Display from "./Display"
import PanelDeBotone from "./PanelDeBotones"
import { Component } from "react";
import operaciones from "../logic/operaciones";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";


export class Calculadora extends Component {
  state = {
    total:null,
    siguiente:null,
    operador:null,
  }
  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))

  render() {
  return (
    <div className="component-app">     
      <button type="button" class="btn btn-primary btn-lg">Calculadora basica</button>
      <Display value={this.state.siguiente || this.state.total || "0"} />
      <PanelDeBotone clickHandle={this.handleClick} />
      
    </div>
  ); 
} 
}

