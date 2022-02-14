
import Footer from './components/footer/Footer';
import FrontPage from './pages/frontpage/FrontPage';
import TopBar from './components/topbar/TopBar';
import About from './pages/about/About';
import Assignments from './pages/assignments/Assignments';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';

function App() {  
  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/assignments" element={<Assignments />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
