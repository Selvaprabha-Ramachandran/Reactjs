import React, { Component } from 'react'
export default class PropsClass extends Component 
{
    render()
    {
        return(
            <div>
                <h1>My Degree is {this.props.degree}</h1>
            </div>
        )
    }
}