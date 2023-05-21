import React from 'react'

const Navbar = () => {
  return (
    <nav class="container navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">Nutrifuds</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pengukur</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resep</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Tentang</a>
        </li>
      </ul>
      <button class="btn btn-outline-dark rounded-pill" type="submit" >Masuk</button>
      <button class="btn btn-success rounded-pill " type="submit">Daftar</button>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar