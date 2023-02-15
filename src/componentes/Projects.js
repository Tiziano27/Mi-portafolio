import React from "react";
import "../hojas-de-estilos/projects.css";
import Proyecto from "./Proyecto";
import teclado from "./interfaz-virtual-del-teclado-22752687.webp";

function Projects() {
  return (
    <div
      id="project"
      className="proyectos-reciente seccion-clara d-flex flex-column"
    >
      <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
      <h3 className="seccion-descripcion">
        Estos son algunos proyectos que he creado...
      </h3>
      <div className="container text-center proyectos-contenedor">
        <div className="row">
          <Proyecto
            img={teclado}
            alt=""
            numero="Proyecto 1"
            github=""
            link=""
          />
          <Proyecto img="" alt="" numero="Proyecto 2" github="" link="" />
          <Proyecto img="" alt="" numero="Proyecto 3" github="" link="" />
          <Proyecto img="" alt="" numero="Proyecto 4" github="" link="" />
          <Proyecto img="" alt="" numero="Proyecto 5" github="" link="" />
          <Proyecto img="" alt="" numero="Proyecto 6" github="" link="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
