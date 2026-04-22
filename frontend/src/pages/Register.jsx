import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Register() {
  const [form, setForm] = useState({ nombre: '', email: '', password: '', confirmar: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Lógica de registro aquí
    console.log('Register:', form);
  };

  const getStrength = (pass) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(form.password);
  const strengthLabels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];
  const strengthColors = ['', '#e74c3c', '#f39c12', '#3498db', '#2ecc71'];

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
            <h2>Únete a la<br /><span>comunidad</span></h2>
            <p>Miles de personas ya han transformado su cuerpo y su vida con TitanBody.</p>
          </div>
          <div className="auth__panel-features">
            <div className="auth__feature">
              <span className="auth__feature-icon"></span>
              <span>Evaluación inicial gratuita</span>
            </div>
            <div className="auth__feature">
              <span className="auth__feature-icon"></span>
              <span>Seguimiento de progreso</span>
            </div>
            <div className="auth__feature">
              <span className="auth__feature-icon"></span>
              <span>Profesionales certificados</span>
            </div>
          </div>
        </div>
        <div className="auth__panel-overlay" />
      </div>

      {/* Formulario derecho */}
      <div className="auth__form-section">
        <div className="auth__form-wrapper">
          <div className="auth__form-header">
            <h1>Crea tu cuenta</h1>
            <p>Comienza tu transformación hoy mismo</p>
          </div>

          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__field">
              <label htmlFor="nombre">Nombre completo</label>
              <div className="auth__input-wrapper">
                <span className="auth__input-icon"></span>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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
                  placeholder="Mínimo 8 caracteres"
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
              {/* Indicador de fortaleza */}
              {form.password && (
                <div className="auth__strength">
                  <div className="auth__strength-bars">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="auth__strength-bar"
                        style={{ backgroundColor: i <= strength ? strengthColors[strength] : '#2a2a2a' }}
                      />
                    ))}
                  </div>
                  <span style={{ color: strengthColors[strength] }}>{strengthLabels[strength]}</span>
                </div>
              )}
            </div>

            <div className="auth__field">
              <label htmlFor="confirmar">Confirmar contraseña</label>
              <div className="auth__input-wrapper">
                <span className="auth__input-icon"></span>
                <input
                  id="confirmar"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmar"
                  placeholder="Repite tu contraseña"
                  value={form.confirmar}
                  onChange={handleChange}
                  required
                />
              </div>
              {form.confirmar && form.password !== form.confirmar && (
                <span className="auth__mismatch">Las contraseñas no coinciden</span>
              )}
            </div>

            <button type="submit" className="auth__btn-primary">
              Crear cuenta
            </button>
          </form>

          <p className="auth__redirect">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;