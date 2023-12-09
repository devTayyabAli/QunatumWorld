import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import BgLayout from "../sharecomponent/BgLayout";
import copytext from "../../assets/images/copytext.png";
import toast from "react-hot-toast";

const NftTokenComp = () => {
  const GLEBANFTRef = useRef(null);
  const WASSERNFTRef = useRef(null);
  const ZRAKNFTRef = useRef(null);
  const BRANNBILNFTRef = useRef(null);
  const FOUDRENFTRef = useRef(null);
  const GLEBANFTRefHandler = () => {
    const text = '0x339cABcB2D0941ce838923e6d5AAd16F2C56d2Cb'
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const WASSERNFTRefHandler = () => {
    const text = '0x6268a1C311cb70260264Ef0A5F04AaF8cb908421';
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const ZRAKNFTRefHandler = () => {
    const text = '0x1734336969069801cF5d6168B7b8F0EbA9d892D5'
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const BRANNBILNFTRefHandler = () => {
    const text = '0xf9Cdf1Fe2FDb6A4FAEb57Bd9fAb729aF6f9e6527'
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const FOUDRENFTRefHandler = () => {
    const text = '0xDd3F4e5B7B5264d66FA510dA6f042D47F10eb053'
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>NFT Address</h6>
        </div>
        <div className="CopyAddressMain">
          <span>GLEBA NFT:</span>
          <span className="addressText" ref={GLEBANFTRef}>
          0x339cABcB2D0941ce838923e6d5AAd16F2C56d2Cb
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={GLEBANFTRefHandler}
          />
        </div>
        <div className="CopyAddressMain">
          <span>WASSER NFT:</span>
          <span className="addressText" ref={WASSERNFTRef}>
          0x6268a1C311cb70260264Ef0A5F04AaF8cb908421
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={WASSERNFTRefHandler}
          />
        </div>
        <div className="CopyAddressMain">
          <span>ZRAK NFT:</span>
          <span className="addressText" ref={ZRAKNFTRef}>
          0x1734336969069801cF5d6168B7b8F0EbA9d892D5
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={ZRAKNFTRefHandler}
          />
        </div>
        <div className="CopyAddressMain">
          <span>BRANNBIL NFT:</span>
          <span className="addressText" ref={BRANNBILNFTRef}>
          0xf9Cdf1Fe2FDb6A4FAEb57Bd9fAb729aF6f9e6527
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={BRANNBILNFTRefHandler}
          />
        </div>
        <div className="CopyAddressMain">
          <span>FOUDER NFT:</span>
          <span className="addressText" ref={FOUDRENFTRef}>
          0xDd3F4e5B7B5264d66FA510dA6f042D47F10eb053
          </span>
          <Image
            src={copytext}
            alt="Image description"
            fluid={true}
            onClick={FOUDRENFTRefHandler}
          />
        </div>
      </BgLayout>
      <div className="bg_usser_main"></div>
    </>
  );
};

export default NftTokenComp;
