import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div style={{ padding: 20 }}>Home Page</div>} />
          <Route path="/shop" element={<div style={{ padding: 20 }}>Shop Category</div>} />
          <Route path="/smartphones" element={<div style={{ padding: 20 }}>Smartphones Category</div>} />
          <Route path="/laptops" element={<div style={{ padding: 20 }}>Laptops Category</div>} />
          <Route path="/audio" element={<div style={{ padding: 20 }}>Audio Category</div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
