import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DemoInmobiliaria from "./pages/DemoInmobiliaria";
import { lazy, Suspense } from "react";
const MineTwin = lazy(() => import("./pages/MineTwin"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/inmobiliaria" element={<DemoInmobiliaria />} />
        <Route path="/demo/minetwin" element={<Suspense fallback={<div role="status" style={{minHeight:"100vh",background:"#111",color:"#ccff00",padding:"48px"}}>Cargando MineTwin…</div>}><MineTwin /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
