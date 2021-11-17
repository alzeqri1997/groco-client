import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Review from './pages/Review/Review';
import ContactUs from './pages/Contact-Us/ContactUs';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/blog" element={<Blog />} />
      </BrowserRouter>
    </>
  );
}

export default App;
