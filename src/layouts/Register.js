import React, {useState} from "react";
import "../stylesheets/register.css";
import Logo from "../img/logo_login.png";
import { auth }from "../function/firebase" ;
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';

function Register() {
  const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
  return (
    <div>
      <div className="split-background">
        <div className="left-side" style={{backgroundColor: '#FEF1FC'}}>
          <div className="container mx-5 cstm-mx">
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    label="Email Address"
                    placeholder="masukkan alamat email"
                    class="form-control custom__input"
                    aria-describedby="textUsername"
                    value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required  
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
                    label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"  
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
                  placeholder="Ulangi Password"  
                />
              </div>
                
                <button type="submit" class="btn btn-primary custom__btn" onClick={onSubmit}    >
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
