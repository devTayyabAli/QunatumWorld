import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Image } from "react-bootstrap";
import copyWhite from "../../assets/images/copyWhite.png";
import { useSelector } from "react-redux";

const AffiliateLeftWidget = () => {
  const user = useSelector((state) => state.UserAuth.userId);

  const LeftCopyAddressRef = useRef(null);
  const RightCopyAddressRef = useRef(null);
  let url = window.location;
  // console.log("LOaction",url);

  // const RightCopyAddressRef = useRef(null);
  const LeftCopyAddressHandler = () => {
    const text = `${url.origin}/Register_main?referrallink=${user}`;
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const RightCopyAddressHandler = () => {
    const text = `${url.origin}/Register_main?referrallink=${user}&position=Right`;

    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  const linkurl = async (value, next) => {
    window.open(
      `${url.origin}/Register_main?referrallink=${user}&position=${"left"}`,
    );
    // window.open(`https://nftxpress.club/Register_main?referrallink=${user}&position=Left`)

    next();
  };

  return (
    <>
      <div className="AffiliateMain rcr1">
        <h6 style={{ fontSize: "20px" }}>Affiliate Link </h6>

        <div className="CopyText">
          <div className="flexbutton">
            <a
              target="_blank"
              href={`http://quantumworld.club/Register_main?referrallink=${user}`}
              className="myreferal-link"
            >
              {" "}
               Referral Link
            </a>
            <button
              onClick={LeftCopyAddressHandler}
              className="icon-copy"
              style={{
                width: "50px",
                marginLeft: "0px",
                background: "rgb(32 112 16 / 0%)",
                border: "none",
              }}
            >
              {" "}
              <Image src={copyWhite} alt="Image description" fluid={true} />
            </button>
          </div>

          {/* <div className="flexbutton">
            <a
              target="_blank"
              href={`http://quantumworld.club/Register_main?referrallink=${user}`}
              className="myreferal-link"
            >
              {" "}
              Right Referral Link
            </a>
            <button
              onClick={RightCopyAddressHandler}
              className="iconcopy"
              style={{
                width: "50px",
                marginLeft: "0px",
                background: "rgb(32 112 16 / 0%)",
                border: "none",
              }}
            >
              {" "}
              <Image src={copyWhite} alt="Image description" fluid={true} />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AffiliateLeftWidget;
