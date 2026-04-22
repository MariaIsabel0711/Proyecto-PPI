// components/TarjetaServicio.jsx - Tarjeta reutilizable para cada servicio
// Este componente recibe datos (props) y los muestra en formato de tarjeta
// Se reutiliza 3 veces: Fisioterapia, Rehabilitación, Entrenamiento

import './TarjetaServicio.css'; // Importamos los estilos de la tarjeta

// Props es el objeto que contiene los datos que le pasamos al componente
// Desestructuramos (extraemos) directamente los datos que necesitamos
function TarjetaServicio({ imagen, titulo, descripcion, altImagen }) {
  // imagen     = ruta de la imagen a mostrar
  // titulo     = nombre del servicio (ej: "Fisioterapia")
  // descripcion = texto corto debajo del título
  // altImagen  = texto alternativo para la imagen (accesibilidad)

  return (
    // Contenedor de la tarjeta individual
    <div className="tarjeta">

      {/* Contenedor de la imagen con efecto hover */}
      <div className="tarjeta__imagen-contenedor">
        {/* La imagen del servicio */}
        {/* src recibe la ruta de la imagen, alt el texto descriptivo */}
        <img
          src={imagen}          /* Ruta de la imagen (viene de props) */
          alt={altImagen}       /* Texto alternativo para lectores de pantalla */
          className="tarjeta__imagen"
        />
      </div>

      {/* Cuerpo de la tarjeta: título, descripción y botón */}
      <div className="tarjeta__cuerpo">

        {/* Título del servicio en cursiva, como en el diseño original */}
        <h3 className="tarjeta__titulo">{titulo}</h3>

        {/* Descripción corta del servicio */}
        <p className="tarjeta__descripcion">{descripcion}</p>

        {/* Botón "Leer más" - por ahora es solo visual, sin lógica */}
        <button className="tarjeta__boton">Leer más</button>

      </div>
    </div>
  );
}

export default TarjetaServicio; // Exportamos para usarlo en SeccionServicios