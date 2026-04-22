import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  // Ocultar el navbar en las páginas de auth
  const authRoutes = ['/login', '/registro'];
  if (authRoutes.includes(location.pathname)) return null;

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <span className="navbar__logo--azul">TITAN</span>
        <span className="navbar__logo--blanco">BODY</span>
      </Link>

      {/* Links de navegación */}
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="#inicio" className="navbar__link">Inicio</a>
        </li>
        <li className="navbar__item">
          <a href="#nosotros" className="navbar__link">Sobre nosotros</a>
        </li>
        <li className="navbar__item">
          <a href="#servicios" className="navbar__link">Nuestros servicios</a>
        </li>
        <li className="navbar__item">
          <a href="#terapeuticos" className="navbar__link">Planes terapéuticos</a>
        </li>
        <li className="navbar__item">
          <a href="#deportivos" className="navbar__link">Planes deportivos</a>
        </li>
      </ul>

      {/* Botones de autenticación */}
      <div className="navbar__auth">
        <Link to="/login" className="navbar__btn-login">
          Iniciar sesión
        </Link>
        <Link to="/registro" className="navbar__btn-register">
          Registrarse
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;