import React from "react";
import HeadreComp from "../Comman-File/HeaderComp";
import FooterComp from "../Comman-File/FooterComp";

function ContactCom() {
  const handleSubmit = () => {
    document.getElementById("contact-form").submit();
  };

  return (
    <>
      <HeadreComp />
      <h3  className="text-center pt-4">This is a Conatact-Us page</h3>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="form-label">
                      Your name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="form-label">
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows={2}
                      className="form-control md-textarea"
                      defaultValue={""}
                    />
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left">
              <a
                data-mdb-ripple-init
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Send
              </a>
            </div>
            <div className="status" />
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FooterComp />
    </>
  );
}

export default ContactCom;
