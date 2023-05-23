import React from "react";
import "../stylesheets/register.css";
import Logo from "../img/logo_login.png";

function Register() {
  return (
    <div>
      <div className="split-background">
        <div className="left-side" style={{backgroundColor: '#FEF1FC'}}>
          <div className="container mx-5">
            <img
              className=" mt-5 "
              src={Logo}
              style={{ width: "10rem" }}
              alt="logo"
            />

            <h2 className="container mt-5 custom__title">Daftar<span className="garis"/></h2>
            <p className="container mt-3 mb-4 custom__desc">
            Silahkan daftar untuk membuka fitur-fitur lengkap <br/>serta lacak progres anda !
            </p>

            <div className="card p-5 card__reg">
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
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label ">
                 Ulangi Password
                </label>
                <input
                  type="password"
                  class="form-control custom__input"
                  id="exampleInputPassword1"
                />
              </div>
                
                <button type="submit" class="btn btn-primary custom__btn">
                  Daftar
                </button>
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
