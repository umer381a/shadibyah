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
    <header classNameName="bg-dark text-white py-2 d-block d-md-flex justify-content-md-between">
     <div>
      <span>Lorem is not simply random text</span>
     </div>
     <div>
      <span classNameName="me-3">
       <i classNameName="bi bi-telephone-outbound-fill"></i> 0800-1122333
      </span>
      <span classNameName="me-3">
       <i classNameName="bi bi-envelope-paper-fill"></i> info@mail.com
      </span>
      <i classNameName="bi bi-facebook me-1"></i>
      <i classNameName="bi bi-instagram me-1"></i>
      <i classNameName="bi bi-twitter"></i>
     </div>
    </header>

    {/* main navbar*/}
    <header>
     <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
      <div classNameName="container-fluid">
       <a classNameName="navbar-brand" href="#">
        <img classNameName="logo" src="images/logo.png" alt="logo" />
       </a>
       <button
        classNameName="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
       >
        <span classNameName="navbar-toggler-icon"></span>
       </button>
       <div
        classNameName="collapse navbar-collapse"
        id="navbarSupportedContent"
       >
        <ul classNameName="navbar-nav me-auto mb-lg-0">
         <li classNameName="nav-item">
          <a classNameName="nav-link me-4" href="index.html">
           HOME
          </a>
         </li>
         <li classNameName="nav-item">
          <a classNameName="nav-link me-4" href="rembership.html">
           MEMBERSHIP
          </a>
         </li>
         <li classNameName="nav-item">
          <a classNameName="nav-link me-4" href="#">
           SERVICES
          </a>
         </li>
         <li classNameName="nav-item">
          <a classNameName="nav-link me-4" href="#">
           VENDORS
          </a>
         </li>
         <li classNameName="nav-item">
          <a classNameName="nav-link me-4" href="#">
           OUR PACKAGE
          </a>
         </li>
         <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">
           CONTACT US
          </a>
         </li>
        </ul>
        <button
         type="button"
         classNameName="btn btn-warning px-4 py-1 me-2"
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
    <section classNameName="hero-section">
     <div classNameName="hero-heading">
      <h1 classNameName="text-dark fw-bold ms-2">
       Find Your Perfect Life Partner
      </h1>
     </div>
     <form>
      <input classNameName="px-4 py-2" type="text" />
      <button classNameName="btn btn-warning px-4 py-2 rounded-3 position-absolute">
       Search
      </button>
     </form>
    </section>

    <section classNameName="feature-section mt-5">
     <h1 classNameName="text-center mb-5">Featured Profiles</h1>
     <div classNameName="row">
      <div classNameName="col-6 col-md-4">
       <div classNameName="card p-1">
        <img src="images/feature.webp" alt="feature" />
        <div classNameName="card-body">
         <h5 classNameName="card-title fw-bold my-1">Ahmed</h5>
         <div classNameName="row">
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Age:</span> 24
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">City:</span> Lahore
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Religion:</span> Islam
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Caste:</span> Warraich
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div classNameName="col-6 col-md-4">
       <div classNameName="card p-1">
        <img src="images/feature.webp" alt="feature" />
        <div classNameName="card-body">
         <h5 classNameName="card-title fw-bold my-1">Ahmed</h5>
         <div classNameName="row">
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Age:</span> 24
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">City:</span> Lahore
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Religion:</span> Islam
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Caste:</span> Warraich
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div classNameName="col-6 col-md-4">
       <div classNameName="card p-1">
        <img src="images/feature.webp" alt="feature" />
        <div classNameName="card-body">
         <h5 classNameName="card-title fw-bold my-1">Ahmed</h5>
         <div classNameName="row">
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Age:</span> 24
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">City:</span> Lahore
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Religion:</span> Islam
           </p>
          </div>
          <div classNameName="col-6">
           <p>
            <span classNameName="fw-bold">Caste:</span> Warraich
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>

    <section classNameName="browse-profile-section mt-5 pb-5">
      <h1 classNameName="text-center py-5">Browse Profiles</h1>

      <div classNameName="container mx-auto">
        <div classNameName="row">
          {profileData.map((profile, index) => (
            <div key={index} classNameName="col-12 col-md-4 pb-5">
              <div classNameName="card p-1">
                <div classNameName="card-body">
                  <p classNameName="card-title p-2">{profile.title}</p>
                  <div classNameName="row">
                    {profile.items.map((item, itemIndex) => (
                      <div key={itemIndex} classNameName ="col-4 p-2">
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

    
    <section classNameName="our-Servies my-5">
      <h1 classNameName="text-center pb-5">Our Services</h1>
      <div classNameName="row px-5">
        <div classNameName="col-12 col-md-6 col-lg-3 text-center">
          <div classNameName="card">
            <div classNameName="card-body">
              <img classNameName="servies-image" src="images/card.png" alt="servies" />
              <h5 classNameName="card-title p-3">Card title</h5>
              <p classNameName="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            </div>
          </div>
        </div>

        <div classNameName="col-12 col-md-6 col-lg-3 text-center">
          <div classNameName="card">
            <div classNameName="card-body">
              <img classNameName="servies-image" src="images/card1.png" alt="servies" />
              <h5 classNameName="card-title p-3">Card title</h5>
              <p classNameName="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk
                of
                the
                card's
                content.</p>
            </div>
          </div>
        </div>

        <div classNameName="col-12 col-md-6 col-lg-3 text-center">
          <div classNameName="card">
            <div classNameName="card-body">
              <img classNameName="servies-image" src="images/card1.png" alt="servies" />
              <h5 classNameName="card-title p-3">Card title</h5>
              <p classNameName="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk
                of
                the
                card's
                content.</p>
            </div>
          </div>
        </div>

        <div classNameName="col-12 col-md-6 col-lg-3 text-center">
          <div classNameName="card">
            <div classNameName="card-body">
              <img classNameName="servies-image" src="images/card1.png" alt="servies" />
              <h5 classNameName="card-title p-3">Card title</h5>
              <p classNameName="card-text px-3 pb-3">Some quick example text to build on the card title and make up the bulk
                of
                the card's
                content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section classNameName="plan mb-5">
      <h1 classNameName="text-center pb-5">
        Let Us Plan Your Wedding
      </h1>
      <div classNameName="row">
        <div classNameName="col-3 text-center">
          <img classNameName="wed-image" src="images/card2.png" alt="even" />
          <p classNameName="fw-bold">Even Manaegment</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card3.png" alt="marquee" />
          <p classNameName="fw-bold">Marquee</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card4.png" alt="catering" />
          <p classNameName="fw-bold">Catering</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card5.png" alt="cars" />
          <p classNameName="fw-bold">Cars</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card6.png" alt="dresees" />
          <p classNameName="fw-bold">Dresses</p>
        </div>
        <div classNameName="col-3 text-center">
          <img classNameName="wed-image" src="images/card1.png" alt="photography" />
          <p classNameName="fw-bold">Photogrphy</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card7.png" alt="honeymoon" />
          <p classNameName="fw-bold">Honeymoon Trip</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card8.png" alt="decoration" />
          <p classNameName="fw-bold">Deorations</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card9.png" alt="jewelry" />
          <p classNameName="fw-bold">Jewelry</p>
        </div>
        <div classNameName="col-2 text-center">
          <img classNameName="wed-image" src="images/card10.png" alt="beauty" />
          <p classNameName="fw-bold">Beauty Saloons</p>
        </div>
      </div>
    </section>

    <section classNameName="stories">
      <h1 classNameName="text-center pb-5">Happily Ever After Stories</h1>
      <div classNameName="row">
        <div classNameName="col-3 text-center">
          <img classNameName="happy-image" src="images/happy.jpg" alt="happy" />
          <p classNameName="fw-bold py-4">HE & SHE</p>
        </div>
        <div classNameName="col-3 text-center">
          <img classNameName="happy-image" src="images/happy.jpg" alt="happy" />
          <p classNameName="fw-bold py-4">HE & SHE</p>
        </div>
        <div classNameName="col-3 text-center">
          <img classNameName="happy-image" src="images/happy.jpg" alt="happy" />
          <p classNameName="fw-bold py-4">HE & SHE</p>
        </div>
        <div classNameName="col-3 text-center">
          <img classNameName="happy-image" src="images/happy.jpg" alt="happy" />
          <p classNameName="fw-bold py-4">HE & SHE</p>
        </div>
      </div>
    </section>

    <section>
      <div classNameName="text-center">
        <h1 classNameName="pb-4">How it work</h1>
        <div classNameName="d-flex position-relative">
          <div classNameName="circle fs-6 one">1</div>
          <p classNameName="position-absolute one stepOne">Sign up to find Rista</p>
        </div>
        <div classNameName="d-flex position-relative">
          <p classNameName="position-absolute stepTwo">submit personal indentifiable details and non-indentifiable details
          </p>
          <div classNameName="circle put fs-6 two">2</div>
        </div>
        <div classNameName="d-flex position-relative">
          <p classNameName="position-absolute stepThree">submit personal indentifiable details and non-indentifiable details
          </p>
          <div classNameName="circle put fs-6 three">3</div>
        </div>
        <div classNameName="border-start vertical bg-danger position-relative top-0 start-50"></div>
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
