import { Component } from "react";

export class FormView extends Component {
    constructor(props){
        super();
        debugger;
    this.state = {value: props.value};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(event) {
    // debugger;
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // debugger;
    alert('A name was submitted: ' +  this.state.value);
    event.preventDefault();
  }

   render() {
     
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Value"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
}



