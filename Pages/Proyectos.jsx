import { Link } from 'react-router-dom';

function Proyectos() {
  return (
    <main aria-labelledby="project-title">
      <Link
        className="back-button"
        to="/trabajos"
        aria-label="Volver a trabajos"
      >
        ← Volver
      </Link>
      <h1 id="project-title">Proyectos</h1>
    </main>
  );
}

export default Proyectos;