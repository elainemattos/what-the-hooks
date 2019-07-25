import React, { useState, useEffect } from 'react'

const TickFunctional = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
     let timerID = setInterval( () => tick(), 1000 )
     console.log('componentDidMount')

     return function cleanup() {
         clearInterval(timerID)
         console.log('componentWillUnmount')
       }
    })

    const tick = () => {
    setDate(new Date())
    }

    return (
        <div>
            <h1>Hello, Functional!</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default TickFunctional
