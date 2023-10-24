import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery Game",
    maxBalls: 6,
    maxNum: 56,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button className="btn" onClick={this.handleClick}>
          Lucky Numbers of the Day!
        </button>
      </section>
    );
  }
}

export default Lottery;
