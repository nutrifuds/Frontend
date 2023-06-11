import React, {useState} from "react";
import "../stylesheets/login.css";
import Logo from "../img/logo_login.png";
import { Link } from "react-router-dom";
import { auth } from "../function/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";


function Register() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate('/register')
          window.location.href = 'https://dashboardnutrifuds.netlify.app/';
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }
  return (
    <div>
      <div className="split-background">
        <div className="left-side">
          <div className="container mx-5 cstm-mx">
          <Link to="/">
            <img
              className=" mt-5 "
              src={Logo}
              style={{ width: "10rem" }}
              alt="logo"
            /></Link>

            <h2 className="container mt-5 custom__title">Masuk <span className="garis"/></h2>
            <p className="container mt-3 mb-4 custom__desc">
              Silahkan masuk untuk mendapatkan fitur-fitur yang <br/>
              lebih lengkap serta lacak progres anda !
            </p>

            <div className="card p-3 p-md-4 p-lg-5 card__log">
              <form className="container">
                <div class="mb-3">
                  <label for="text" class="form-label">
                    Masukkan Email
                  </label>
                  <input
                  id="email-address"
                    type="email"
                    class="form-control custom__input"
                    aria-describedby="textUsername"
                    required
                    placeholder="masukkan E-mail"
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <p><a href="/" className="nav-link text-end px-5 custom__forget">Lupa Password ?</a></p>
                <button type="submit" class="btn btn-primary custom__btn" onClick={onLogin}>
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
