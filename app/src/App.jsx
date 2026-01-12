import { useState } from 'react';
import './css/index.css';
import About from './components/About.jsx';
import {Project} from './components/Project';
import {Stacks} from './components/Stacks';
import {Contacts} from './components/Contacts';
import Works from './components/works';

export  {App};
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <About />
      <Project />
      <Stacks />
      <Contacts />
      <Works />
    </div>
  );
}


