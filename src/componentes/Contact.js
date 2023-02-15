import React from "react";
import "../hojas-de-estilos/contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">Hablemos</div>
            <div className="col-12 col-md-4 descripcion">
              Proident cillum reprehenderit ipsum non occaecat culpa in do
              fugiat nostrud est. Laborum minim consequat ut qui aliquip labore
            </div>
            <div className="col-12 col-md-4 ">
              <a href="mailto:tizianogechelin@gmail.com">
                <button type="button">Contact me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
