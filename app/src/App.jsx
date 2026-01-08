import { useState } from 'react';
import './css/index.css';
import Home from './components/Home';
import Project from './components/Project';
import Stacks from './components/Stacks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Project />
      <Stacks />
    </div>
  );
}

export default App;
