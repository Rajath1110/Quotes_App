import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuotesGallery from './components/QuotesGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuotesGallery/>
      
    </>
  )
}

export default App
