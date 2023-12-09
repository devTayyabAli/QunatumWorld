import React from "react";
import { Image } from "react-bootstrap";
import leftSide from "../../assets/images/leftSide.png";
import rightSide from "../../assets/images/rightSide.png";
import {SiVirustotal} from "react-icons/si"
import {PiRadioactiveLight} from "react-icons/pi"

const TeamBusiness = ({ totalTeamBusiness,todayTeamBusiness }) => {
  return (
    <>
      <div className="TeamSizeWidgetMain TeamBusinessMain">
        <h6>Team Business </h6>
        {/* <div className="WidgetMainFlex">
          <div className="WidgetMainLeft">
            <span>Left</span>
            <Image src={leftSide} alt="Image description" fluid={true} />
          </div>
          <div className="WidgetMainRight">
            <Image src={rightSide} alt="Image description" fluid={true} />
            <span>Right</span>
          </div>
        </div> */}
        <div className="WidgetMainFlexItem">
          <div className="ItemLeft">
            <div className="">
              {/* <Image src={totalChart} alt="Image description" fluid={true} /> */}
              <SiVirustotal/>
              <span>Total Team Business : {totalTeamBusiness}</span>
            </div>
            <div className="">
              {/* <Image src={EditSquare} alt="Image description" fluid={true} /> */}
              <PiRadioactiveLight/>
              <span>Today Team Business : {todayTeamBusiness}</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TeamBusiness;
