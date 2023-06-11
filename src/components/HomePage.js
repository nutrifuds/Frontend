/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../stylesheets/homepage.css";
import Fitur1 from "../img/Fitur2 1.png";
import Fitur2 from "../img/Fitur2 2.png";
import Watermelon from "../img/fruit-watermelon.png";
import maleHeight from "../img/male-height.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="image">
        <div className="container text-center">
          <h1 className="heading">
            DAFTAR RESEP MAKANAN <br></br>
            DAN PENGUKUR BMI
          </h1>
          <p className="heading-info">
            Website Ini Menyediakan Resep Makanan Sehat Untuk Anda yang
            Menginginkan <br/> Pola Makan yang Sehat dan Pengukur Kalori
            Untuk Menyeimbang Kebutuhan Kalori Anda
          </p>
          <button
            className="cstm-btn btn btn-outline-light rounded-pill m-3 btn-lg px-5 "
            type="submit"
          >
          <Link to="/login" className="text-white nav-link">
            Mulai
            <span className="material-symbols-outlined align-middle px-2">
              arrow_right_alt
            </span>
            </Link>
          </button>
        </div>
      </div>
      <div className="text-center pt-lg-5">
        <h2 className="feature__title mb-5">FITUR - FITUR</h2>
      </div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 pt-3 col-sm-6">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img src={Fitur1} className="card-img-top" alt="Resep" />
              <div className="card-body">
                <h2 className="card-text text-start py-3">Daftar Resep Makanan</h2>
                <p className="card-text card__desc fs-5">
                  Resep masakan adalah takaran yang digunakan untuk membuat
                  masakan (makanan & minuman) yang telah teruji ke akuratannya.
                  Untuk dapat membuat masakan tentunya si pemasak (Juru masak)
                  harus menyiapkan bahan-bahan terlebih dahulu untuk diolah
                  menjadi masakan siap saji.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12  pt-3 col-sm-6">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img src={Fitur2} className="card-img-top" alt="Pengukur" />
              <div className="card-body">
                <h2 className="card-text text-start py-3">Pengukur Kalori</h2>
                <p className="card-text card__desc fs-5">
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
          <div className="card  my-3 ">
            <div className="card-body fw-bold text-start cstm-textinfo">
              <span className="material-symbols-outlined mx-4 cstm-textinfo">calendar_month</span>{" "}
              1. Atur Jadwal Makan Anda Sehari Hari
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body fw-bold text-start cstm-textinfo">
              <span className="material-symbols-outlined mx-4 cstm-textinfo">ramen_dining</span>{" "}
              2. Keseimbangan Makanan 4 Sehat 5 Sempurna
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body fw-bold text-start cstm-textinfo">
              <span className="material-symbols-outlined mx-4 cstm-textinfo">local_drink</span> 3.
              Perbanyak Minum Air Putih
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body fw-bold text-start cstm-textinfo">
              <span className="material-symbols-outlined mx-4 cstm-textinfo">fitness_center</span>{" "}
              4. Olahraga yang Cukup
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <img
              src={Watermelon}
              className="card-img-top cstm-card-side"
              alt="Resep"
              style={{ width: "20rem" }}
            />
          </div>
          <div className="col-sm-6">
            <div className="card card__description">
              <div className="card-body">
                <h3 className="card-title py-3">Daftar Resep</h3>
                <p className="card-text">
                  Mari kita jelajahi beragam resep yang sehat dan dapat
                  disesuaikan dengan keinginan dan preferensi Anda. Dengan
                  memperhatikan kebutuhan nutrisi dan cita rasa yang lezat,
                  resep makanan ini memberikan pilihan yang ideal bagi mereka
                  yang ingin menjaga pola makan sehat dan tetap memanjakan lidah
                  mereka. Dengan berbagai bahan berkualitas dan instruksi yang
                  jelas, Anda dapat dengan mudah menciptakan hidangan yang
                  memuaskan dan bergizi untuk dinikmati oleh keluarga dan
                  teman-teman.
                </p>
                <Link to="/login" className=" btn btn-success">
                  Lihat Resep
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5 pt-5">
          <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card card__description">
          <div className="card-body">
            <h3 className="card-title py-3">Pengukur BMI</h3>
            <p className="card-text">
            Mari kita mengukur Body Mass Index (BMI) Anda, sebuah indikator yang digunakan untuk mengevaluasi apakah berat badan Anda sejalan dengan tinggi badan Anda. Dengan mengukur BMI, Anda dapat memperoleh informasi penting mengenai kesehatan dan komposisi tubuh Anda. Pengukuran BMI ini memberikan gambaran awal tentang kisaran berat badan yang sehat bagi Anda, sehingga Anda dapat mengambil langkah-langkah yang diperlukan.
            </p>
            <Link to="/login" className="btn btn-success">
              Lihat Pengukur
            </Link>
          </div>
        </div>
          </div>
          <div className="col-sm-6">
          <img
          src={maleHeight}
          className="card-img-top cstm-card-side"
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
