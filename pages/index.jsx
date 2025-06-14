export default function Home() {
  return (
    <div className="animated" data-aos="fade-up">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Wrecked G3N</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      
      <style dangerouslySetInnerHTML={{__html: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background: #f2f2f2;
          overflow-x: hidden;
        }
        
        /* Enhanced Header with Glassmorphism */
        header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          display: flex;
          justify-content: center;
          background: rgba(51, 51, 51, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideDown 0.8s ease-out;
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        header.scrolled {
          background: rgba(0, 0, 0, 0.98);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .navbar {
          display: flex;
          padding: 0 20px;
          max-width: 1200px;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        
        .navbar .logo {
          position: relative;
          overflow: hidden;
        }
        
        .navbar .logo a {
          display: flex;
          align-items: center;
          margin-left: 0;
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .navbar .logo a:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.5));
        }
        
        .navbar input#menu-toggler {
          display: none;
        }
        
        .navbar #hamburger-btn {
          cursor: pointer;
          display: none;
          padding: 10px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .navbar #hamburger-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }
        
        .navbar .all-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .navbar .all-links li {
          position: relative;
          list-style: none;
        }
        
        /* Enhanced Navigation Links */
        header a, footer a {
          margin-left: 20px;
          text-decoration: none;
          color: #fff;
          height: 100%;
          padding: 20px 15px;
          display: inline-block;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 8px;
          overflow: hidden;
        }
        
        header a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        header a:hover::before {
          left: 100%;
        }
        
        header a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        header a:hover::after {
          width: 80%;
        }
        
        header a:hover {
          color: #4ecdc4;
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05);
        }
        
        /* Enhanced Homepage Section */
        .homepage {
          height: 100vh;
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('/background.jpg');
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .homepage::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.1), transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(78, 205, 196, 0.1), transparent 50%);
          animation: floatingGradient 8s ease-in-out infinite;
        }
        
        @keyframes floatingGradient {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }
        
        .homepage .content {
          display: flex;
          height: 85%;
          z-index: 3;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          position: relative;
        }
        
        .homepage .content h1 {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          animation: titleGlow 2s ease-in-out infinite alternate;
          position: relative;
        }
        
        @keyframes titleGlow {
          from { text-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 107, 107, 0.3); }
          to { text-shadow: 0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(78, 205, 196, 0.4); }
        }
        
        .homepage .content .text {
          margin-bottom: 40px;
          color: #fff;
          font-size: clamp(1rem, 3vw, 1.3rem);
          text-align: center;
          text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
          opacity: 0.9;
          animation: fadeInUp 1s ease 0.5s both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Enhanced CTA Button */
        .content a {
          color: #000;
          display: inline-block;
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 600;
          margin: 20px 10px;
          padding: 15px 40px;
          border-radius: 50px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          border: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          animation: buttonFloat 3s ease-in-out infinite;
        }
        
        @keyframes buttonFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .content a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }
        
        .content a:hover::before {
          left: 100%;
        }
        
        .content a:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
        }
        
        /* Floating Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        /* Enhanced Sections */
        section {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255, 107, 107, 0.02), transparent);
          animation: sectionGlow 10s linear infinite;
          pointer-events: none;
        }
        
        @keyframes sectionGlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        section h2 {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 20px;
          background: linear-gradient(45deg, #333, #666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          animation: slideInFromLeft 1s ease-out;
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        section > p {
          text-align: center;
          max-width: 600px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
          animation: slideInFromRight 1s ease-out 0.2s both;
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Enhanced Cards */
        section .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin-top: 60px;
          padding: 0 20px;
          width: 100%;
        }
        
        section .cards .card {
          background: #fff;
          padding: 40px 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: cardSlideUp 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        @keyframes cardSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        section .cards .card:nth-child(1) { animation-delay: 0.1s; }
        section .cards .card:nth-child(2) { animation-delay: 0.2s; }
        section .cards .card:nth-child(3) { animation-delay: 0.3s; }
        section .cards .card:nth-child(4) { animation-delay: 0.4s; }
        section .cards .card:nth-child(5) { animation-delay: 0.5s; }
        section .cards .card:nth-child(6) { animation-delay: 0.6s; }
        
        section .cards .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }
        
        section .cards .card:hover::before {
          opacity: 1;
        }
        
        section .cards .card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          border-color: rgba(78, 205, 196, 0.3);
        }
        
        /* Enhanced Images */
        .services .card img, .portfolio .card img {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 15px;
          position: relative;
          z-index: 2;
        }
        
        .services .card img {
          width: 120px;
          height: 120px;
          margin-bottom: 25px;
          object-fit: cover;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
        }
        
        .portfolio .card img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          margin-bottom: 15px;
        }
        
        .card:hover img {
          transform: scale(1.1) rotate(2deg);
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
        }
        
        /* Enhanced Text */
        .cards .card h3 {
          font-size: 1.4rem;
          margin: 20px 0 15px;
          color: #333;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .card:hover h3 {
          color: #4ecdc4;
        }
        
        .cards .card p {
          padding: 0 10px;
          margin-top: 10px;
          color: #666;
          line-height: 1.6;
          transition: color 0.3s ease;
        }
        
        .card:hover p {
          color: #555;
        }
        
        /* Team Section Enhancements */
        #team {
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
          position: relative;
        }
        
        #team::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        #team h2, #team p {
          color: #fff;
          position: relative;
          z-index: 2;
        }
        
        /* Contact Section */
        .contact .row {
          margin: 60px 0 90px;
          display: flex;
          max-width: 1200px;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }
        
        .contact .row .col {
          flex: 1;
          padding: 0 20px;
        }
        
        .contact .col p {
          margin-bottom: 15px;
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 8px;
        }
        
        .contact .col p:hover {
          background: rgba(78, 205, 196, 0.1);
          transform: translateX(10px);
        }
        
        .contact .col p i {
          color: #4ecdc4;
          margin-right: 15px;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .contact .col p:hover i {
          transform: scale(1.2);
          color: #ff6b6b;
        }
        
        /* Enhanced Form */
        .contact form {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .contact form:hover {
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }
        
        .contact form input, .contact form textarea {
          width: 100%;
          padding: 15px 20px;
          margin-bottom: 20px;
          border: 2px solid #eee;
          border-radius: 12px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: #fafafa;
        }
        
        .contact form input:focus, .contact form textarea:focus {
          border-color: #4ecdc4;
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(78, 205, 196, 0.2);
        }
        
        .contact form textarea {
          height: 150px;
          resize: vertical;
        }
        
        .contact form button {
          width: 100%;
          padding: 15px 30px;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 12px;
          background: linear-gradient(45deg, #4ecdc4, #44a08d);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .contact form button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }
        
        .contact form button:hover::before {
          left: 100%;
        }
        
        .contact form button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(78, 205, 196, 0.4);
          background: linear-gradient(45deg, #44a08d, #4ecdc4);
        }
        
        /* Enhanced Footer */
        footer {
          width: 100%;
          display: flex;
          justify-content: center;
          background: linear-gradient(135deg, #000, #1a1a1a);
          padding: 40px 0;
          position: relative;
          overflow: hidden;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #4ecdc4, transparent);
        }
        
        footer div {
          padding: 0 20px;
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        footer span {
          color: #ccc;
          transition: color 0.3s ease;
        }
        
        footer:hover span {
          color: #fff;
        }
        
        footer a {
          padding: 10px 15px;
          margin: 0 5px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        footer a:hover {
          background: rgba(78, 205, 196, 0.2);
          transform: translateY(-2px);
        }
        
        /* Scroll Animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Mobile Responsiveness */
        @media screen and (max-width: 860px) {
          .navbar .all-links {
            position: fixed;
            left: -100%;
            width: 300px;
            display: block;
            height: 100vh;
            top: 75px;
            background: rgba(51, 51, 51, 0.98);
            backdrop-filter: blur(20px);
            transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding-top: 50px;
          }
          
          .navbar #menu-toggler:checked ~ .all-links {
            left: 0;
          }
          
          .navbar .all-links li {
            font-size: 18px;
            margin: 10px 0;
            transform: translateX(-50px);
            opacity: 0;
            animation: slideInMenu 0.5s ease forwards;
          }
          
          .navbar .all-links li:nth-child(1) { animation-delay: 0.1s; }
          .navbar .all-links li:nth-child(2) { animation-delay: 0.2s; }
          .navbar .all-links li:nth-child(3) { animation-delay: 0.3s; }
          .navbar .all-links li:nth-child(4) { animation-delay: 0.4s; }
          .navbar .all-links li:nth-child(5) { animation-delay: 0.5s; }
          
          @keyframes slideInMenu {
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .navbar #hamburger-btn {
            display: block;
          }
          
          .contact .row {
            flex-direction: column;
            gap: 30px;
          }
          
          .contact .row .col {
            width: 100%;
          }
          
          section .cards {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }
        }
        
        @media screen and (max-width: 560px) {
          section .cards {
            grid-template-columns: 1fr;
          }
          
          .homepage .content h1 {
            font-size: 2.5rem;
          }
          
          .homepage .content .text {
            font-size: 1rem;
          }
          
          .content a {
            font-size: 16px;
            padding: 12px 30px;
          }
        }
        
        /* Loading Animation */
        .page-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s ease;
        }
        
        .page-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .loader {
          width: 60px;
          height: 60px;
          border: 3px solid rgba(78, 205, 196, 0.3);
          border-top: 3px solid #4ecdc4;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
      
      {/* Page Loader */}
      <div className="page-loader" id="pageLoader">
        <div className="loader"></div>
      </div>
      
      <header id="header">
        <nav className="navbar">
          <h2 className="logo" data-aos="fade-right">
            <a href="#">WRECKED G3N</a>
          </h2>
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
            <li><a href="#team">Our Team</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="homepage" id="home">
        <div className="particles" id="particles"></div>
        <div className="content" data-aos="fade-up" data-aos-duration="1000">
          <div className="text">
            <h1 data-aos="zoom-in" data-aos-delay="200">Wrecked G3N</h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Discover top-quality Services, Tools, Accounts all for free and paid
            </p>
          </div>
          <a href="#services" data-aos="fade-up" data-aos-delay="600">Our Services</a>
        </div>
      </section>
      
      <section className="services scroll-reveal" id="services" data-aos="fade-up">
        <h2 data-aos="fade-down">Our Services</h2>
        <p data-aos="fade-up" data-aos-delay="200">Explore our wide range of Services, Tools, Accounts, etc</p>
        <ul className="cards">
          <li className="card" data-aos="flip-left" data-aos-delay="100">
            <img src="/accs.png" alt="Accounts" />
            <h3>Accounts</h3>
            <p>Get All types of accs like free and premium</p>
          </li>
          <li className="card" data-aos="flip-left" data-aos-delay="200">
            <img src="/nigga.png" alt="Services" />
            <h3>Services</h3>
            <p>Get our lifetime services for some accounts and tools</p>
          </li>
          <li className="card" data-aos="flip-left" data-aos-delay="300">
            <img src="/tools.png" alt="Tools" />
            <h3>Tools</h3>
            <p>Get the Tools made by us and us only at cheap cost</p>
          </li>
          <li className="card" data-aos="flip-left" data-aos-delay="400">
            <img src="/bots.png" alt="Custom Bots" />
            <h3>Custom Bots</h3>
            <p>Get Bots like ours for your server custom made</p>
          </li>
          <li className="card" data-aos="flip-left" data-aos-delay="500">
            <img src="/server.png" alt="Hosting" />
            <h3>Cheap/Free Hosting Methods</h3>
            <p>Not rich enough get cheap and free hosting</p>
          </li>
          <li className="card" data-aos="flip-left" data-aos-delay="600">
            <img src="/web.png" alt="Custom Web" />
            <h3>Custom Web</h3>
            <p>Get Your own custom web like ours</p>
          </li>
        </ul>
      </section>
      
      <section className="portfolio scroll-reveal" id="team" data-aos="fade-up">
        <h2 data-aos="fade-down">Our Main Team</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Take a look at some of our team member. <br /> 
          NOTE: THERE ARE SOME MANY MORE STAFF STILL
        </p>
        <ul className="cards">
          <li className="card" data-aos="zoom-in" data-aos-delay="100">
            <img src="/wcoder.png" alt="Wcoder" />
            <h3>Wcoder</h3>
            <p>Founder & Developer<br />Discord Username: wcoder1008</p>
          </li>
          <li className="card" data-aos="zoom-in" data-aos-delay="200">
            <img src="/kurapika.png" alt="Kurapika" />
            <h3>Kurapika</h3>
            <p>Founder & Manager<br />Discord Username: kurapika_alt</p>
          </li>
          <li className="card" data-aos="zoom-in" data-aos-delay="300">
            <img src="/itsmeboi.png" alt="ItsMeBoi" />
            <h3>ItsMeBoi</h3>
            <p>Owner & Developer<br />Discord Username: itsmeboi0923</p>
          </li>
          <li className="card" data-aos="zoom-in" data-aos-delay="400">
            <img src="/minx.png" alt="M1NX" />
            <h3>M1NX</h3>
            <p>Co Owner & Tool Developer<br />Discord Username: anush.exe</p>
          </li>
          <li className="card" data-aos="zoom-in" data-aos-delay="500">
            <img src="/madara.png" alt="Madara" />
            <h3>Madara</h3>
            <p>Admin & Manager<br />Discord Username: mahathir0712</p>
          </li>
          <li className="card" data-aos="zoom-in" data-aos-delay="600">
            <img src="/zenoxsir.png" alt="Zenoxsir" />
            <h3>Zenoxsir</h3>
            <p>Admin & Manager<br />Discord Username: z3n0xs1r</p>
          </li>
        </ul>
      </section>
      
      <section className="about scroll-reveal" id="about" data-aos="fade-up">
        <h2 data-aos="fade-down">About Us</h2>
        <p data-aos="fade-up" data-aos-delay="200">Discover our story in providing FREE and CHEAP services</p>
        <div className="row company-info" data-aos="fade-right" data-aos-delay="300">
          <h3>Our Story</h3>
          <p>Started by Kurapika and Wcoder (Me) as a passion project to create something meaningful and fun together.</p>
        </div>
        <div className="row mission-vision" data-aos="fade-left" data-aos-delay="400">
          <h3>Our Mission</h3>
          <p>To become #1 in the industry while providing more value and freedom—for free.</p>
          <h3>Our Vision</h3>
          <p>To surpass the industry leader within a year by offering better value at lower costs—without compromise.</p>
        </div>
      </section>
      
      <section className="contact scroll-reveal" id="contact" data-aos="fade-up">
        <h2 data-aos="fade-down">Contact Us</h2>
        <p data-aos="fade-up" data-aos-delay="200">Reach out to us for any inquiries or feedback.</p>
        <div className="row">
          <div className="col information" data-aos="fade-right" data-aos-delay="300">
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
          <div className="col form" data-aos="fade-left" data-aos-delay="400">
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <textarea placeholder="Message*" required defaultValue={""} />
              <button id="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      <footer data-aos="fade-up">
        <div>
          <span>Copyright © 2023 All Rights Reserved</span>
          <span className="link">
            <a href="#">Home</a>
            <a href="#contact">Contact</a>
          </span>
        </div>
      </footer>
      
      <script dangerouslySetInnerHTML={{__html: `
        // Page Loader
        window.addEventListener('load', function() {
          const loader = document.getElementById('pageLoader');
          setTimeout(() => {
            loader.classList.add('hidden');
          }, 1000);
        });
        
        // Header Scroll Effect
        window.addEventListener('scroll', function() {
          const header = document.getElementById('header');
          if (window.scrollY > 100) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        });
        
        // Floating Particles
        function createParticles() {
          const particlesContainer = document.getElementById('particles');
          if (!particlesContainer) return;
          
          for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
          }
        }
        
        // Scroll Reveal Animation
        function revealOnScroll() {
          const reveals = document.querySelectorAll('.scroll-reveal');
          
          reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
              reveal.classList.add('revealed');
            }
          });
        }
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
          createParticles();
          revealOnScroll();
        });
        
        window.addEventListener('scroll', revealOnScroll);
        
        // Mobile Menu Close on Link Click
        document.querySelectorAll('.all-links a').forEach(link => {
          link.addEventListener('click', () => {
            document.getElementById('menu-toggler').checked = false;
          });
        });
        
        // Form Enhancement
        const form = document.querySelector('.contact form');
        if (form) {
          form.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
            
            setTimeout(() => {
              button.textContent = 'Message Sent!';
              button.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
              
              setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
                form.reset();
              }, 2000);
            }, 1500);
          });
        }
      `}} />
    </div>
  )
}