import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DemoInmobiliaria from './pages/DemoInmobiliaria';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/inmobiliaria" element={<DemoInmobiliaria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
