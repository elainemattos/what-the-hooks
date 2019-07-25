import React from 'react'
import './App.css'
import ToggleClass from './Components/useState-exemplo/ToggleClass';
import ToggleFunctional from './Components/useState-exemplo/ToggleFunctional';

export default function App() {
  return (
    <div className="App">
      <ToggleClass />
      <ToggleFunctional />
    </div>
  )
}
