import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
