import { useState } from 'react'
import { Tweet } from './components/Tweet' 

import './styles/App.css';
import { AppRoutes } from './routes/routes';

function App() {
  // Definir um Estado, na qual é definido o tipo dele com <tipo[se é um array]>
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  // Criar uma função dentro do React fora do Return 
  function createTweet(){
    setTweets([...tweets, ])
  }

  return (

    <AppRoutes />
    )
  }
  
  export default App
  
      // <div>
      //   {/* Percorre o tweets para retornar no laço de repetição */}
      //   {tweets.map(tweet => {
      //     return <Tweet text={tweet}/>
      //   })}
        
      //   <input type="text" />
      //   <button onClick={createTweet} style={{ 
      //     backgroundColor: 'B257e6',
      //     border: 0,
      //     padding: '6px 12px',
      //     color: 'e1e1f6'
      //    }}>
      //      Adicionar Tweet</button>
      // </div>

// https://youtu.be/pDbcC-xSat4?t=1195
