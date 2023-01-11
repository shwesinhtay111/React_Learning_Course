import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialVlaue,
    };
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  increment(event) {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("run+", event);
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
    console.log("run-");
  }
  render() {
    return (
      <div>
        Counter
        <button
          className="btn btn-success"
          type="button"
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            this.increment(event)
          }
        >
          +
        </button>
        &nbsp;{this.state.counter} &nbsp;
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => this.decrement()}
        >
          -
        </button>
      </div>
    );
  }
}
