import React from "react";
import BSC from "../../assets/images/partners/bsc.png";
import MetaMask from "../../assets/images/partners/metamask.png";
import PancakeSwap from "../../assets/images/partners/pancake.png";
import Poocoin from "../../assets/images/partners/poocoin.png";
import TrustWallet from "../../assets/images/partners/trust-wallet.png";
import Dextool from "../../assets/images/partners/dextool.png";
import Frame from "../../assets/images/frame.png";

const Partners = () => {
  const data = [
    {
      id: 1,
      logo: MetaMask,
    },
    {
      id: 2,
      logo: BSC,
    },
    {
      id: 3,
      logo: PancakeSwap,
    },
    {
      id: 4,
      logo: Dextool,
    },
    {
      id: 5,
      logo: TrustWallet,
    },
    {
      id: 6,
      logo: Poocoin,
    },
  ];

  return (
    <div className="h-auto w-100 py-5" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <div className="px-2 px-md-4 px-lg-5">
        <h1 className="text-center display-4 mb-4 mb-sm-5">PARTNERS</h1>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
          {data.map((item, index) => (
            <div className="col" key={index}>
              <div className="position-relative">
                <img src={Frame} alt="frame" className="w-100" />
                <div className="position-absolute top-0 start-0 d-flex justify-content-center align-items-center h-100 w-100">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="img-fluid w-50 w-sm-25 p-1"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
