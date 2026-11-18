
import { useEffect, useState } from 'react';

function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <header className="main-header">
      <button
        className="logo"
        type="button"
        aria-label={`PORTAFOLIO, activar tema ${isDark ? 'claro' : 'oscuro'}`}
        aria-pressed={isDark}
        onClick={() => setIsDark((currentTheme) => !currentTheme)}
      >
        PORTAFOLIO
      </button>

      <nav aria-label="Navegación principal">
        <a href="/#inicio">Inicio</a>
        <a href="/#about">Sobre mí</a>
        <a href="/#projects">Proyectos</a>
        <a href="/#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
