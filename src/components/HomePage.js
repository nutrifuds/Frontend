/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../stylesheets/homepage.css";
import Fitur1 from "../img/Fitur2 1.png";
import Fitur2 from "../img/Fitur2 2.png";
import Watermelon from "../img/fruit-watermelon.png";
import maleHeight from "../img/male-height.png";

const HomePage = () => {
  return (
    <div>
      <div className="image">
        <div className="container text-center">
          <h1 class="heading">
            DAFTAR RESEP MAKANAN <br></br>
            DAN PENGUKUR KALORI
          </h1>
          <p class="heading-info">
            Website Ini Menyediakan Resep Makanan Sehat Untuk Anda yang
            Menginginkan <br></br> Pola Makan yang Sehat dan Pengukur Kalori
            Untuk Menyeimbang Kebutuhan Kalori Anda
          </p>
          <button
            class="btn btn-outline-light rounded-pill m-3 btn-lg px-5 align-middle "
            type="submit"
          >
            Mulai
            <span class="material-symbols-outlined align-middle px-2">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
      <div className="text-center pt-lg-5">
        <h2 className="feature__title mb-5">FITUR - FITUR</h2>
      </div>
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-12 pt-3 col-sm-6">
            <div class="card w-100" style={{ width: "18rem" }}>
              <img src={Fitur1} class="card-img-top" alt="Resep" />
              <div class="card-body">
                <h2 class="card-text text-start py-3">Daftar Resep Makanan</h2>
                <p class="card-text card__desc fs-5">
                  Resep masakan adalah takaran yang digunakan untuk membuat
                  masakan (makanan & minuman) yang telah teruji ke akuratannya.
                  Untuk dapat membuat masakan tentunya si pemasak (Juru masak)
                  harus menyiapkan bahan-bahan terlebih dahulu untuk diolah
                  menjadi masakan siap saji.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12  pt-3 col-sm-6">
            <div class="card w-100" style={{ width: "18rem" }}>
              <img src={Fitur2} class="card-img-top" alt="Pengukur" />
              <div class="card-body">
                <h2 class="card-text text-start py-3">Pengukur Kalori</h2>
                <p class="card-text card__desc fs-5">
                  Alat pengukur kalori atau calorimeter merupakan alat untuk
                  mengetahui ada berapa kalori yang terkandung dalam bahan atau
                  makanan jadi. Alat penghitung kalori biasanya digunakan untuk
                  keperluan ahli gizi dalam meneliti atau mengembangkan bahan
                  atau makanan jadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features mt-5 py-5">
        <div className="container text-center py-lg-5">
          <h2 className="features__title mb-5">
            HAL YANG PERLU DILAKUKAN AGAR POLA MAKAN TERATUR
          </h2>
          <div class="card  my-3 ">
            <d class="card-body fs-3 fw-bold text-start">
              <span class="material-symbols-outlined mx-4">calendar_month</span>{" "}
              1. Atur Jadwal Makan Anda Sehari Hari
            </d>
          </div>
          <div class="card my-3">
            <div class="card-body fs-3 fw-bold text-start">
              <span class="material-symbols-outlined mx-4">ramen_dining</span>{" "}
              2. Keseimbangan Makanan 4 Sehat 5 Sempurna
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body fs-3 fw-bold text-start">
              <span class="material-symbols-outlined mx-4">local_drink</span> 3.
              Perbanyak Minum Air Putih
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body fs-3 fw-bold text-start">
              <span class="material-symbols-outlined mx-4">fitness_center</span>{" "}
              4. Olahraga yang Cukup
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <img
              src={Watermelon}
              class="card-img-top"
              alt="Resep"
              style={{ width: "20rem" }}
            />
          </div>
          <div class="col-sm-6">
            <div class="card card__description">
              <div class="card-body">
                <h3 class="card-title py-3">Resep Makanan</h3>
                <p class="card-text">
                  Mari kita jelajahi beragam resep makanan yang sehat dan dapat
                  disesuaikan dengan keinginan dan preferensi Anda. Dengan
                  memperhatikan kebutuhan nutrisi dan cita rasa yang lezat,
                  resep makanan ini memberikan pilihan yang ideal bagi mereka
                  yang ingin menjaga pola makan sehat dan tetap memanjakan lidah
                  mereka. Dengan berbagai bahan berkualitas dan instruksi yang
                  jelas, Anda dapat dengan mudah menciptakan hidangan yang
                  memuaskan dan bergizi untuk dinikmati oleh keluarga dan
                  teman-teman.
                </p>
                <a href="#" class="btn btn-success">
                  Lihat Resep
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row my-5 pt-5">
          <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card card__description">
          <div class="card-body">
            <h3 class="card-title py-3">Pengukur Kalori</h3>
            <p class="card-text">
            Mari kita mengukur Body Mass Index (BMI) Anda, sebuah indikator yang digunakan untuk mengevaluasi apakah berat badan Anda sejalan dengan tinggi badan Anda. Dengan mengukur BMI, Anda dapat memperoleh informasi penting mengenai kesehatan dan komposisi tubuh Anda. Pengukuran BMI ini memberikan gambaran awal tentang kisaran berat badan yang sehat bagi Anda, sehingga Anda dapat mengambil langkah-langkah yang diperlukan.
            </p>
            <a href="#" class="btn btn-success">
              Lihat Pengukur
            </a>
          </div>
        </div>
          </div>
          <div class="col-sm-6">
          <img
          src={maleHeight}
          class="card-img-top"
          alt="Resep"
          style={{ width: "20rem" }}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
