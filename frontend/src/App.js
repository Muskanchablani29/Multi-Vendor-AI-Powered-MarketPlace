import './App.css';
import Navbar from './Components/Pages/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Home />
      </div>
    </>
  );
}

export default App;
