export default function Home() {
  return (

<div>
  {/* Coding By CodingNepal - www.codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Camping Gear Website | CodingNepal</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  background: #f2f2f2;\n}\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: #333;\n}\n.navbar {\n  display: flex;\n  padding: 0 10px;\n  max-width: 1200px;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar input#menu-toggler {\n  display: none;\n}\n.navbar #hamburger-btn {\n  cursor: pointer;\n  display: none;\n}\n.navbar .all-links {\n  display: flex;\n  align-items: center;\n}\n.navbar .all-links li {\n  position: relative;\n  list-style: none;\n}\n.navbar .logo a {\n  display: flex;\n  align-items: center;\n  margin-left: 0;\n}\nheader a, footer a {\n  margin-left: 40px;\n  text-decoration: none;\n  color: #fff;\n  height: 100%;\n  padding: 20px 0;\n  display: inline-block;\n}\nheader a:hover, footer a:hover {\n  color: #ddd;\n}\n.homepage {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  background: url(\"images/home-bg.jpg\");\n  background-position: center 65%;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.homepage::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.2);\n}\n.homepage .content {\n  display: flex;\n  height: 85%;\n  z-index: 3;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.homepage .content h1 {\n  font-size: 60px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.homepage .content .text {\n  margin-bottom: 50px;\n  color: #fff;\n  font-size: 20px;\n  text-align: center;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n}\n.content a {\n  color: #000;\n  display: block;\n  text-transform: uppercase;\n  font-size: 18px;\n  margin: 0 10px;\n  padding: 10px 30px;\n  border-radius: 5px;\n  background: #fff;\n  border: 2px solid #fff;\n  transition: 0.4s ease;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n  text-decoration: none;\n}\n.content a:hover {\n  color: #fff;\n  background: rgba(255,255,255,0.3);\n}\nsection {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 0 0;\n}\nsection h2 {\n  font-size: 2rem;\n}\nsection > p {\n  text-align: center;\n}\nsection .cards {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin-top: 50px;\n  padding: 0 10px;\n  justify-content: space-between;\n}\nsection.about {\n  margin: 0 auto;\n  max-width: 1200px;\n}\n.about .company-info {\n  margin-top: 30px;\n}\n.about h3 {\n  margin: 30px 0 10px;\n}\n.about .team {\n  text-align: left;\n  width: 100%;\n}\n.about .team ul {\n  padding-left: 20px;\n}\nsection .cards .card {\n  background: #fff;\n  padding: 40px 15px;\n  list-style: none;\n  border-radius: 5px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);\n  margin-bottom: 40px;\n  width: calc(100% / 3 - 30px);\n  text-align: center;\n}\n.portfolio .cards .card {\n  padding: 0 0 20px;\n}\n.services .card img {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 20px;\n  border-radius: 100%;\n  object-fit: cover;\n}\n.portfolio .card img {\n  width: 100%;\n  padding-bottom: 10px;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  border-radius: 7px;\n}\n.cards .card p {\n  padding: 0 15px;\n  margin-top: 5px;\n}\n.about .row {\n  padding: 0 10px;\n}\n.contact .row {\n  margin: 60px 0 90px;\n  display: flex;\n  max-width: 1200px;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n.contact .row .col {\n  padding: 0 10px;\n  width: calc(100% / 2 - 50px);\n}\n.contact .col p {\n  margin-bottom: 10px;\n}\n.contact .col p i {\n  color: #7a7a7a;\n  margin-right: 10px;\n}\n.contact form input {\n  height: 45px;\n  margin-bottom: 20px;\n  padding: 10px;\n  width: 100%;\n  font-size: 16px;\n  outline: none;\n  border: 1px solid #bfbfbf;\n}\n.contact form textarea {\n  padding: 10px;\n  width: 100%;\n  font-size: 16px;\n  height: 150px;\n  outline: none;\n  resize: vertical;\n  border: 1px solid #bfbfbf;\n}\n.contact form button {\n  margin-top: 10px;\n  padding: 10px 20px;\n  font-size: 17px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  background: #333;\n  transition: 0.2s ease;\n}\n.contact form button:hover {\n  background: #525252;\n}\nfooter {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: #000;\n  padding: 20px 0;\n}\nfooter div {\n  padding: 0 10px;\n  max-width: 1200px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nfooter span {\n  color: #fff;\n}\nfooter a {\n  padding: 0;\n}\n@media screen and (max-width: 860px) {\n  .navbar .all-links {\n    position: fixed;\n    left: -100%;\n    width: 300px;\n    display: block;\n    height: 100vh;\n    top: 75px;\n    background: #333;\n    transition: left 0.3s ease;\n  }\n  .navbar #menu-toggler:checked~.all-links {\n    left: 0;\n  }\n  .navbar .all-links li {\n    font-size: 18px;\n  }\n  .navbar #hamburger-btn {\n    display: block;\n  }\n  section > p {\n    text-align: center;\n  }\n  section .cards .card {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 30px;\n  }\n  .homepage .content h1 {\n    font-size: 40px;\n    font-weight: 700;\n    margin-bottom: 10px;\n  }\n  .homepage .content .text {\n    font-size: 17px;\n  }\n  .content a {\n    font-size: 17px;\n    padding: 9px 20px;\n  }\n  .contact .row {\n    flex-direction: column;\n  }\n  .contact .row .col {\n    width: 100%;\n  }\n  .contact .row .col:last-child {\n    margin-top: 40px;\n  }\n  footer a {\n    height: 0;\n  }\n}\n@media screen and (max-width: 560px) {\n  section .cards .card {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n}\n" }} />
  <header>
    <nav className="navbar">
      <h2 className="logo"><a href="#">LOGO</a></h2>
      <input type="checkbox" id="menu-toggler" />
      <label htmlFor="menu-toggler" id="hamburger-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
        </svg>
      </label>
      <ul className="all-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>
  <section className="homepage" id="home">
    <div className="content">
      <div className="text">
        <h1>Camping Gear and Essentials</h1>
        <p>
          Discover top-quality camping gear for unforgettable outdoor adventures. <br /> Gear up and make lasting memories.</p>
      </div>
      <a href="#services">Our Services</a>
    </div>
  </section>
  <section className="services" id="services">
    <h2>Our Services</h2>
    <p>Explore our wide range of camping gear services.</p>
    <ul className="cards">
      <li className="card">
        <img src="images/tents.jpg" alt="img" />
        <h3>Tents</h3>
        <p>Experience comfort and protection with our high-quality camping tents.</p>
      </li>
      <li className="card">
        <img src="images/bags.jpg" alt="img" />
        <h3>Sleeping Bags</h3>
        <p>Stay cozy and warm during your camping trips with our premium sleeping bags.</p>
      </li>
      <li className="card">
        <img src="images/stoves.jpg" alt="img" />
        <h3>Camp Stoves</h3>
        <p>Cook delicious meals in the great outdoors with our reliable camp stoves.</p>
      </li>
      <li className="card">
        <img src="images/backpacks.jpg" alt="img" />
        <h3>Backpacks</h3>
        <p>Carry your essentials comfortably with our durable and functional camping backpacks.</p>
      </li>
      <li className="card">
        <img src="images/chair.jpg" alt="img" />
        <h3>Camp Chairs</h3>
        <p>Relax and unwind in style with our comfortable and portable camping chairs.</p>
      </li>
      <li className="card">
        <img src="images/light.jpg" alt="img" />
        <h3>Camp Lights</h3>
        <p>Illuminate your campsite with our reliable and energy-efficient camping lights.</p>
      </li>
    </ul>
  </section>
  <section className="portfolio" id="portfolio">
    <h2>Our Portfolio</h2>
    <p>Take a look at some of our memorable camping adventures.</p>
    <ul className="cards">
      <li className="card">
        <img src="images/camping-1.jpg" alt="img" />
        <h3>Mountain Hiking</h3>
        <p>Embark on an exhilarating hiking adventure in the breathtaking mountain ranges.</p>
      </li>
      <li className="card">
        <img src="images/camping-2.jpg" alt="img" />
        <h3>Lakeside Camping</h3>
        <p>Enjoy a tranquil camping experience by the serene shores of picturesque lakes.</p>
      </li>
      <li className="card">
        <img src="images/camping-3.jpg" alt="img" />
        <h3>Beach Camping</h3>
        <p>Escape to sandy beaches and camp under the starry sky by the crashing waves.</p>
      </li>
      <li className="card">
        <img src="images/camping-4.jpg" alt="img" />
        <h3>Forest Exploration</h3>
        <p>Discover the wonders of lush forests and immerse yourself in nature's beauty.</p>
      </li>
      <li className="card">
        <img src="images/camping-5.jpg" alt="img" />
        <h3>RV Camping</h3>
        <p>Experience the freedom of road trips and camping adventures with our RV rentals.</p>
      </li>
      <li className="card">
        <img src="images/camping-6.jpg" alt="img" />
        <h3>Desert Camping</h3>
        <p>Embark on a unique desert camping experience and witness stunning landscapes.</p>
      </li>
    </ul>
  </section>
  <section className="about" id="about">
    <h2>About Us</h2>
    <p>Discover our story in providing camping services.</p>
    <div className="row company-info">
      <h3>Our Story</h3>
      <p>Experience the excellence of our camping gear and services, where we have been offering high-quality camping essentials and gear for outdoor enthusiasts for over a decade. Our commitment to quality and customer satisfaction ensures that every adventurer can rely on us for their camping needs.</p>
    </div>
    <div className="row mission-vision">
      <h3>Our Mission</h3>
      <p>At Camping Gear Experts, our mission is to equip outdoor enthusiasts with top-notch camping gear and essentials that enhance their outdoor experiences. We strive to provide reliable, durable, and innovative products that contribute to memorable adventures and lasting memories.</p>
      <h3>Our Vision</h3>
      <p>Our vision is to become the go-to destination for camping enthusiasts, known for our extensive selection of premium camping gear and exceptional customer service. We aspire to inspire and enable people to embrace the beauty of nature and create unforgettable camping experiences.</p>
    </div>
    <div className="row team">
      <h3>Our Team</h3>
      <ul>
        <li>John Doe - Founder and CEO</li>
        <li>Jane Smith - Gear Specialist</li>
        <li>Mark Johnson - Customer Representative</li>
        <li>Sarah Brown - Operations Manager</li>
      </ul>
    </div>
  </section>
  <section className="contact" id="contact">
    <h2>Contact Us</h2>
    <p>Reach out to us for any inquiries or feedback.</p>
    <div className="row">
      <div className="col information">
        <div className="contact-details">
          <p><i className="fas fa-map-marker-alt" /> 123 Campsite Avenue, Wilderness, CA 98765</p>
          <p><i className="fas fa-envelope" /> info@campinggearexperts.com</p>
          <p><i className="fas fa-phone" /> (123) 456-7890</p>
          <p><i className="fas fa-clock" /> Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p><i className="fas fa-clock" /> Saturday: 10:00 AM - 3:00 PM</p>
          <p><i className="fas fa-clock" /> Sunday: Closed</p>
          <p><i className="fas fa-globe" /> www.codingnepalweb.com</p>
        </div>          
      </div>
      <div className="col form">
        <form>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <textarea placeholder="Message*" required defaultValue={""} />
          <button id="submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
  <footer>
    <div>
      <span>Copyright © 2023 All Rights Reserved</span>
      <span className="link">
        <a href="#">Home</a>
        <a href="#contact">Contact</a>
      </span>
    </div>
  </footer>
</div>

)
}
