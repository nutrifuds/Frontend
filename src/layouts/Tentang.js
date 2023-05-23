import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../stylesheets/homepage.css";
import Dwiajic from "../img/dwiajic.png";
import Melvin from "../img/melvin.png";
import Andito from "../img/andito.png";
import Dila from "../img/dila.png";
import "../stylesheets/tentang.css"

const Tentang = () => {
  return (
    <div>
      <Navbar />
      <div className="image">
        <div className="container text-center">
          <h1 class="heading-tentang">TENTANG KAMI</h1>
          <p class="heading-info">
            Website Ini Dibuat Untuk Memenuhi Tugas Akhir (Capstone Project)
            Dari <br/>
            Program Studi Independent Batch 4 dicoding, jadi kami terdiri dari 4
            orang Tim <br />
            dari berbagai kampus yang ada di Indonesia
          </p>
        </div>
      </div>
      <div className="text-center py-lg-5">
        <h2 className="feature__title my-5">TIM KAMI</h2>
      </div>
      <div className="container py-3 text-center">
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">

          <img
              src={Andito}
              class="card-img-top py-3"
              alt="Resep"
              style={{ width: "10rem" }}
            />
            <h3 className="text-uppercase nama">ANDITO OKTANO PUTRA</h3>
            <p className="text-uppercase univ pb-2">Universitas Dian Nuswantoro Semarang</p>
          </div>
          <div class="col-sm-6">
          <img
              src={Melvin}
              class="card-img-top py-3"
              alt="Resep"
              style={{ width: "10rem" }}
            />
            <h3 className="text-uppercase nama">Melvin Aryadika Kusuma</h3>
            <p className="text-uppercase univ pb-2">Universitas Merdeka Madiun</p>
          </div>
        </div>
        <div class="row ">
          <div class="col-sm-6 mb-3 mb-sm-0">

          <img
              src={Dwiajic}
              class="card-img-top py-3"
              alt="Resep"
              style={{ width: "10rem" }}
            />
            <h3 className="text-uppercase nama">Dwi aji cahyono</h3>
            <p className="text-uppercase univ pb-2">universitas lampung</p>
          </div>
          <div class="col-sm-6">
          <img
              src={Dila}
              class="card-img-top py-3"
              alt="Resep"
              style={{ width: "10rem" }}
            />
            <h3 className="text-uppercase nama">DILA ARYANI</h3>
            <p className="text-uppercase univ pb-2">STMIK IKMI Cirebon</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tentang;
