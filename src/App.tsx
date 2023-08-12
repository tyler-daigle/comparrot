import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Comparrot from './components/Comparrot'

function App() {
  return (
    <div>
      <h1>Quality Comparerererer</h1>
      <Comparrot height={400} width={800} leftImage="http://placekitten.com/800/400" rightImage="https://placedog.net/800/400" />
    </div>
  )
}

export default App
