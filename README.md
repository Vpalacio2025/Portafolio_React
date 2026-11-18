# Declaración de uso de Inteligencia Artificial

Durante el desarrollo de este mi portafolio utilicé herramientas de Inteligencia Artificial como apoyo puntual en distintas etapas del trabajo, manteniendo la responsabilidad de la elaboración, revisión y organización del proyecto.

El uso de la IA se limitó principalmente a los siguientes aspectos:

- **CSS y diseño visual:** la utilicé como apoyo para resolver dudas y realizar ajustes en los estilos de la página.
- **Adaptabilidad y responsividad:** me ayudó a verificar y corregir tamaños, dimensiones y distribución de los elementos para conseguir que el sitio se visualizara correctamente en distintos dispositivos y tamaños de pantalla.
- **Recordar de código:** recurrí a ella para recordar estructuras y sintaxis que había olvidado, como la creación de listas y otros elementos de código.
- **Organización de componentes en React:** la utilicé como guía para organizar algunos archivos, componentes y secciones de la página.
- **Uso de Git y GitHub:** la utilicé como guía para recordar los comandos necesarios para guardar los cambios y subir el contenido del proyecto a GitHub.

La Inteligencia Artificial no fue utilizada para reemplazar completamente mi trabajo, sino como una herramienta de consulta y apoyo para resolver dudas específicas y reforzar conocimientos.

Finalmente, revisé y adapté las sugerencias, procurando comprender su funcionamiento y mantener el control sobre el desarrollo.

---

# Anexo: ejemplos de consultas realizadas a la IA

Los siguientes ejemplos representan solicitudes realizadas durante el desarrollo del proyecto. Se presentan como reconstrucciones resumidas de las consultas, no como transcripciones literales completas.



**Promt**

«Necesito crear una lista de elementos en esta parte de mi código. Indícame desde qué sección hasta qué sección debo colocar el código, sin modificar el resto».


```jsx
<section className="habilidades">
  <h2>Mis habilidades</h2>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
  </ul>
</section>
```


**Prompt**

«Ayúdame a revisar los tamaños de los elementos para que mi página se adapte correctamente a celulares y pantallas más pequeñas».



```css
@media (max-width: 768px) {
  .project {
    width: 100%;
  }

  .contact-layout {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }
}
```





**Prompt**

«Estoy pasando mi portafolio a React. Ayúdame a organizar los componentes y dime en qué archivo debo colocar cada código».

```jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

function Inicio() {
  return (
    <>
      <Header />

      <main>
        {/* Contenido de la página */}
      </main>

      <Footer />
    </>
  );
}

export default Inicio;
```

**Prompt**

«¿Cómo puedo conectar mis archivos CSS para que se apliquen correctamente a mi proyecto React?».


```jsx
import './index.css';
import './styles/portafolio.css';
import './styles/adaptacion.css';
```
**Prompt**

«Dame todos los comandos que debo utilizar en la terminal de VS Code para subir mi proyecto a mi repositorio de GitHub».


```powershell
git init
git add .
git commit -m "Portafolio con React"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

También  consulte cómo configurar la identidad de Git cuando apareció un error relacionado con el nombre y correo del usuario.

```powershell
git config --global user.name "Vicente Palacio"
git config --global user.email "Vpalacio2025@alu.uct.cl"

