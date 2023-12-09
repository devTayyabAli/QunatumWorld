import { Link } from "react-router-dom";
import "../HeroSection/HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#090d0a", color: "white" }}
      >
        <div className="row">
          <div className="col-md-6" style={{ paddingTop: "11rem" }}>
            <div className="px-4 py-6">
              <h1 className="display-4">
                Shaping Tomorrow's <span className="text-success">NFTS</span>{" "}
                Universe
              </h1>
              <p className="lead mt-3">Transforming NFTs into Masterpieces.</p>
              <div className="mt-4">
                <a
                  href="/Login_main"
                  className="btn btn-success btn-lg mr-3"
                  style={{
                    background: "#CBFA46",
                    color: "black",
                    marginRight: "1rem",
                  }}
                >
                  Sign In
                </a>
                <Link
                  to="/Register_main"
                  className="btn btn-success btn-lg mr-3"
                  style={{ background: "#CBFA46", color: "black" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/08/AI.jpg.webp"
              alt="random"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
