/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled) {
        setNavbarBg("#668F4D"); // Change the background color when scrolled
      } else {
        setNavbarBg("transparent"); // Set back to transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark navbar-scroll py-3"
        style={{ backgroundColor: navbarBg }}
      >
        <div className="container container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Nutrifuds
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Pengukur
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">
                  Resep
                </Link>
              </li>
              <li className="nav-item">
                <a>
                  <Link to="/tentang" className="nav-link">
                    Tentang
                  </Link>
                </a>
              </li>
            </ul>
            <Link to="/login">
            <button className="btn btn-outline-light rounded-pill" type="submit">
              Masuk
            </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-success rounded-pill " type="submit">
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
