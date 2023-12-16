import React from "react"
import "./color.css"
export default class Hello extends React.Component
{
    
    render(){
        return(
            <div className="outer">
                <div className="inner">
            <p style = {{backgroundColor : this.props.col}}>Hello {this.props.name}</p>
            </div>
            </div>
        )
    }
}