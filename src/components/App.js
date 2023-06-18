import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Social from './pages/Social';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <div className='navbar'>
        <Nav />
      </div>
      
      <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/social' element={<Social />} />
      </Routes>
      </div>

      

    </div>
  );
}

export default App;
