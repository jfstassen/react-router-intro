import React, { Component } from 'react'

class Dog extends Component {
    render() {
        return (
            <div>
                DOG COMP
        <h3>this dog is named: {this.props.name}</h3>
            </div>
        )
    }
}

export default Dog
