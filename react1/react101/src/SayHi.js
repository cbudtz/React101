import * as React from "react";
import {Component} from "react";

class SayHi extends Component{
    render() {return <div>Hi, {this.props.name} </div>
    }
}
export default SayHi;