import './App.css';
import Navbar from './Components/Pages/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Home />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
