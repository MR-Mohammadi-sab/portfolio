import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home"

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/projects" element={<Home />}/>
      <Route path="/about" element={<Home />}/>
      <Route path="/contact" element={<Home />}/>
      <Route path="/resume" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App
