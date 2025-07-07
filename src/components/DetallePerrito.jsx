import { useParams } from "react-router-dom";
import perrosMock from "../data/perrosMock";

export default function DetallePerrito() {
  const { id } = useParams();
  const perrito = perrosMock.find(p => p.id === parseInt(id));
  if (!perrito) return <div>Perrito no encontrado</div>;

  return (
    <div>
      <h2>{perrito.nombre}</h2>
      <img
        src={perrito.imagen}
        alt={`Foto de ${perrito.nombre}`}
        style={{ maxWidth: "400px", width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
      />
      <p><strong>Sexo:</strong> {perrito.sexo}</p>
      <p><strong>Edad:</strong> {perrito.edad} años</p>
      <p><strong>Descripción:</strong> {perrito.descripcion}</p>
    </div>
  );
}
