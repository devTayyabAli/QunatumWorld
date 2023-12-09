import React from "react";
import { Image } from "react-bootstrap";
import leftSide from "../../assets/images/leftSide.png";
import rightSide from "../../assets/images/rightSide.png";
import {SiVirustotal} from "react-icons/si"
import {PiRadioactiveLight} from "react-icons/pi"

const TeamSizeWidget = ({  LeftActive }) => {
  return (
    <>
      <div className="TeamSizeWidgetMain">
        <h6>Team Size</h6>
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
              {/* <Image src={SiVirustotal} alt="Image description" fluid={true} /> */}
              <SiVirustotal/>
              <span>Total Team : {LeftActive}</span>
            </div>
            {/* <div className="">

              <PiRadioactiveLight/>
              <span>Active : {LeftActive}</span>
            </div> */}
          </div>
          {/* <div className="ItemRight">
            <div className="">

              <SiVirustotal/>
              <span>Total : {Right}</span>
            </div>
            <div className="">
            <PiRadioactiveLight/>
              <span>Active : {RightActive}</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TeamSizeWidget;
