import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Weather from './components/Weather';
import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
      },1000)

  },[])

  return (
    
    <div className="App">
      { loading ? <Loading /> : <Weather />}
        
    </div>
  )
}

export default App
