import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./routes/Home"
import { Contacto } from "./routes/Contacto"


function App() {


  return (

 <>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>

</> 
  )
}

export default App
