import React, { useState } from 'react'
import TickFunctional from '../useEffect-exemplo/TickFunctional'

const ToggleFunctional = () => {
  const [toggleState, untoggle] = useState(false)

  const toggleHandler = () => {
    untoggle(toggleState => !toggleState)
  }

  return(
    <div>
      <button onClick={toggleHandler}
        >Toggle Functional
      </button>
       { toggleState === true ?
        <div>
        <TickFunctional/>
          <p>The Toggle Functional Component works!</p>
       </div> : null
        }
    </div>
  )
}

export default ToggleFunctional
