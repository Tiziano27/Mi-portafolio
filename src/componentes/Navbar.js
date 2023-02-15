import React from "react";
import { useState, useEffect } from "react";
import "../hojas-de-estilos/navbar.css";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={scrolled ? "scrolled active" : "scrolled"}>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="#navbar-toggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <a className="navbar-brand" href="#">
              <h2>
                {"<"}TG{"/>"}
              </h2>
            </a>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={props.home}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.about}>
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.project}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.contact}>
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
