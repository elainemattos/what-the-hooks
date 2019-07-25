import React, { Component } from 'react'
import TickClass from '../useEffect-exemplo/TickClass'

class ToggleClass extends Component{
  state = {
    toggle: false
  }

  toggleHandler = () => {
      this.setState({
        toggle: !this.state.toggle
      })
    }

  render(){
    return(
      <div>
        <button onClick={this.toggleHandler}
          >Toggle Class
        </button>
         { this.state.toggle === true ?
          <div>
          <TickClass />
          <p>The Toggle Class component works!</p>
         </div> : null
          }
      </div>
    )
  }
}

export default ToggleClass
