import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contatos from './components/Contatos';
import Navbar from './components/Navbar';
import Stacks from './components/Stacks';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/stack" element={<Stacks />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  );
}

export default App;
