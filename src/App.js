import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';
import Navbar from './Components/Navbar';
// import Contact from './Components/pages/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />}/>  
       <Route path='/about' element={<About />} />
      </Routes>
      <Contact / >

    </>
  );
}

export default App;
