import './App.css';
import Footer from './pages/footer';
import Home from './pages/home';
import Test from './pages/test';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './pages/productDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home />}  />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
