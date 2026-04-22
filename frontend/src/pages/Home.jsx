// Pagina principal

import Hero from '../pages/Hero';
import SeccionServicios from '../pages/SeccionServicios';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="pagina">
      <main className="pagina__contenido">
        <Hero />
        <SeccionServicios />
      </main>
      <Footer />
    </div>
  );
}

export default Home;