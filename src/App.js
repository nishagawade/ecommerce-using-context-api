import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Context from './Context';

function App() {
  return (
    <div>
     <Context>
      <Router>
      <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </Context>
    </div>

  );
}

export default App;
