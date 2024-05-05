import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer';
import {
  Home,
  Locations,
  About,
  Contact,
  WebDesign,
  GraphicDesign,
  AppDesign,
} from '@/pages/index';
import Header from './components/shared/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
