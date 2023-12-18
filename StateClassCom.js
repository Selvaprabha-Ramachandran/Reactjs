import React,{ Component } from "react";
class StateClassCom extends Component 
{
    state={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({color:"Red",price:200})}
    Handle=()=>{this.setState({color:"Green",price:300})}
    render()
    {
        return(
            <div>
                <h1>The color I have selected is {this.state.color} the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click me</button>
                <button onClick={this.Handle}>Click me</button>
            </div>
        )
    }
}
export default StateClassCom;