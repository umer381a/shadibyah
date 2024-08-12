import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

const ShadiBiyah = () => {
 const profileData = [
  { title: "My Religion", items: ["Muslim", "Muslim", "Muslim", "Muslim"] },
  { title: "My Religion", items: ["Muslim", "Muslim", "Muslim", "Muslim"] },
  { title: "My Religion", items: ["Muslim", "Muslim", "Muslim", "Muslim"] },
  { title: "My Religion", items: ["Muslim", "Muslim", "Muslim", "Muslim"] },
  { title: "My Religion", items: ["Muslim", "Muslim", "Muslim", "Muslim"] },
  { title: "My Religion", items: ["Muslim", "Muslim", "Muslim", "Muslim"] },
];
 return (
  <div>
   <main>
    {/* info nav*/}
    <header className="bg-dark text-white py-2 d-block d-md-flex justify-content-md-between">
     <div>
      <span>Lorem is not simply random text</span>
     </div>
     <div>
      <span className="me-3">
       <i className="bi bi-telephone-outbound-fill"></i> 0800-1122333
      </span>
      <span className="me-3">
       <i className="bi bi-envelope-paper-fill"></i> info@mail.com
      </span>
      <i className="bi bi-facebook me-1"></i>
      <i className="bi bi-instagram me-1"></i>
      <i className="bi bi-twitter"></i>
     </div>
    </header>

    {/* main navbar*/}
    <header>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       <a className="navbar-brand" href="#">
        <img className="logo" src="images/logo.png" alt="logo" />
       </a>
       <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
       >
        <span className="navbar-toggler-icon"></span>
       </button>
       <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
       >
        <ul className="navbar-nav me-auto mb-lg-0">
         <li className="nav-item">
          <a className="nav-link me-4" href="index.html">
           HOME
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link me-4" href="rembership.html">
           MEMBERSHIP
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link me-4" href="#">
           SERVICES
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link me-4" href="#">
           VENDORS
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link me-4" href="#">
           OUR PACKAGE
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="#">
           CONTACT US
          </a>
         </li>
        </ul>
        <button
         type="button"
         className="btn btn-warning px-4 py-1 me-2"
         data-bs-toggle="modal"
         data-bs-target="#exampleModal"
        >
         Sign in
        </button>
       </div>
      </div>
     </nav>
    </header>

    {/* hero-section */}
    <section className="hero-section">
     <div className="hero-heading">
      <h1 className="text-dark fw-bold ms-2">
       Find Your Perfect Life Partner
      </h1>
     </div>
     <form>
      <input className="px-4 py-2" type="text" />
      <button className="btn btn-warning px-4 py-2 rounded-3 position-absolute">
       Search
      </button>
     </form>
    </section>

    <section className="feature-section mt-5">
     <h1 className="text-center mb-5">Featured Profiles</h1>
     <div className="row">
      <div className="col-6 col-md-4">
       <div className="card p-1">
        <img src="images/feature.webp" alt="feature" />
        <div className="card-body">
         <h5 className="card-title fw-bold my-1">Ahmed</h5>
         <div className="row">
          <div className="col-6">
           <p>
            <span className="fw-bold">Age:</span> 24
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">City:</span> Lahore
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">Religion:</span> Islam
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">Caste:</span> Warraich
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="col-6 col-md-4">
       <div className="card p-1">
        <img src="images/feature.webp" alt="feature" />
        <div className="card-body">
         <h5 className="card-title fw-bold my-1">Ahmed</h5>
         <div className="row">
          <div className="col-6">
           <p>
            <span className="fw-bold">Age:</span> 24
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">City:</span> Lahore
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">Religion:</span> Islam
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">Caste:</span> Warraich
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="col-6 col-md-4">
       <div className="card p-1">
        <img src="images/feature.webp" alt="feature" />
        <div className="card-body">
         <h5 className="card-title fw-bold my-1">Ahmed</h5>
         <div className="row">
          <div className="col-6">
           <p>
            <span className="fw-bold">Age:</span> 24
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">City:</span> Lahore
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">Religion:</span> Islam
           </p>
          </div>
          <div className="col-6">
           <p>
            <span className="fw-bold">Caste:</span> Warraich
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>

    <section className="browse-profile-section mt-5 pb-5">
      <h1 className="text-center py-5">Browse Profiles</h1>

      <div className="container mx-auto">
        <div className="row">
          {profileData.map((profile, index) => (
            <div key={index} className="col-12 col-md-4 pb-5">
              <div className="card p-1">
                <div className="card-body">
                  <p className="card-title p-2">{profile.title}</p>
                  <div className="row">
                    {profile.items.map((item, itemIndex) => (
                      <div key={itemIndex} className ="col-4 p-2">
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
    <section className="our-Servies my-5">
      <h1 className="text-center pb-5">Our Services</h1>
      <div className="row px-5">
        <div className="col-12 col-md-6 col-lg-3 text-center">
          <div className="card">
            <div className="card-body">
              <img className="servies-image" src="images/card.png" alt="servies" />
              <h5 className="card-title p-3">Card title</h5>
              <p className="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 text-center">
          <div className="card">
            <div className="card-body">
              <img className="servies-image" src="images/card1.png" alt="servies" />
              <h5 className="card-title p-3">Card title</h5>
              <p className="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk
                of
                the
                card's
                content.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 text-center">
          <div className="card">
            <div className="card-body">
              <img className="servies-image" src="images/card1.png" alt="servies" />
              <h5 className="card-title p-3">Card title</h5>
              <p className="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk
                of
                the
                card's
                content.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 text-center">
          <div className="card">
            <div className="card-body">
              <img className="servies-image" src="images/card1.png" alt="servies" />
              <h5 className="card-title p-3">Card title</h5>
              <p className="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk
                of
                the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="plan mb-5">
      <h1 className="text-center pb-5">
        Let Us Plan Your Wedding
      </h1>
      <div className="row">
        <div className="col-3 text-center">
          <img className="wed-image" src="images/card2.png" alt="even" />
          <p className="fw-bold">Even Manaegment</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card3.png" alt="marquee" />
          <p className="fw-bold">Marquee</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card4.png" alt="catering" />
          <p className="fw-bold">Catering</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card5.png" alt="cars" />
          <p className="fw-bold">Cars</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card6.png" alt="dresees" />
          <p className="fw-bold">Dresses</p>
        </div>
        <div className="col-3 text-center">
          <img className="wed-image" src="images/card1.png" alt="photography" />
          <p className="fw-bold">Photogrphy</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card7.png" alt="honeymoon" />
          <p className="fw-bold">Honeymoon Trip</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card8.png" alt="decoration" />
          <p className="fw-bold">Deorations</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card9.png" alt="jewelry" />
          <p className="fw-bold">Jewelry</p>
        </div>
        <div className="col-2 text-center">
          <img className="wed-image" src="images/card10.png" alt="beauty" />
          <p className="fw-bold">Beauty Saloons</p>
        </div>
      </div>
    </section>

    <section className="stories">
      <h1 className="text-center pb-5">Happily Ever After Stories</h1>
      <div className="row">
        <div className="col-3 text-center">
          <img className="happy-image" src="images/happy.jpg" alt="happy" />
          <p className="fw-bold py-4">HE & SHE</p>
        </div>
        <div className="col-3 text-center">
          <img className="happy-image" src="images/happy.jpg" alt="happy" />
          <p className="fw-bold py-4">HE & SHE</p>
        </div>
        <div className="col-3 text-center">
          <img className="happy-image" src="images/happy.jpg" alt="happy" />
          <p className="fw-bold py-4">HE & SHE</p>
        </div>
        <div className="col-3 text-center">
          <img className="happy-image" src="images/happy.jpg" alt="happy" />
          <p className="fw-bold py-4">HE & SHE</p>
        </div>
      </div>
    </section>

    <section>
      <div className="text-center">
        <h1 className="pb-4">How it work</h1>
        <div className="d-flex position-relative">
          <div className="circle fs-6 one">1</div>
          <p className="position-absolute one stepOne">Sign up to find Rista</p>
        </div>
        <div className="d-flex position-relative">
          <p className="position-absolute stepTwo">submit personal indentifiable details and non-indentifiable details
          </p>
          <div className="circle put fs-6 two">2</div>
        </div>
        <div className="d-flex position-relative">
          <p className="position-absolute stepThree">submit personal indentifiable details and non-indentifiable details
          </p>
          <div className="circle put fs-6 three">3</div>
        </div>
        <div className="border-start vertical bg-danger position-relative top-0 start-50"></div>
      </div>
    </section>
   </main>

   {/* Footer */}
   <footer className="bg-dark py-5 mt-4">
    <div className="row">
      <div className="col-4 text-center pe-5">
        <img className="ms-5" src="images/footerlogo-removebg.png" width="230px" alt="" />
        <p className="text-light ms-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum at pariatur officia
          sit
          repellat maiores
          quibusdam maxime iste illo. Similique sed enim quidem distinctio aspernatur, voluptas inventore! Atque,
          debitis fuga?</p>
      </div>
      <div className="col-2 py-4 ps-3">
        <p className="fw-bold text-light">Browse Categories</p>
        <ul>
          <li><a href="#">By Cite</a></li>
          <li><a href="#">By Caste</a></li>
          <li><a href="#">By Profession</a></li>
          <li><a href="#">By Religion</a></li>
        </ul>
      </div>
      <div className="col-2 py-4 ps-3">
        <p className="fw-bold text-light">Our Servies</p>
        <ul>
          <li><a href="#">Matchfinder</a></li>
          <li><a href="#">Wedding Planning</a></li>
          <li><a href="#">Book a Marquee</a></li>
          <li><a href="#">Rent a Car</a></li>
        </ul>
      </div>
      <div className="col-2 py-4 ps-3">
        <p className="fw-bold text-light">Useful Link</p>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Contacts Us</a></li>
        </ul>
      </div>
    </div>
    <p className="text-light text-center mt-5">shadibiyah.com 2021 | All Rights Reserved</p>
  </footer>
  </div>
 );
};

export default ShadiBiyah;
