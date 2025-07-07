import { useState } from "react";

export default function FormularioAdopcion() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000); // se borra a los 3 segundos
    e.target.reset(); // limpia el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Adopción</h2>
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Tu correo" required />
      <textarea placeholder="¿Por qué quieres adoptar?" required />
      <button type="submit">Enviar</button>
      {enviado && <p style={{ color: "green", marginTop: "1rem" }}>¡Formulario enviado con éxito!</p>}
    </form>
  );
}
