import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './component/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


