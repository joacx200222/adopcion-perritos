import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Perros from "./components/Perros";
import DetallePerrito from "./components/DetallePerrito";
import FormularioAdopcion from "./components/FormularioAdopcion";

function App() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <Router>
      <nav>
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Logo Perrito"
          style={{ width: "40px", height: "40px", marginRight: "1rem" }}
        />
        <Link to="/">Inicio</Link>
        <Link to="/perros">Perritos</Link>
        <Link to="/formulario">Adoptar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perros" element={<Perros busqueda={busqueda} />} />
        <Route path="/perros/:id" element={<DetallePerrito />} />
        <Route path="/formulario" element={<FormularioAdopcion />} />
      </Routes>
    </Router>
  );
}

export default App;
