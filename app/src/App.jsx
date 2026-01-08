import { useState } from 'react';
import './css/App.css';
import Home from './components/Home';
import Project from './components/Project';
import Stacks from './components/Stacks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section style={{ backgroundColor: '#000000ff' }}>
        <Home />
      </section>
      <section style={{ backgroundColor: '#000000ff' }}>
        <Stacks />
      </section>
      <section style={{ backgroundColor: '#000000ff' }}>
        <Project />
      </section>
    </div>
  );
}

export default App;
