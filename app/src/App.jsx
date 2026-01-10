import { useState } from 'react';
import './css/index.css';
import Home from './components/Home.jsx';
import {Project} from './components/Project';
import {Stacks} from './components/Stacks';
import {Contacts} from './components/Contacts';

export  {App};
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


