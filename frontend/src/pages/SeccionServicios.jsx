import TarjetaServicio from './TarjetaServicio'; // Importamos la tarjeta reutilizable
import './SeccionServicios.css';                  // Importamos los estilos de la sección


const servicios = [
  {
    id: 1,                                                    // Identificador único
    titulo: 'Fisioterapia',                                    // Título de la tarjeta
    descripcion: 'Recupera tu movimiento, recobra tu vida. Fisioterapia que transforma.', // Descripción
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=280&fit=crop', // Imagen de fisioterapia
    altImagen: 'Fisioterapeuta trabajando con un paciente'     // Texto alternativo
  },
  {
    id: 2,
    titulo: 'Rehabilitación física discapacitados',
    descripcion: 'Capacidades sin barreras, rehabilitación que empodera y revoluciona.',
    imagen: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=280&fit=crop', // Imagen de atleta corriendo
    altImagen: 'Atleta en pista de atletismo'
  },
  {
    id: 3,
    titulo: 'Entrenamiento deportivo',
    descripcion: '¿ Listo para llevar tu entrenamiento al siguiente nivel ?',
    imagen: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=280&fit=crop', // Imagen de entrenamiento
    altImagen: 'Entrenador ayudando a deportista con ejercicios'
  }
];

// Componente de la sección de servicios
function SeccionServicios() {
  return (
    // <section> con id="servicios" para que el enlace del navbar navegue aquí
    <section className="servicios" id="servicios">

      {/* Título opcional de la sección - añade contexto visual */}
      <div className="servicios__encabezado">
        <h2 className="servicios__titulo-seccion">Nuestros Servicios</h2>
        {/* Línea decorativa debajo del título */}
        <div className="servicios__linea-decorativa"></div>
      </div>

      {/* Contenedor de las 3 tarjetas en fila */}
      <div className="servicios__grid">

        {/* map() itera sobre el array de servicios y crea una TarjetaServicio por cada uno */}
        {/* Es como un "para cada servicio, crea una tarjeta" */}
        {servicios.map((servicio) => (
          // key={servicio.id} es obligatorio en React cuando usamos map(), identifica cada elemento
          <TarjetaServicio
            key={servicio.id}                       /* Identificador único para React */
            imagen={servicio.imagen}                 /* Pasamos la imagen como prop */
            titulo={servicio.titulo}                 /* Pasamos el título como prop */
            descripcion={servicio.descripcion}       /* Pasamos la descripción como prop */
            altImagen={servicio.altImagen}           /* Pasamos el alt de imagen como prop */
          />
        ))}

      </div>
    </section>
  );
}

export default SeccionServicios; // Exportamos para usarlo en Home