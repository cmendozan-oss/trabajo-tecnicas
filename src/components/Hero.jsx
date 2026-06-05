import { useState } from "react"
import gatoSusto from "../assets/susto.png"

function Hero({ mensaje }) {
  const [contador, setContador] = useState(10)
  const [mostrarImagen, setMostrarImagen] = useState(false)

  const handleSusto = () => {
    const nuevo = contador - 1

    if (nuevo === 0) {
      setMostrarImagen(true)
      setContador(10)
      setTimeout(() => setMostrarImagen(false), 2000)
    } else {
      setContador(nuevo)
    }
  }

  return (
    <section className="hero" id="inicio">
      <h1>Bienvenido a mi proyecto interactivo de React</h1>
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
      <p>De: Cristopher Xavier Mendoza Naula</p>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={handleSusto}>Susto 👊</button>
        <span style={{ marginLeft: "1rem" }}>{contador}</span>
        {mostrarImagen && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <img
              src={gatoSusto}
              alt="susto"
              style={{ width: "236px" }}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero