import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "./calculate";
import "./Calculator.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

export default class Calculator extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
