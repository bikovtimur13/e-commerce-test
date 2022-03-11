import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
//import data from './data';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
