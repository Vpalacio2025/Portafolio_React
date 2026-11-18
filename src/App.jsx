
import { Navigate, Route, Routes } from 'react-router-dom';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Inicio from '../Pages/Inicio.jsx';
import Proyectos from '../Pages/Proyectos.jsx';
import Trabajos from '../Pages/Trabajos.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
