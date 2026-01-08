import { useState } from 'react';
import './css/index.css';
import Home from './components/Home';
import Project from './components/Project';
import Stacks from './components/Stacks';
import Contacts from './components/Contacts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Project />
      <Stacks />
      <Contacts />
    </div>
  );
}

export default App;
