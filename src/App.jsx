import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Events from './component/Events';
import Team from './component/Team';
import Landing from './component/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


