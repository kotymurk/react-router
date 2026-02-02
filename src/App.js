import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage';
import About from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Notfoudpage from './pages/Notfoudpage';

function App() {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/post'>Blog</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <main className='content'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/post' element={<Blogpage />} />
          <Route path='*' element={<Notfoudpage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
