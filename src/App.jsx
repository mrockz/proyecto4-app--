import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./routes/Home"
import { Contacto } from "./routes/Contacto"
import { About } from "./routes/About"
import { Blog } from "./routes/Blog"


function App() {


  return (

 <>
<NavBar />
<Routes>
  <Route path="/proyecto4-app--/" element={<Home />} />
  <Route path="/proyecto4-app--/contacto" element={<Contacto />} />
  <Route path="/proyecto4-app--/about" element={<About />} />
  <Route path="/proyecto4-app--/blog" element={<Blog />} />
</Routes>

</> 
  )
}

export default App
