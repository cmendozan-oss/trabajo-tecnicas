import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mensaje, setMensaje] = useState("")

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} setMensaje={setMensaje} />
      <Hero mensaje={mensaje} />
      <Cards />
      <Footer />
    </div>
  )
}

export default App