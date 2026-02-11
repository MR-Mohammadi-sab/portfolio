import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Projects from "./pages/projects"
import About from "./pages/About"
import Resume from "./pages/Resume"


function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/resume" element={<Resume />}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App
