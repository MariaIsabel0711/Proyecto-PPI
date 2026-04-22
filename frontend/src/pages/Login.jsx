import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    console.log('Login:', form);
  };

  return (
    <div className="auth__page">
      {/* Panel decorativo izquierdo */}
      <div className="auth__panel">
        <div className="auth__panel-content">
          <div className="auth__brand" onClick={() => navigate('/')}>
            <span className="auth__brand--azul">TITAN</span>
            <span className="auth__brand--blanco">BODY</span>
          </div>
          <div className="auth__panel-tagline">
            <h2>Tu transformación<br /><span>comienza aquí</span></h2>
            <p>Fisioterapia y entrenamiento personalizado para alcanzar tu máximo potencial.</p>
          </div>
          <div className="auth__panel-features">
            <div className="auth__feature">
              <span className="auth__feature-icon"></span>
              <span>Planes personalizados</span>
            </div>
            <div className="auth__feature">
              <span className="auth__feature-icon"></span>
              <span>Resultados garantizados</span>
            </div>
            <div className="auth__feature">
              <span className="auth__feature-icon"></span>
              <span>Salud integral</span>
            </div>
          </div>
        </div>
        <div className="auth__panel-overlay" />
      </div>

      {/* Formulario derecho */}
      <div className="auth__form-section">
        <div className="auth__form-wrapper">
          <div className="auth__form-header">
            <h1>Bienvenido de nuevo</h1>
            <p>Ingresa tus datos para continuar</p>
          </div>

          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__field">
              <label htmlFor="email">Correo electrónico</label>
              <div className="auth__input-wrapper">
                <span className="auth__input-icon">✉</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth__field">
              <label htmlFor="password">Contraseña</label>
              <div className="auth__input-wrapper">
                <span className="auth__input-icon"></span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="auth__toggle-pass"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '' : '👁'}
                </button>
              </div>
            </div>

            <div className="auth__forgot">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="auth__btn-primary">
              Iniciar sesión
            </button>
          </form>

          <div className="auth__divider"><span>o continúa con</span></div>

          <div className="auth__social">
            <button className="auth__social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
          </div>

          <p className="auth__redirect">
            ¿No tienes cuenta? <Link to="/registro">Regístrate gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;