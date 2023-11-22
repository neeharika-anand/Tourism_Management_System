import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  //Footer Section
  return (
    <footer className={classes.footer}>
      <div className="my-5">
        <div
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#679cc159" }}
        >
          <div
            className="justify-content-between p-4 text-center"
            style={{ backgroundColor: "#ffffff", color: "#679cc1" }}
          >
            <div>
              <span style={{ marginRight: "10px" }}>Get connected with us on social networks :  </span>

              <a href="/" className="text-white me-4">
                <FaFacebookF style={{ color: "#679cc1" }} />
              </a>
              <a href="/" className="text-white me-4">
                <FaTwitter style={{ color: "#679cc1" }} />
              </a>
              <a href="/" className="text-white me-4">
                <FaInstagram style={{ color: "#679cc1" }} />
              </a>
            </div>

          </div>

          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Holiday Dreams</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                  />
                  <p>
                    You can regularly visit our website for Exciting Updates and Packages . To avail more , you can register to our website .
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-40">

                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                  />
                  <p><i className="fas fa-home mr-3"></i> Bangalore, KA 560085, IN</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fas fa-phone mr-3"></i> +91 9877896543</p>
                  <p><i className="fas fa-print mr-3"></i> +91 1234327890</p>
                </div>

              </div>

            </div>
          </section>

        </div>


      </div>

      <p className={classes.copyright}>
        Copyright © 2023 All rights reserved | Holiday Dreams
      </p>
    </footer>
  );
};

export default Footer;