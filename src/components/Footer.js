import React from 'react'
import "../stylesheets/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
    <footer
            className="text-center text-lg-start text-white py-5"
            style= {{ "background-color": "#668F4D " }}
            >
  
      <div className="container p-4 pb-0">
    
        <section className="">
 
          <div className="row">

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase pb-3">Nutri Fuds</h5>
  
              <p>
              Cari Resep Makanan <br/>
              yang Simply Hingga Healty
              </p>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase pb-3">Explore</h5>
  
              <ul className="list-unstyled mb-0">
                <li className='nav-item'>
                  <Link to="/" className="text-white nav-link">Beranda</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/tentang" className="text-white nav-link">Tentang</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase pb-3">Tools</h5>
  
              <ul className="list-unstyled mb-0">
                <li className='nav-item'>
                  <Link to="/login" className="text-white nav-link">Resep</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/login" className="text-white nav-link">Pengukur</Link>
                </li>
              </ul>
            </div>
      
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase pb-3">Account</h5>
  
              <ul className="list-unstyled mb-0">
                <li className='nav-item'>
                  <Link to="/register" className="text-white nav-link">Register</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/login" className="text-white nav-link">Login</Link>
                </li>
              </ul>
            </div>
    
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase pb-3">Copyright</h5>
  
              <ul className="list-unstyled mb-0">
                <li>
                  <p href="#!" className="text-white">@Nutrifuds Team</p>
                </li>
    
              </ul>
            </div>

          </div>

        </section>
 
  


      </div>

    

    </footer>

  </div>

  )
}

export default Footer