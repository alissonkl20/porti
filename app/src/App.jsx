import './css/index.css';
import {About} from './components/About.jsx';
import {Project} from './components/Project';
import {Stacks} from './components/Stacks';
import {Contacts} from './components/Contacts';
import {Works} from './components/works';
import  { Maps }  from './components/Maps.jsx';
import { Android } from './components/animation/Android.jsx';

export function App() {
  return (
    <div>
      <About />
      <Project />
      <Stacks />
      <Contacts />
      <Works />
      <Android />
      <Maps />
    </div>
  );
}


