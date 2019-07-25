import React, { Component } from 'react'

class TickClass extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
        console.log('componentWillUnmount')
    }

    tick() {
        this.setState({date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, Class!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

  export default TickClass
