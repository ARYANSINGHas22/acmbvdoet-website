import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Events from './component/Events';
import Team from './component/Team';
import Landing from './component/Landing';
import Gallery from './component/Gallery';
import Navbar from './component/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


