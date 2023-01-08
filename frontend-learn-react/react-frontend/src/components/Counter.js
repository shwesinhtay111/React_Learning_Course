import React from "react";
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            counter : this.props.initialVlaue
        }
    }
    increment(){
        this.setState({
            counter : this.state.counter+1
        }) ;
        console.log("run+");
    }
    decrement(){
        this.setState( {
            counter : this.state.counter-1
        }) 
        console.log("run-");
    }
  render() {

    return (
    <div>
        Counter
        <button type="button" onClick={()=>this.increment()}>+</button>
        &nbsp;{this.state.counter} &nbsp;
        <button type="button" onClick={()=>this.decrement()}>-</button>
    </div>);
  }
}
