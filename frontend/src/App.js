import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar/Navbar';
import Footer from './Components/Pages/Footer/Footer';
import Home  from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/"       element={<Home />}  />
          <Route path="/about"  element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
