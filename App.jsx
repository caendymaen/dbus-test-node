import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('a');

  useEffect(function(){
    const handleFetchData = async () => {
      try {
      const response = await fetch('http://localhost:3000/api/routes');
      //const data = await response.json();
      const testtext = await response.text();
      setText(testtext);
    }
    catch (e) {
      setText(e.toString());
    }
  }
  handleFetchData();
  }, [])

  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<>index</>} />
        <Route path="/about" element={<>about</>} />
        <Route path="/contact" element={<>contact</>} />
      </Routes>
    </BrowserRouter>
    <div>
      test: {text}
      <br /> winloc: {window.location.href}
      <br /> winloc: {window.location.protocol}
      <br /> winloc: {window.location.port}
      <br /> winloc: {window.location.hostname}
      <br /> winloc: {window.location.pathname}
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
