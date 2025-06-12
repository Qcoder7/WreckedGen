export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url('/background.jpg')",
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      <div className="container">
        <div className="row">
          {/* Portfolio Image 1 */}
          <div className="col-md-4">
            <p>
              <img
                className="img-responsive"
                src="assets/img/portfolio/folio01-preview.jpg"
                alt=""
              />
            </p>
            <p>
              Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos
              porro veniam. An everti maiorum detracto mea.
            </p>
          </div>

          {/* Portfolio Image 2 */}
          <div className="col-md-4">
            <div className="grid overlay">
              <figure>
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio02.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>Green Tea</h5>
                  <a href="#myModal" className="btn btn-default" data-toggle="modal">
                    More Details
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Portfolio Image 3 */}
          <div className="col-md-4">
            <div className="grid overlay">
              <figure>
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio03.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>Cappuccino</h5>
                  <a href="#myModal" className="btn btn-default" data-toggle="modal">
                    More Details
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Portfolio Image 4 */}
        <div className="row">
          <div className="col-md-4">
            <div className="grid overlay">
              <figure>
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio04.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>Green Tea</h5>
                  <a href="#myModal" className="btn btn-default" data-toggle="modal">
                    More Details
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Portfolio Image 5 */}
          <div className="col-md-4">
            <div className="grid overlay">
              <figure>
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio05.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>Cookies</h5>
                  <a href="#myModal" className="btn btn-default" data-toggle="modal">
                    More Details
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Portfolio Image 6 */}
          <div className="col-md-4">
            <div className="grid overlay">
              <figure>
                <img
                  className="img-responsive"
                  src="assets/img/portfolio/folio06.jpg"
                  alt=""
                />
                <figcaption>
                  <h5>Cake</h5>
                  <a href="#myModal" className="btn btn-default" data-toggle="modal">
                    More Details
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team" name="team">
          <div className="container">
            <div className="row centered">
              <h2 className="centered">Meet Our Chef</h2>
              <hr />
              <div className="col-lg-8 col-lg-offset-2 centered">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
                <br />
              </div>
              <div className="col-lg-3 centered">
                <img
                  className="img img-circle"
                  src="assets/img/team/team01.jpg"
                  height="120"
                  width="120"
                  alt=""
                />
                <h4>
                  <strong>Rennyl</strong>
                </h4>
                <p>
                  Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea
                  comprehensam signifer.
                </p>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="col-lg-3 centered">
                <img
                  className="img img-circle"
                  src="assets/img/team/team02.jpg"
                  height="120"
                  width="120"
                  alt=""
                />
                <h4>
                  <b>Kristean</b>
                </h4>
                <p>
                  Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea
                  comprehensam signifer.
                </p>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="col-lg-3 centered">
                <img
                  className="img img-circle"
                  src="assets/img/team/team03.jpg"
                  height="120"
                  width="120"
                  alt=""
                />
                <h4>
                  <b>Angilica</b>
                </h4>
                <p>
                  Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea
                  comprehensam signifer.
                </p>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <div className="col-lg-3 centered">
                <img
                  className="img img-circle"
                  src="assets/img/team/team04.jpg"
                  height="120"
                  width="120"
                  alt=""
                />
                <h4>
                  <b>Shannon</b>
                </h4>
                <p>
                  Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea
                  comprehensam signifer.
                </p>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>{" "}
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" name="contact">
          <div className="container">
            <div className="row">
              <h2 className="centered">Get In Touch</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-md-7">
                <strong>Please give us your feedback!</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
                <form id="contact" method="post" className="form" role="form">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="5"
                      ></textarea>
                      <button className="btn btn-lg pull-left" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <i className="fa fa-map-marker fa-2x"></i>
                <strong>Coffee Shop</strong>
                <p>
                  321 Awesome Street
                  <br />
                  New York, NY 12345
                </p>

                <br />
                <i className="fa fa-envelope-o fa-2x"></i>
                <p>info@companyname.com</p>

                <br />
                <i className="fa fa-phone fa-2x"></i>
                <p>+1 235 123 1234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div id="footerwrap">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <span className="copyright">
                  Copyright &copy; 2015. Design by{" "}
                  <a href="http://www.webthemez.com">Webthemez</a>
                </span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
