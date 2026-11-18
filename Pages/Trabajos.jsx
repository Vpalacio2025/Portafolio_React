
import { Link } from 'react-router-dom';

function Trabajos() {
  return (
    <main className="works-page" aria-labelledby="works-title">
      <section className="works-hero" aria-labelledby="works-title">
        <nav className="top-back-wrap top-back-wrap-hero" aria-label="Volver">
          <Link className="back-button" to="/" aria-label="Volver al inicio">
            ←
          </Link>
        </nav>

        <h1 id="works-title">Trabajos</h1>

        <p>
          Explora una selección de proyectos organizados por tipo
          de trabajo, desde identidad visual hasta experiencias
          digitales y piezas experimentales.
        </p>

      </section>

      <nav className="category-grid" aria-label="Secciones de trabajos">
        <a className="category-card" href="#proyectos-estudiantiles">
          Proyectos estudiantiles
        </a>

        <a className="category-card" href="#sobre-mi">
          Más sobre mí
        </a>
      </nav>

      <section className="works-sections" aria-label="Proyectos y perfil">
        <section
          className="works-section"
          id="proyectos-estudiantiles"
          aria-labelledby="student-projects-title"
        >
          <h2 id="student-projects-title">Proyectos estudiantiles</h2>
          <ul className="mini-grid mini-grid-compact" aria-label="Proyectos estudiantiles">
            <li>
              <Link className="mini-card mini-card-link" to="/proyectos">
                <span>Proyecto</span>
                <strong>ICINF</strong>
              </Link>
            </li>
          </ul>
        </section>

        <section
          className="works-section"
          id="sobre-mi"
          aria-labelledby="about-more-title"
        >
          <h2 id="about-more-title">Más sobre mí</h2>
          <ul className="mini-grid mini-grid-compact" aria-label="Información del perfil">
            <li>
              <a className="mini-card mini-card-link" href="/#about">
                <span>Bio</span>
                <strong>Perfil</strong>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default Trabajos;
