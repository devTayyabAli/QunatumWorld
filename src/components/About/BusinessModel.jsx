import React from "react";
import "./BusinessModel.css";

const AboutNft = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <div className="row justify-content-center align-items-center px-4 px-md-5">
        <div className="col-12 col-md-6">
          <h4 className="text-uppercase mb-3 text-success font-weight-medium">
            Our business model
          </h4>

          <h1 className="text-2xl font-weight-bold text-uppercase">
            QUANTUMWORLD offers real crypto rewards through exciting horse racing
          </h1>

          <p className="mt-4 mt-md-8 text-muted">
            QUANTUMWORLD introduces a thrilling dimension to the NFT experience with
            its dynamic horse racing platform, where enthusiasts can engage in
            exhilarating races and earn real cryptocurrency rewards. Our
            innovative approach combines the fascination of NFTs with the
            excitement of horse racing, creating a unique and rewarding digital
            entertainment experience. Whether you're a passionate collector or
            an adrenaline-seeking racer, QUANTUMWORLD's horse racing opens the door
            to new possibilities in the world of NFTs, where your skills and
            strategies translate into real crypto earnings. Join us in this
            thrilling journey where the race isn't just about the finish line;
            it's about redefining the boundaries of digital entertainment and
            ownership.
          </p>

          {/* <div className="mt-4 mt-md-8 text-center">
            <button className="btn btn-success btn-lg">Learn more</button>
          </div> */}
        </div>

        <div className="col-12 col-md-6">
          <div className="position-relative px-4">
            <img
              className="position-absolute top-0 left-0 w-100 h-100 d-md-none" // Make the image full width on small screens (md and below)
              src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/08/nft.png.webp"
              alt="nft"
            />
            <img
              className="w-100 d-none d-md-block" // Make the image 100% width on medium and larger screens (lg and above)
              src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/08/nft.png.webp"
              alt="nft"
            />
            <img
              className="position-absolute top-0 w-75 spinner d-none d-md-block" // Make the spinner 75% width on medium and larger screens (lg and above)
              src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/08/globular.svg"
              alt="nft"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNft;
