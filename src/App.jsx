import { Navigate, Route, Routes } from 'react-router-dom';
import MarketingHome from './pages/MarketingHome.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Ecosystem from './pages/Ecosystem.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Tokens from './pages/Tokens.jsx';
import BlogIndex from './pages/blog/BlogIndex.jsx';
import BlogPost from './pages/blog/BlogPost.jsx';
import Press from './pages/Press.jsx';
import AppStatus from './pages/AppStatus.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingHome />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/tokens" element={<Tokens />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/press" element={<Press />} />
      <Route path="/app" element={<AppStatus />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
