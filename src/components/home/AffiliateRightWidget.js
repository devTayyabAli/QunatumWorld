import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const AffiliateRightWidget = () => {
  const user = useSelector((state) => state.UserAuth.userId);

  const CopyAddressRef = useRef(null);
  const CopyAddressHandler = () => {
    const text = CopyAddressRef.current.value;
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  return (
    <>
      <div className="AffiliateMain">
        <h6>Affiliate Link Right</h6>
        <div className="CopyText">
          <input
            type="text"
            value={`http://quantumworld.club/Register_main?referrallink=${user}&position=Right`}
            // value={`https://nftxpress.club/Register_main?referrallink=${user}&position=Right`}

            readOnly
            ref={CopyAddressRef}
          />
          <button onClick={CopyAddressHandler}>Copy</button>
        </div>
      </div>
    </>
  );
};

export default AffiliateRightWidget;
