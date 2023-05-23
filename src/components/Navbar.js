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
        class="navbar navbar-expand-lg fixed-top navbar-dark navbar-scroll py-3"
        style={{ backgroundColor: navbarBg }}
      >
        <div class="container container-fluid">
          <a class="navbar-brand fw-bold" href="#">
            Nutrifuds
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Beranda
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Pengukur
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link" href="#">
                  Resep
                </Link>
              </li>
              <li class="nav-item">
                <a>
                  <Link to="/tentang" class="nav-link">
                    Tentang
                  </Link>
                </a>
              </li>
            </ul>
            <Link to="/login">
            <button class="btn btn-outline-light rounded-pill" type="submit">
              Masuk
            </button>
            </Link>
            <Link to="/register">
              <button class="btn btn-success rounded-pill " type="submit">
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
