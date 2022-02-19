import { useState } from 'react'
import { Tweet } from './components/Tweet' 

function App() {
  // Definir um Estado, na qual é definido o tipo dele com <tipo[se é um array]>
  const [] = useState<string[]>([])

  return (

    <div>
      <Tweet text="Tweet 1"/>
      <Tweet text="Tweet 2"/>
      <Tweet text="Tweet 3"/> 

      <button> Adicionar Tweet</button>
    </div>
  )
}

export default App

// https://youtu.be/pDbcC-xSat4?t=1195
