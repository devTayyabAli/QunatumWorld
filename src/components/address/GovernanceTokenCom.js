import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import BgLayout from "../sharecomponent/BgLayout";
import copytext from "../../assets/images/copytext.png";
import toast from "react-hot-toast";

const GovernanceTokenCom = () => {
  const CopyAddressRef = useRef(null);
  const CopyAddressHandler = () => {
    const text = "0x753ad9B6e175761bBc058b2192728a0F0b5d0275";
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Contract</h6>
        </div>
        <div className="CopyAddressMain">
          <span>Vision Token Address:</span>
          <span className="addressText" ref={CopyAddressRef}>
          0x753ad9B6e175761bBc058b2192728a0F0b5d0275
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={CopyAddressHandler}
          />
        </div>
      </BgLayout>
      <div className="bg_usser_main"></div>
    </>
  );
};

export default GovernanceTokenCom;
