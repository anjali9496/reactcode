import { React, Component } from "react";

export default class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.value,
            isActive : "true",
            list : []
        }
        this.isActiveChange = this.isActiveChange.bind(this);
    }

    isActiveChange(data) {
        debugger;
            this.setState(prevState => ({
            isActive: data
    }));
    }
    render() {
        return (
            <>
                <h4> hello {this.state.name} <br /> isActive  {this.state.isActive} </h4>
                <ul>
                    {this.state.list.map((item,index) => (
                        <li key={index+1}>{item}</li>
                    ))
                    }
                </ul>
                <button onClick={() => this.isActiveChange("Shoaib")}>Is Active Change</button>
            </>
        )
                }
}

