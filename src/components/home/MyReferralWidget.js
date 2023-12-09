import React from "react";
import { Image } from "react-bootstrap";
import leftSide from "../../assets/images/leftSide.png";
import rightSide from "../../assets/images/rightSide.png";
import {SiVirustotal} from "react-icons/si"
import {PiRadioactiveLight} from "react-icons/pi"
// import widgetchat from "../../assets/images/widgetchat.png";
// import widgetpercantege from "../../assets/images/widgetpercantege.png";

const MyReferralWidget = ({ TotalReferral,TotalActiveReferral }) => {
  return (
    <>
      <div className="TeamSizeWidgetMain MyReferralMain widthfix rcr1">
        <h6>My Referral </h6>

        <div className="WidgetMainFlexItem">
          <div className="ItemLeft">
            <div className="">
              {/* <Image src={totalChart} alt="Image description" fluid={true} /> */}
              <SiVirustotal/>
              <span>Total Referral : {TotalReferral}</span>

            </div>
            <div>
              {/* <Image src={EditSquare} alt="Image description" fluid={true} /> */}
              <PiRadioactiveLight/>
              <span>Total Active Referral : {TotalActiveReferral}</span>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MyReferralWidget;
