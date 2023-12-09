import React from "react";
import Facebook from "../../assets/images/social/facebook.png";
import Instagram from "../../assets/images/social/instagram.png";
import Pinterest from "../../assets/images/social/pinterest.png";
import Youtube from "../../assets/images/social/youtube.png";
import Telegram from "../../assets/images/social/telegram.png";

const Contact = () => {
  return (
    <div className="container my-5" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="text-3xl md:text-4xl font-bold text-uppercase">
            Let's get in touch today!
          </h1>
          <p className="text-gray-400 my-5">
            We'd love to build something great together. Let's get started and
            turn your ideas into reality. We'll get back to you within 24 hours.
          </p>
          <p className="text-yellowgreen font-bold my-5">
            support@quantumworld.club
          </p>
          <div className="d-flex align-items-center" style={{justifyContent: "space-between"}}>
            <span className="text-lg font-bold text-uppercase mr-2">
              Follow us
            </span>
            <div className="d-flex gap-2 ml-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Pinterest}
                  alt="pinterest"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Youtube}
                  alt="youtube"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Telegram}
                  alt="telegram"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div
            className="py-4 px-4 rounded-lg border"
            style={{ backgroundColor: "#3C3C3D", borderRadius: "26px" }}
          >
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-lg text-white text-sm"
                  placeholder="Name*"
                  style={{ backgroundColor: "#232325" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-lg text-white text-sm"
                  placeholder="Email*"
                  style={{ backgroundColor: "#232325" }}
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select text-white text-sm rounded-lg"
                  style={{ backgroundColor: "#232325" }}
                >
                  <option value="Your inquiry about">
                    Your inquiry about
                  </option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                  <option value="ETC">ETC</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control rounded-lg text-white text-sm"
                  rows="4"
                  placeholder="Message..."
                  style={{ backgroundColor: "#232325" }}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-outline-danger text-black font-bold">
                  Get a free consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
