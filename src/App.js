import { Outlet } from 'react-router-dom';
import Aboutme from './My Components/Aboutme';
import './App.css';
import Assignments from './My Components/Assignments';
import Nav from './My Components/Nav';
import Profile from './My Components/Profile';
import Project from './My Components/Projects';
import Skills from './My Components/Skills';

function App() {
  return (
    <div className="">
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
