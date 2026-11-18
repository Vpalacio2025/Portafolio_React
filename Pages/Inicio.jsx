
import { Link } from 'react-router-dom';

import fotoPerfil from '../src/assets/WIN_20260909_16_05_58_Pro.jpg';

function Inicio() {
  return (
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <header className="hero-top">
          <span>Portafolio 2026</span>
          <span>Diseño / Desarrollo</span>
        </header>

        <h1 id="hero-title" className="hero-title reveal">
          <span className="brand-v">V</span>
          <span className="brand-archives">archives</span>
        </h1>

        <figure className="hero-profile">
          <img className="profile-photo" src={fotoPerfil} alt="Vicente Palacio" />
          <figcaption className="profile-copy">
            <span>Mi nombre</span>
            <strong>Vicente Palacio</strong>
          </figcaption>
        </figure>

        <footer className="hero-bottom">
          <p className="hero-description">
            Creo sitios web para que mi profesor este feliz.
          </p>
          <p className="scroll">↓ Scroll para explorar</p>
        </footer>
      </section>

      <section className="about-experience" aria-label="Sobre mí y experiencia">
        <section
          className="about about-top"
          id="about"
          aria-labelledby="about-title"
        >
          <h2 id="about-title">Sobre mí</h2>
          <p className="about-text">
            Soy un estudiante cursando ICINF y desarrollador de Frontend.
            Espero que me den un 7, busco oportunidades para aplicar mis
            conocimientos y que me paguen mucha platita.
          </p>
        </section>

        <section
          className="experience"
          id="experience"
          aria-labelledby="experience-title"
        >
          <h2 className="section-title" id="experience-title">Experiencia</h2>
          <ul
            className="stats-grid"
            aria-label="Habilidades y nivel de experiencia"
          >
            {[
              { name: 'C++', value: 10 },
              { name: 'Programación', value: 20 },
              { name: 'JavaScript', value: 50 },
              { name: 'ARIA label', value: 70 },
              { name: 'Desarrollo Web Accesible', value: 80 },
              { name: 'Modelado de datos', value: 90 },
            ].map((skill) => (
              <li className="stat-item" key={skill.name}>
                <p className="stat-info">
                  <span>{skill.name}</span>
                  <strong>{skill.value}%</strong>
                </p>
                <progress
                  className="stat-bar"
                  value={skill.value}
                  max="100"
                  aria-label={`${skill.name}: ${skill.value}%`}
                >
                  {skill.value}%
                </progress>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section
        className="projects"
        id="projects"
        aria-labelledby="projects-title"
      >
        <section className="what-i-do" aria-labelledby="what-i-do-title">
          <h2 className="section-title" id="what-i-do-title">Lo que hago</h2>
          <p>
            Desarrollo experiencias web accesibles, útiles y visualmente
            claras para facilitar la vida cotidiana.
          </p>
        </section>

        <h2 className="section-title" id="projects-title">Proyectos</h2>
        <ol className="projects-grid" aria-label="Proyectos del portafolio">
          <li className="project-card">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
              alt="Interfaz de trabajo en una computadora"
            />
            <h3>Proyecto 1</h3>
          </li>
          <li className="project-card">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
              alt="Código fuente en una pantalla"
            />
            <h3>Proyecto 2</h3>
          </li>
          <li className="project-card">
            <img
              src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=1200"
              alt="Código de programación"
            />
            <h3>Proyecto 3</h3>
          </li>
          <li className="project-card">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200"
              alt="Código abierto en un editor"
            />
            <h3>Proyecto 4</h3>
          </li>
          <li className="project-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
              alt="Placa electrónica de un proyecto tecnológico"
            />
            <h3>Proyecto 5</h3>
          </li>
          <li className="project-card project-card-more">
            <Link
              to="/trabajos"
              className="project-card-more-link"
              aria-label="Ver más proyectos"
            >
              <span>Proyecto 6</span>
              <strong>Más proyectos ↗</strong>
            </Link>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default Inicio;
