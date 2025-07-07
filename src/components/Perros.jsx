import React, { useState } from "react";
import perrosMock from "../data/perrosMock";
import { Link } from "react-router-dom";

const Perros = () => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value.toLowerCase());
  };

  const mascotasFiltradas = perrosMock.filter((mascota) =>
    mascota.nombre.toLowerCase().includes(busqueda)
  );

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ marginBottom: "1rem" }}>Nuestros amigos en adopción 🐾</h1>

      {/* Buscador bonito */}
      <input
        type="text"
        onChange={handleChange}
        placeholder="🔍 Buscar mascotas..."
        style={{
          padding: "12px 16px",
          fontSize: "1rem",
          border: "2px solid #ccc",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          margin: "1rem auto 2rem",
          display: "block",
          outlineColor: "#0077cc",
          transition: "0.3s"
        }}
      />

      {/* Lista de mascotas */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {mascotasFiltradas.map((mascota) => (
          <div
            key={mascota.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "1rem",
              backgroundColor: "#fefefe",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <img
              src={mascota.imagen}
              alt={mascota.nombre}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "0.5rem"
              }}
            />
            <h2 style={{ margin: "0.3rem 0" }}>
              {mascota.nombre}{" "}
              <span style={{ fontSize: "0.9rem", color: "#666" }}>
                ({mascota.sexo})
              </span>
            </h2>
            <p style={{ color: "#333" }}>{mascota.descripcion}</p>
            <Link to={`/perros/${mascota.id}`}>
              <button
                style={{
                  marginTop: "0.5rem",
                  padding: "8px 16px",
                  backgroundColor: "#0077cc",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Ver detalles
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perros;
