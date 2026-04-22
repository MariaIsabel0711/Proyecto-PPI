// App.jsx - Componente raíz de la aplicación
// Rutas principales configuradas con React Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible en toda la app (se oculta automáticamente en /login y /registro) */}
      <Navbar />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;