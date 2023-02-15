import React from "react";
import "../hojas-de-estilos/footer.css";

function Footer() {
  return (
    <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
      <a className="footer-logo">
        {"<"}TG{"/>"}
      </a>
      <p className="footer-texto text-center">
        Aprendo y creo todos los días.
        <br />
        Creemos un proyecto juntos.
      </p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="mailto:tizianogechelin@micorreo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">
        Creado por Tiziano Gechelin (2023) &#169;
      </div>
    </footer>
  );
}
export default Footer;
