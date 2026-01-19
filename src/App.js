import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/Footer";
import Register from "./components/register";
import Login from "./components/login";
import ErrorPage from "./components/error";
import Dashboard from "./components/admin/dashboard";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<div style={{ padding: 20 }}>Shop Page</div>} />
        <Route path="/smartphones" element={<div style={{ padding: 20 }}>Smartphones Category</div>} />
        <Route path="/fashion" element={<div style={{ padding: 20 }}>Fashion Category</div>} />
        <Route path="/home-living" element={<div style={{ padding: 20 }}>Home & Living Category</div>} />
        <Route path="/beauty" element={<div style={{ padding: 20 }}>Beauty Category</div>} />
        <Route path="/accessories" element={<div style={{ padding: 20 }}>Accessories Category</div>} />
        <Route path="/toys" element={<div style={{ padding: 20 }}>Toys Category</div>} />
        <Route path="/laptops" element={<div style={{ padding: 20 }}>Laptops Category</div>} />
        <Route path="/audio" element={<div style={{ padding: 20 }}>Audio Category</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
