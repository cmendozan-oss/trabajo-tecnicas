import { useState } from "react"

function Card({ titulo, descripcion }) {

  const [visible, setVisible] = useState(false)

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Ver más"}
      </button>
      {visible && <p>{descripcion}</p>}
    </div>
  )
}

export default Card