import { Navigate, Route, Routes } from 'react-router-dom';
import MarketingHome from './pages/MarketingHome.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Ecosystem from './pages/Ecosystem.jsx';
import Roadmap from './pages/Roadmap.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingHome />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
