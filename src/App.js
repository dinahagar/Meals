import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Random from './components/RandomPage/Random';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/random' element={<Random />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
