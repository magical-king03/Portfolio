import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Background from './Background';
import '../css/App.css';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='md:w-[800px] md:flex md:my-[100px] md:mx-auto text-white'>
      <Background />
      <div className='flex items-center justify-center md:block'>
        <Nav />
      </div>
      <br />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          {/* <Route path='/social' element={<Social />} /> */}
        </Routes>
    <Footer />
      </div>


    </div>
  );
}

export default App;
