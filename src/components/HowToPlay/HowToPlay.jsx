import React from "react";
import Play from "../../assets/images/howtoPlay.png";

const HowToPlay = () => {
  return (
    <div className="h-100 w-100 my-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <div className="px-2 px-sm-4 px-md-5 text-center">
        <h1 className="display-4 mb-4 mb-sm-5">How to Play</h1>
        <div className="my-4 my-sm-5">
          <img
            src={Play}
            alt="play"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
