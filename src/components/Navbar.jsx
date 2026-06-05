import { useState } from "react"

function Navbar({ darkMode, toggleDark, setMensaje }) {

  const handleAgradecimientos = () => {
    setMensaje("¡Gracias por su atención!")
    setTimeout(() => setMensaje(""), 3000)
  }

  return (
    <nav>
      <h2>Bienvenidos a mi pagina | React</h2>
      <ul>
        <li onClick={toggleDark} style={{ cursor: "pointer" }}>
          {darkMode ? "Blanco" : "Negro"}
        </li>
        <li onClick={handleAgradecimientos} style={{ cursor: "pointer" }}>
          Agradecimientos
        </li>
        <li>
          <a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar