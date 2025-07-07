import React from "react";
import { Link } from "react-router-dom";
import logo from "../fotos/Logo.jpg";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {/* Logo */}
      <img
        src={logo}
        alt="Logo Corazón Animalista"
        style={{
          width: "150px",
          borderRadius: "50%",
          marginBottom: "1rem",
          border: "3px solid #ccc"
        }}
      />

      {/* Título */}
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Bienvenidxs a Corazón Animalista Manchay 🐾
      </h1>

      {/* Botón */}
      <Link to="/perros">
        <button
          style={{
            backgroundColor: "#0077cc",
            color: "white",
            border: "none",
            padding: "12px 24px",
            fontSize: "1rem",
            borderRadius: "8px",
            marginTop: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005fa3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0077cc")}
        >
          Ver mascotas
        </button>
      </Link>

      {/* Galería de perritos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
          maxWidth: "900px",
          marginInline: "auto"
        }}
      >
        <img src="https://placedog.net/400/300?id=11" alt="Perrito feliz 1" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="https://placedog.net/400/300?id=12" alt="Perrito feliz 2" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="https://placedog.net/400/300?id=13" alt="Perrito feliz 3" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="https://placedog.net/400/300?id=14" alt="Perrito feliz 4" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="https://placedog.net/400/300?id=15" alt="Perrito feliz 5" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="https://placedog.net/400/300?id=16" alt="Perrito feliz 6" style={{ width: "100%", borderRadius: "12px" }} />
      </div>

      {/* Requisitos */}
      <h3 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>
        📋 Requisitos para adoptar
      </h3>
      <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "700px", lineHeight: "1.6" }}>
        <li>🔞 Ser mayor de 25 años. Debes sustentar que trabajas y eres responsable.</li>
        <li>📆 La adopción es de por vida. La compañía de nuestras mascotitas puede durar entre 10 y 15 años. ¿Estás listx para ello?</li>
        <li>📸 Compromiso de seguimiento: fotos, datos, videos, testimonios y visitas —de ser necesario— para verificar el bienestar de la mascota.</li>
        <li>🖊️ Firmar un compromiso de adopción al momento de recibir la mascota.</li>
        <li>💉 Esterilizar dentro del primer año si aún no ha sido realizado.</li>
        <li>⏳ El proceso de preadopción puede tomar de 24 a 72 horas.</li>
        <li>🚫 No califican personas que hayan tenido una mascota fallecida por enfermedad viral, bacteriana o mortal en los últimos 6 a 12 meses.</li>
      </ul>

      {/* Redes sociales */}
      <div style={{ marginTop: "2rem" }}>
        <p>Síguenos en:</p>
        <a href="https://www.instagram.com/corazonanimalistamanchay/" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
          Instagram
        </a>
        <a href="https://www.facebook.com/profile.php?id=61570918490736&sk=about" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
          Facebook
        </a>
        <a href="https://linktr.ee/corazonanimalistamanchay" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
          Linktree
        </a>
      </div>
    </div>
  );
};

export default Home;
