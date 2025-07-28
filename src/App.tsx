import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Offers from './pages/OffersWeek';
import HomePage from './pages/HomePage';
import Institutional from './pages/Institutional';

export default function App() {
  return (
    <Router>
      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/institucional" element={<Institutional />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
