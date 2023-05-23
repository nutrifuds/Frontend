import React from 'react'
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <div class="footer">
    <footer
            class="text-center text-lg-start text-white py-5"
            style= {{ "background-color": "#668F4D " }}
            >
  
      <div class="container p-4 pb-0">
    
        <section class="">
 
          <div class="row">

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase pb-3">Nutri Fuds</h5>
  
              <p>
              Cari Resep Makanan <br/>
              yang Simply Hingga Healty
              </p>
            </div>
            
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase pb-3">Explore</h5>
  
              <ul class="list-unstyled mb-0">
                <li className='nav-item'>
                  <a href="#!" class="text-white nav-link">Beranda</a>
                </li>
                <li className='nav-item'>
                  <a href="#!" class="text-white nav-link">Tentang</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase pb-3">Tools</h5>
  
              <ul class="list-unstyled mb-0">
                <li className='nav-item'>
                  <a href="#!" class="text-white nav-link">Resep</a>
                </li>
                <li className='nav-item'>
                  <a href="#!" class="text-white nav-link">Pengukur</a>
                </li>
              </ul>
            </div>
      
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase pb-3">Account</h5>
  
              <ul class="list-unstyled mb-0">
                <li className='nav-item'>
                  <a href="#!" class="text-white nav-link">Register</a>
                </li>
                <li className='nav-item'>
                  <a href="#!" class="text-white nav-link">Login</a>
                </li>
              </ul>
            </div>
    
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase pb-3">Copyright</h5>
  
              <ul class="list-unstyled mb-0">
                <li>
                  <p href="#!" class="text-white">@Nutrifuds Team</p>
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