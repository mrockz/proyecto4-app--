import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./routes/Home"
import { Contacto } from "./routes/Contacto"
import { About } from "./routes/About"


function App() {


  return (

 <>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/about" element={<About />} />
</Routes>

</> 
  )
}

export default App
