import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import LandingPage from './pages/LandingPage';
import GestioneOrdiniPage from './pages/GestioneOrdiniPage';
import RepartoSalesPage from './pages/RepartoSalesPage';
import AppUnavailablePage from './pages/AppUnavailablePage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CookieBanner from './components/landing/CookieBanner';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/casi-duso/gestione-ordini" element={<GestioneOrdiniPage />} />
          <Route path="/casi-duso/reparto-sales" element={<RepartoSalesPage />} />
          <Route path="/unavailable" element={<AppUnavailablePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
