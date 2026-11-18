const contactLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Vpalacio2025',
    external: true,
  },
  {
    name: 'Vercel',
    icon: 'vercel',
    href: 'https://vercel.com/vpalacio2025',
    external: true,
  },
  {
    name: 'Render',
    icon: 'render',
    href: 'https://web-01vicente-1.onrender.com',
    external: true,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/lxrvvx/',
    external: true,
  },
  {
    name: 'Gmail',
    icon: 'gmail',
    href: 'mailto:vpalacio2025@alu.uct.cl',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/',
    external: true,
    title: 'No hay perfil personal de Facebook',
  },
];

function Footer() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <section className="closing-copy" aria-label="Mensaje de despedida">
        <p>Espero que mi portafolio haya capturado tu atención.</p>
        <p>
          Recuerda que la mejor manera de predecir el futuro es creándolo.
        </p>
        <p>Y estoy listo para ayudarte a construir el tuyo.</p>
      </section>

      <h2 id="contact-title">HABLEMOS.</h2>

      <section className="contact-layout" aria-label="Contacto y currículum">
        <nav className="contact-links" aria-label="Redes y contacto">
          {contactLinks.map(({ name, icon, href, external, title }) => (
            <a
              className="contact-link"
              href={href}
              key={name}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              title={title}
              aria-label={name === 'Facebook' ? `${name}, sitio oficial` : name}
            >
              <span className="contact-icon" aria-hidden="true">
                <img
                  src={`https://cdn.simpleicons.org/${icon}`}
                  alt=""
                  loading="lazy"
                />
              </span>
              <span>{name}</span>
            </a>
          ))}
        </nav>

        <a
          className="cv-placeholder"
          href="mailto:vpalacio2025@alu.uct.cl?subject=Solicitud%20de%20CV"
          aria-label="Solicitar currículum por correo electrónico"
        >
          <span className="cv-small">VICENTE PALACIO</span>
          <span className="cv-title">CV</span>
          <strong>SOLICITAR CV ↗</strong>
          <span className="cv-year">2026 — 2027</span>
        </a>
      </section>

      <p className="copyright">© 2026 Vicente Palacio</p>
    </footer>
  );
}

export default Footer;
