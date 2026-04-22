// components/Hero.jsx - Sección principal (la primera que ves al entrar)
// Esta sección tiene un título impactante y un llamado a la acción

import './Hero.css'; // Importamos los estilos del Hero

// Componente funcional Hero
function Hero() {
  return (
    // <section> es la etiqueta semántica para secciones del contenido
    // id="inicio" permite que el link del navbar "#inicio" navegue aquí
    <section className="hero" id="inicio">

      {/* Capa oscura semitransparente encima del fondo para mejorar legibilidad del texto */}
      <div className="hero__overlay"></div>

      {/* Contenido principal del Hero */}
      <div className="hero__contenido">

        {/* Etiqueta pequeña encima del título principal */}
        <span className="hero__etiqueta">Fisioterapia & Entrenamiento</span>

        {/* Título principal de bienvenida */}
        <h1 className="hero__titulo">
          Transforma tu cuerpo, {/* Primera línea del título */}
          <br /> {/* Salto de línea manual */}
          <span className="hero__titulo--azul">recupera tu vida</span> {/* Texto en azul para destacar */}
        </h1>

        {/* Descripción breve debajo del título */}
        <p className="hero__descripcion">
          En TitanBody te ofrecemos planes personalizados de fisioterapia y entrenamiento
          deportivo para que alcances tu máximo potencial.
        </p>

        {/* Botones de llamado a la acción (Call To Action / CTA) */}
        <div className="hero__botones">
          {/* Botón principal (sólido) */}
          <a href="#servicios" className="hero__boton hero__boton--principal">
            Ver nuestros servicios
          </a>
          {/* Botón secundario (con borde, sin relleno) */}
          <a href="#nosotros" className="hero__boton hero__boton--secundario">
            Sobre nosotros
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero; // Exportamos el componente