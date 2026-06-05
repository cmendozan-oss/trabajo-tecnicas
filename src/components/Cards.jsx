import Card from "./Card"

function Cards() {
  return (
    <section className="cards-container" id="servicios">
      <Card
        titulo="¿Qué es React?"
        descripcion="React es una librería de JavaScript para construir interfaces de usuario mediante componentes reutilizables e independientes."
      />
      <Card
        titulo="¿Qué es JSX?"
        descripcion="JSX es una sintaxis especial que permite escribir HTML dentro de JavaScript. El navegador no lo entiende directamente, Vite lo convierte automáticamente."
      />
      <Card
        titulo="HTML vs React"
        descripcion="En HTML los cambios se hacen manualmente buscando elementos. En React solo cambias un dato y la pantalla se actualiza sola automáticamente."
      />
      <Card
        titulo="¿Cómo funcionan los eventos?"
        descripcion="Los eventos detectan acciones del usuario como clics o escritura. En React se escriben en camelCase como onClick y reciben una función que se ejecuta al activarse."
      />
    </section>
  )
}

export default Cards