var YourComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content />
        <meta name="author" content="webthemez" />
        <title>Coffee Shop Free HTML Website Template | webthemez</title>
        {/* Bootstrap core CSS */}
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */} 
        {/*[if lt IE 9]>
        
        
    <![endif]*/}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:600,700,800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n\nhtml, button, input, select, textarea {\n\tcolor: #222;\n}\n::-moz-selection {\n\tbackground: #f2c2c9;\n\tcolor: #a4003a;\n\ttext-shadow: none;\n}\n::selection {\n\tbackground: #16a085;\n\tcolor: #a4003a;\n\ttext-shadow: none;\n}\n\nhr {\n\tdisplay: block;\n\theight: 1px;\n\tborder: 0;\n\tmargin: 3em 0;\n\tpadding: 0;\n\tbackground-image: -webkit-linear-gradient(left, #fff, #ccc, #fff);\n\tbackground-image: -moz-linear-gradient(left, #fff, #ccc, #fff);\n\tbackground-image: -ms-linear-gradient(left, #fff, #ccc, #fff);\n\tbackground-image: -o-linear-gradient(left, #fff, #ccc, #fff);\n\twidth: 50%;\n\tleft: 25%;\n\tposition: relative;\n\tborder: none;\n}\n\nimg {\n\tvertical-align: middle;\n}\n \ntextarea {\n\tresize: vertical;\n}\n/* ===============================================\n   General styles\n   ============================================== */\n\nhtml, body {\n\theight: 100%;\n}\nbody { \n\tfont-weight: 300;\n\tfont-size: 16px;\n\tcolor: #555;\n\t-webkit-font-smoothing: antialiased;\n\t-webkit-overflow-scrolling: touch;\n\tline-height: 1.4;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.logo a {\n\tmargin: 0 auto; \n\tdisplay: inline-block; \n} \n.logo a img {\n\tbackground: transparent;\n}\n.navbar-inverse {\n\tbackground-color: #FFFFFF;\n\tborder-color: rgba(127, 90, 5, 1);\n\tpadding: 20px 0;\n}\n.navbar-inverse .navbar-nav > li > a {\n\tcolor: #1B0B03;\n}\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n\tcolor: #1B0B03;\n}\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n\tcolor: #fff;\n\tbackground-color: #080808;\n\tborder-radius: 15px 0px 15px 0px;\n}\n.navbar-inverse .navbar-toggle {\n\tborder-color: #333;\n\tbackground: rgb(31, 14, 7);\n}\n.tb {\n\tdisplay: table;\n\twidth: 100%;\n}\n.tb-cell {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n}\n.text-center {\n\ttext-align: center;\n}\n\n.col-md-4 {\n\tpadding-bottom: 20px;\n}\n.row {\n\tmargin-right: 0px;\n\tmargin-left: -15px;\n}\n.modal-header {\n\tbackground: #E89A2F;\n}\n.modal-header h4 {\n\tcolor: white;\n\tfont-weight: 700;\n\tletter-spacing: 1px;\n}\n.modal-footer {\n\tbackground: #2b2b2b;\n}\n.navbar-default {\n\tborder-color: transparent;\n\tbackground-color: #dadada;\n}\n.navbar-inverse .navbar-brand {\n\tfont-weight: 500;\n\tfont-size: 20px;\n}\n.navbar-toggle {\n\tborder-color: transparent;\n\tborder: 0px solid transparent;\n}\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n\tbackground-color: #16a085;\n\tcolor: white;\n}\na img {\n\tbackground: white;\n}\n.odd a img {\n\tbackground: #f5f5f5;\n}\n/* Titles */\nh1, h2, h3, h4, h5, h6 {\n\tfont-family: \"Raleway\";\n\tfont-weight: 200;\n\tcolor: #333;\n}\nh2 {\n\tfont-size: 36px;\n\tcolor: #E89A2F;\n}\nh3 {\n\tfont-size: 26px;\n}\n/* Paragraph & Typographic */\np {\n\tline-height: 28px;\n\tmargin-bottom: 20px;\n\tfont-size: 15px;\n}\np.large {\n\tfont-size: 16px;\n\tmargin-bottom: 50px;\n}\n.centered {\n\ttext-align: center;\n}\nstrong {\n\tfont-weight: 700;\n}\nem {\n\tfont-weight: 300;\n}\npre {\n\tbackground: #ebebeb;\n\tborder: none; \n\tfont-size: 16px;\n\tcolor: #666;\n\tpadding: 20px;\n\tline-height: 28px;\n}\nsmall {\n\tfont-size: 12px;\n}\nblockquote, blockquote p {\n\tline-height: 28px;\n\tcolor: #999;\n\tfont-weight: 300;\n\tfont-style: italic;\n}\nblockquote {\n\tposition: relative;\n\tmargin: 0 0 40px -30px;\n\tpadding-left: 30px;\n\tborder-left: 5px solid #3498db;\n}\nblockquote cite {\n\tposition: absolute;\n\tbottom: -25px;\n\tright: 0;\n\tfont-size: 12px;\n\tfont-style: italic;\n\tcolor: #333;\n\tfont-weight: 300;\n}\nblockquote cite:before {\n\tcontent: \"-- \"\n}\n/* Images */\n.overflow-image {\n\tmargin-top: -65px;\n}\n/* Links */\na {\n\tcolor: #4abcc5;\n\tword-wrap: break-word;\n\t-webkit-transition: color 0.1s ease-in, background 0.1s ease-in;\n\t-moz-transition: color 0.1s ease-in, background 0.1s ease-in;\n\t-ms-transition: color 0.1s ease-in, background 0.1s ease-in;\n\t-o-transition: color 0.1s ease-in, background 0.1s ease-in;\n\ttransition: color 0.1s ease-in, background 0.1s ease-in;\n}\na:hover, a:focus {\n\tcolor: #c0392b;\n\ttext-decoration: none;\n\toutline: 0;\n}\na:before, a:after {\n\t-webkit-transition: color 0.1s ease-in, background 0.1s ease-in;\n\t-moz-transition: color 0.1s ease-in, background 0.1s ease-in;\n\t-ms-transition: color 0.1s ease-in, background 0.1s ease-in;\n\t-o-transition: color 0.1s ease-in, background 0.1s ease-in;\n\ttransition: color 0.1s ease-in, background 0.1s ease-in;\n} \n/* ========================================================================== \n   Wrap Sections\n   ========================================================================== */\n\n#headerwrap {\n\tbackground: url(../img/header_bg.jpg) no-repeat center top;\n\tmargin-top: -50px;\n\tpadding-top: 120px;\n\ttext-align: center;\n\tbackground-attachment: relative;\n\tbackground-position: center center;\n\tmin-height: 850px;\n\twidth: 100%;\n\t-webkit-background-size: 100%;\n\t-moz-background-size: 100%;\n\t-o-background-size: 100%;\n\tbackground-size: 100%;\n\t-webkit-background-size: cover;\n\t-moz-background-size: cover;\n\t-o-background-size: cover;\n\tbackground-size: cover;\n\tpadding-bottom: 100px;\n}\n#headerwrap h1 {\n\tcolor: #ffffff;\n\tfont-size: 50px;\n\tfont-weight: 400;\n\ttext-align: center;\n\tletter-spacing: 3px;\n}\n#headerwrap p {\n\tcolor: #fff;\n\tfont-size: 22px;\n\tfont-weight: 300;\n\ttext-align: center;\n\tletter-spacing: 1px;\n}\n#headerwrap .icon {\n\tcolor: #ffffff;\n\tmargin-top: 115px;\n\tpadding-bottom: 30px;\n\tletter-spacing: 8px;\n\tfont-size: 100px;\n\tfont-weight: bold;\n}\n#headerwrap .btn {\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tmargin: 50px 0;\n\tbackground-color: #e89a2f;\n\tcolor: #fff;\n\tborder-radius: 0;\n\tcolor: #000;\n}\n#headerwrap .btn:hover, #headerwrap .btn:focus {\n\tbackground-color:#fff;\n\tcolor:#000; \n\toutline: 0px;\n\tborder-radius: 0px;\n}\n \n.img-circle {\n\tborder-radius: 50%;\n\tborder: 1px solid #E89A2F;\n\tpadding: 5px;\n\tbackground: #fff;\n}\n#about {\n\tbackground: #FFF;\n\tpadding: 100px 0;\n}\n#about img {\n\tmargin-top: 65px;\n}\n#services {\n\tbackground: #FFFFFF;\n\tpadding: 100px 0;\n\ttext-align: center;\n}\n#services .fa {\n\tcolor: #E89A2F;\n}\n#services p {\n\ttext-align: center;\n}\n.hero-section {\n\tbackground-color: #E89A2F;\n\tpadding: 60px 0;\n}\n.hero-section p {\n\tcolor: #fff;\n\tline-height: 30px;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 18px;\n}\n.reservation-btn {\n\tbackground: #000;\n\tborder-radius: 0px;\n\tpadding: 12px 20px;\n\tcolor: #fff;\n}\n.reservation-btn:hover {\n\tcolor: #000;\n\tbackground: #fff;\n}\n#team {\n\tbackground: #000000;\n\tpadding: 100px 0;\n}\n#team h4 {\n\tpadding-top: 10px;\n\tcolor: #898989;\n}\n#team p.large {\n\tmargin-top: 60px;\n\tmargin-bottom: 40px;\n}\n#team .fa {\n\twidth: 30px;\n\theight: 30px;\n\tmargin: 0 3px;\n\tborder-radius: 100%;\n\tfont-size: 15px;\n\tline-height: 30px;\n\toutline: 0;\n\tcolor: #fff;\n\tbackground-color: #E89A2F;\n\t-webkit-transition: all .3s;\n\t-moz-transition: all .3s;\n\ttransition: all .3s;\n}\n#team .fa:hover {\n\tbackground-color: #ffbf00;\n}\n#portfolio {\n\tbackground: #fff;\n\tpadding: 100px 0;\n}\n#portfolio .btn-default {\n\tborder: 0;\n}\n#contact {\n\tbackground:#F4F4F4;\n\tpadding: 100px 0;\n\ttext-align: center;\n}\n\n#contact .form {\n\tpadding: 30px 0;\n}\n#contact .fa {\n\tcolor: #E89A2F;\n\tmargin-bottom: 10px;\n}\n#contact .btn {\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tmargin-top: 50px;\n\tbackground-color: #E89A2F;\n\tcolor: #fff;\n\tborder: 0;\n\tborder-radius: 0;\n}\n#contact .btn:hover, #contact .btn:focus {\n\tbackground-color: #e9af03;\n\toutline: 0px;\n}\n#greywrap {\n\tbackground: #f5f5f5;\n\tmargin-top: 0px;\n\tpadding: 50px 0;\n\tborder-bottom: 1px solid #eee;\n\ttext-align: center;\n}\n#greywrap .btn {\n\tfont-family: \"Raleway\";\n\tfont-weight: 300;\n\tfont-size: 20px;\n\tmargin: 0 25px;\n\tbackground-color: #fff;\n\tborder-color: #e2e2e2;\n\tcolor: #888;\n\tborder-bottom: 0;\n\tletter-spacing: 1px;\n}\n#greywrap .btn:hover, #greywrap .btn:focus {\n\tmargin: 0 25px;\n\tbackground-color: #fff;\n\tborder-color: #a5cdd5;\n\tborder-bottom: 0;\n\toutline: 0px;\n\tcolor: #a5cdd5;\n}\n#greywrap h2 {\n\tfont-size: 30px;\n}\n#greywrap .callout {\n\tmargin-bottom: 20px;\n}\n#greywrap p {\n\tfont-size: 30px;\n}\n#greywrap .fa {\n\tfont-size: 18px;\n\tmargin-right: 4px;\n}\n#footerwrap {\n\tbackground: #080808;\n\tpadding: 25px 0 15px 0;\n\tborder-bottom: 1px solid #ddd;\n\ttext-align: center;\n}\n#footerwrap span.copyright {\n\tline-height: 40px;\n\tcolor: #888;\n\tfont-weight: 400;\n}\n#footerwrap span.copyright a {\n\tcolor: #888;\n\tborder-bottom: 1px dotted;\n}\n#footerwrap span.copyright a:hover {\n\tcolor: #ffbf00;\n\ttext-decoration: none;\n}\n#footerwrap h4 {\n\tcolor: white;\n}\nul.social-buttons {\n\tmargin: 0;\n}\nul.social-buttons li a {\n\tfont-size: 22px;\n\toutline: 0;\n\tcolor: #FFFFFF;\n\tmargin-right: 12px;\n}\nul.social-buttons li a:hover, ul.social-buttons li a:focus, ul.social-buttons li a:active {\n\tcolor: #ffbf00;\n} \n\n.white h1 {\n\tcolor: #999;\n}\n.white p {\n\tpadding-top: 15px;\n} \n\n.grid figure {\n\tmargin: 0;\n\tposition: relative;\n\tborder: 1px solid #eee;\n}\n.grid figure img {\n\twidth: 100%;\n\tdisplay: block;\n\tposition: relative;\n}\n.grid figcaption {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 20px;\n\tcolor: #fff;\n\tbackground-color: rgba(216, 169, 27, 0.81);\n}\n.grid figcaption h5 {\n\tmargin: 0;\n\tpadding-top: 0px;\n\tpadding-left: 20px;\n\tpadding-bottom: 5px;\n\tcolor: #fff;\n\tfont-weight: 700;\n\ttext-align: left;\n\tletter-spacing: 1px;\n\tfont-size:24px;\n}\n.grid figcaption a {\n\ttext-align: left;\n\tpadding: 5px 10px;\n\tmargin-left: 20px;\n\tdisplay: inline-block;\n\tbackground: #2f2f2f;\n\tcolor: #F27E00;\n\tfont-size: 13px;\n\tbackground: #fff;\n}\n \n.overlay figure {\n\toverflow: hidden;\n}\n.overlay figure img {\n\t-webkit-transition: -webkit-transform 0.4s;\n\t-moz-transition: -moz-transform 0.4s;\n\ttransition: transform 0.4s;\n}\n.no-touch .overlay figure:hover img, .overlay figure.cs-hover img {\n\t-webkit-transform: translateY(-30px);\n\t-moz-transform: translateY(-30px);\n\t-ms-transform: translateY(-30px);\n\ttransform: translateY(-30px);\n}\n.overlay figcaption {\n\theight: 100%;\n\twidth: 100%;\n\ttop: auto;\n\tbottom: 0;\n\topacity: 0;\n\t-webkit-transform: translateY(100%);\n\t-moz-transform: translateY(100%);\n\t-ms-transform: translateY(100%);\n\ttransform: translateY(100%);\n\t-webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;\n\t-moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;\n\ttransition: transform 0.4s, opacity 0.1s 0.3s;\n}\n.no-touch .overlay figure:hover figcaption, .overlay figure.cs-hover figcaption {\n\topacity: 1;\n\t-webkit-transform: translateY(0px);\n\t-moz-transform: translateY(0px);\n\t-ms-transform: translateY(0px);\n\ttransform: translateY(0px);\n\t-webkit-transition: -webkit-transform 0.4s, opacity 0.1s;\n\t-moz-transition: -moz-transform 0.4s, opacity 0.1s;\n\ttransition: transform 0.4s, opacity 0.1s;\n}\n.overlay figcaption a {\n\tposition: absolute;\n\t/* top: 10px; */\n\tbottom: 10px;\n\tright: 30px;\n\tbackground: #000;\n\tcolor: #fff;\n\tborder-radius: 0px;\n\tpadding: 6px 15px;\n}\n.div-pattern2 {\n\tbackground: url('../img/div-pattern2.png') top left repeat-x;\n\theight: 30px;\n\twidth: 100%;\n\tdisplay: block;\n}\n.div-pattern {\n\tbackground: url('../img/div-pattern.png') top left repeat-x;\n\theight: 30px;\n\twidth: 100%;\n\tdisplay: block;\n}\n/* ==========================================\n   MEDIA QUERIES\n   ======================================== */\n@media screen and (max-width:1050px), screen and (max-device-width:1050px) {\n\tbody .header {\n\t\tbackground-attachment: scroll;\n\t}\n}\n\n@media only screen and (min-device-width:768px) and (max-device-width : 1024px) and (orientation : portrait) {\n\t.header {\n\t\tbackground-attachment: scroll;\n\t}\n}\n\n@media screen and (max-width:769px) {\n\t#headerwrap h1 {\n\t\tfont-size: 80px;\n\t}\n\t#headerwrap p {\n\t\tfont-size: 30px;\n\t\tline-height: 38px;\n\t}\n}\n@media screen and (max-width:480px) {\n\t#headerwrap h1 {\n\t\tfont-size: 34px;\n\t}\n\t#headerwrap p {\n\t\tmargin-top:30px;\n\t\tfont-size: 20px;\n\t}\n\t.navbar-nav {\n\t\tfloat: right !important;\n\t\twidth: 100%;\n\t\tmargin: 10px auto;\n\t}\n\t#team img {\n\t\tmargin-top:30px;\n\t}\n}\n" }} />
        <div id="navbar-main"> 
          {/* Fixed navbar */}
          <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <div className="pull-left logo">
                  <a className href="#home"><img src="assets/img/logo.png" /></a>
                </div>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav pull-right">
                  <li><a href="#home-section" className="smoothScroll">Welcome</a></li>
                  <li> <a href="#services" className="smoothScroll">We Offer</a></li>		  
                  <li> <a href="#about" className="smoothScroll"> Our Shop</a></li>
                  <li> <a href="#portfolio" className="smoothScroll"> Special</a></li>
                  <li> <a href="#team" className="smoothScroll"> Chef Team</a></li>
                  <li> <a href="#contact" className="smoothScroll"> Get In Touch</a></li>
                </ul>
              </div>
              {/*/.nav-collapse */} 
            </div>
          </div>
        </div>
        {/* ==== HEADERWRAP ==== */}
        <div id="home-section">
          <div id="headerwrap" name="home">
            <header className="clearfix tb"> 
              <div className="tb-cell text-center">
                <i className="fa fa-heart-o icon" />
                <h1>Coffee - Makes you Love</h1>
                <p>A Lot Can Happen Over Coffee, Its Awesome!!! </p>
                <a href="#portfolio" className="smoothScroll btn btn-lg">Today's Special</a> 
              </div>
            </header>
          </div>
        </div>
        <div className="div-pattern2" />
        {/* /headerwrap */} 
        {/* ==== SERVICES ==== */}
        <div id="services" name="services">
          <div className="container">
            <div className="row">
              <h2 className="centered">WHAT WE OFFER</h2>
              <hr />
              <div className="col-lg-8 col-lg-offset-2">
                <p className="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
              </div>
              <div className="col-lg-4 callout"> <i className="fa fa-cubes fa-3x" />
                <h3>COFFEE</h3>
                <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu vim oratio conclusionemque, vel at errem nominavi delicatissimi.</p>
              </div>
              <div className="col-lg-4 callout"> <i className="fa fa-flask fa-3x" />
                <h3>TEA</h3>
                <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu vim oratio conclusionemque, vel at errem nominavi delicatissimi.</p>
              </div>
              <div className="col-lg-4 callout"> <i className="fa fa-life-ring fa-3x" />
                <h3>CAKES</h3>
                <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu vim oratio conclusionemque, vel at errem nominavi delicatissimi.</p>
              </div>
            </div>
            {/* row */} 
          </div>
        </div>
        {/* container */} 
        <section className="hero-section section">  
          <div className="container">
            <div className="highlight tb">
              <div className="tb-cell">
                <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui!<br />
                  erant bonorum albucius et per, ei sapientem accommodare est. Saepe dolorum constituam ei!!</p>
              </div>
              <div className="links tb-cell">
                <div className="reservation-link">
                  <a href="#" className="btn reservation-btn">RESERVATION</a> 
                </div> 
              </div>
            </div>
          </div>
        </section>
        <div className="div-pattern" />
        {/* ==== ABOUT ==== */}
        <div id="about" name="about">
          <div className="container">
            <div className="row white">
              <h2 className="centered">Our Shop</h2>
              <hr />
              <div className="col-md-6"> <img className="img-responsive" src="assets/img/about/about1.jpg" align /> </div>
              <div className="col-md-6">
                <h3>Who we are</h3>
                <p>Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est. Saepe dolorum constituam ei vel. Te sit malorum ceteros repudiandae, ne tritani adipisci vis.</p>
                <h3>Why choose us?</h3>
                <p>Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est. Saepe dolorum constituam ei vel.</p>
              </div>
            </div>
            {/* row */} 
          </div>
        </div>
        {/* container */} 
        {/* ==== PORTFOLIO ==== */}
        <div id="portfolio" name="portfolio">
          <div className="container">
            <div className="row">
              <h2 className="centered">What Special</h2>
              <hr />
              <div className="col-lg-8 col-lg-offset-2 centered">
                <p className="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
              </div>
            </div>
            {/* /row */}
            <div className="container">
              <div className="row"> 
                {/* PORTFOLIO IMAGE 1 */}
                <div className="col-md-4 ">
                  <div className="grid overlay">
                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio01.jpg" alt />
                      <figcaption>
                        <h5>Coco Cake</h5>
                        <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                      {/* /figcaption */} 
                    </figure>
                    {/* /figure */} 
                  </div>
                  {/* /grid-overlay */} 
                </div> 
                <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Rose Cake</h4>
                      </div>
                      <div className="modal-body">
                        <p><img className="img-responsive" src="assets/img/portfolio/folio01-preview.jpg" alt /></p>
                        <p>Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. </p> 
                      </div> 
                    </div>
                    {/* /.modal-content */} 
                  </div>
                  {/* /.modal-dialog */} 
                </div>
                {/* /.modal */} 
                {/* PORTFOLIO IMAGE 2 */}
                <div className="col-md-4">
                  <div className="grid overlay">
                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio02.jpg" alt />
                      <figcaption>
                        <h5>Green Tea</h5>
                        <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                      {/* /figcaption */} 
                    </figure>
                    {/* /figure */} 
                  </div>
                  {/* /grid-overlay */} 
                </div>
                {/* PORTFOLIO IMAGE 3 */}
                <div className="col-md-4">
                  <div className="grid overlay">
                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio03.jpg" alt />
                      <figcaption>
                        <h5>Cappuccino</h5>
                        <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                      {/* /figcaption */} 
                    </figure>
                    {/* /figure */} 
                  </div>
                  {/* /grid-overlay */} 
                </div>
              </div>
              {/* /row */} 
              {/* PORTFOLIO IMAGE 4 */}
              <div className="row">
                <div className="col-md-4 ">
                  <div className="grid overlay">
                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio04.jpg" alt />
                      <figcaption>
                        <h5>Green Tea</h5>
                        <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                      {/* /figcaption */} 
                    </figure>
                    {/* /figure */} 
                  </div>
                  {/* /grid-overlay */} 
                </div>
                {/* PORTFOLIO IMAGE 5 */}
                <div className="col-md-4">
                  <div className="grid overlay">
                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio05.jpg" alt />
                      <figcaption>
                        <h5>Cookies</h5>
                        <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                      {/* /figcaption */} 
                    </figure>
                    {/* /figure */} 
                  </div>
                  {/* /grid-overlay */} 
                </div>
                {/* PORTFOLIO IMAGE 6 */}
                <div className="col-md-4">
                  <div className="grid overlay">
                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio06.jpg" alt />
                      <figcaption>
                        <h5>Cake</h5>
                        <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                      {/* /figcaption */} 
                    </figure>
                    {/* /figure */} 
                  </div>
                  {/* /grid-overlay */} 
                </div>
                {/* /col */} 
              </div>
              {/* /row */} 
            </div>
            {/* /row */} 
          </div>
        </div>
        {/* /container */} 
        {/* ==== TEAM MEMBERS ==== */}
        <div id="team" name="team">
          <div className="container">
            <div className="row centered">
              <h2 className="centered">Meet Our Chef</h2>
              <hr />
              <div className="col-lg-8 col-lg-offset-2 centered">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                <br />
              </div>
              <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team01.jpg" height="120px" width="120px" alt />
                <h4><strong>Rennyl</strong></h4>
                <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                <a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> </div>
              <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team02.jpg" height="120px" width="120px" alt />
                <h4><b>Kristean</b></h4>
                <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                <a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> </div>
              <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team03.jpg" height="120px" width="120px" alt />
                <h4><b>Angilica</b></h4>
                <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                <a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> </div>
              <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team04.jpg" height="120px" width="120px" alt />
                <h4><b>Shannon</b></h4>
                <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                <a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> </div>
            </div>
          </div>
          {/* row */} 
        </div>
        {/* container */} 
        {/* ==== CONTACT ==== */}
        <div id="contact" name="contact">
          <div className="container">
            <div className="row">
              <h2 className="centered">Get In Touch</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-md-7">
                <strong>Please give us your feedback!</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                <form id="contact" method="post" className="form" role="form">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                    </div>
                    <div className="col-md-12 form-group">
                      <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea className="form-control" id="message" name="message" placeholder="Message" rows={5} defaultValue={""} />             
                      <button className="btn btn-lg pull-left" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
                {/* form */} 
              </div>
              <div className="col-md-5">
                <i className="fa fa-map-marker fa-2x" />
                <strong>Coffee Shop</strong>
                <p>321 Awesome Street<br />
                  New York, NY 12345</p>
                <br /> 
                <i className="fa fa-envelope-o fa-2x" />
                <p>info@companyname.com</p>
                <br /> 
                <i className="fa fa-phone fa-2x" />
                <p> +1 235 123 1234</p>
              </div>
            </div>
            {/* row */} 
          </div>
        </div>
        {/* container */}
        <div id="footerwrap">
          <div className="container">
            <div className="row">
              <div className="col-md-8"> <span className="copyright">Copyright © 2015. Design by <a href="http://www.webthemez.com">Webthemez</a></span> </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li><a href="#"><i className="fa fa-twitter" /></a> </li>
                  <li><a href="#"><i className="fa fa-facebook" /></a> </li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a> </li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap core JavaScript
    ================================================== */} 
        {/* Placed at the end of the document so the pages load faster */} 
      </div>
    );
  }
});
