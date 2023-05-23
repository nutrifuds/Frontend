import React from "react";
import "../stylesheets/login.css";
import Logo from "../img/logo_login.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="split-background">
        <div className="left-side">
          <div className="container mx-5">
            <img
              className=" mt-5 "
              src={Logo}
              style={{ width: "10rem" }}
              alt="logo"
            />

            <h2 className="container mt-5 custom__title">Masuk <span className="garis"/></h2>
            <p className="container mt-3 mb-4 custom__desc">
              Silahkan masuk untuk mendapatkan fitur-fitur yang <br />
              lebih lengkap serta lacak progres anda !
            </p>

            <div className="card p-5 card__log">
              <form className="container">
                <div class="mb-3">
                  <label for="text" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control custom__input"
                    aria-describedby="textUsername"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label ">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control custom__input"
                    id="exampleInputPassword1"
                  />
                </div>
                <p><a href="/" className="nav-link text-end px-5 custom__forget">Lupa Password ?</a></p>
                <button type="submit" class="btn btn-primary custom__btn">
                  Masuk
                </button>
                <hr/>
                <p><Link to="/register" className="nav-link text-center custom__new ">Buat Akun Baru</Link></p>
              </form>
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
}

export default Register;
