import React from "react";

function Proyecto(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="proyecto">
        <img src={props.img} alt={props.alt} />
        <div className="overlay">
          <p>{props.numero}</p>
          <div className="iconos-contenedor">
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-laptop"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
