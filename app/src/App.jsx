import { useState } from 'react';
import './css/App.css';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contatos from './components/Contatos';
import Stacks from './components/Stacks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section style={{ backgroundColor: '#000000ff' }}>
        <Home />
      </section>
      <section style={{ backgroundColor: '#ff0cdfff' }}>
        <About />
      </section>
      <section style={{ backgroundColor: '#0606eeff' }}>
        <Stacks />
      </section>
      <section style={{ backgroundColor: '#ffe4e1' }}>
        <Project />
      </section>
      <section style={{ backgroundColor: '#f5f5dc' }}>
        <Contatos />
      </section>
    </div>
  );
}

export default App;
