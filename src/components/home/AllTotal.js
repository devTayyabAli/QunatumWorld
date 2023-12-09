import React from "react";
import Countdown from "react-countdown";
import RunningClock from "./RunningClock";

const AllTotal = ({userDetail}) => {



  return (
    <>
      <div className="all-total-main">
        <h4>Income Report</h4>
        <div className="all-total-outer">
          <h5>Direct Income</h5>
          <span className="bar2"></span>
          <p>$ {userDetail.Direct_Income} </p>
          {/* <p>$ 0 </p> */}

        </div>
        <div className="all-total-outer">
          <h5>Level Income</h5>
          <span className="bar2"></span>
          <p>$ {userDetail.Level_Income} </p>
          {/* <p>$ 0 </p> */}

        </div>
        <div className="all-total-outer">
          <h5>Max Income</h5>
          <span className="bar2"></span>
          <p>$ {userDetail.MaxIncome} </p>
          {/* <p>$ 0 </p> */}

        </div>
        <div className="all-total-outer">
          <h5>Roi Income</h5>
          <span className="bar2"></span>
          <p>$ {userDetail.Roi_Income} </p>
          {/* <p>$ 0 </p> */}

        </div>
        <div className="all-total-outer">
          <h5>Total Income</h5>
          <span className="bar2"></span>
          <p>$ {userDetail.TotalIncome} </p>
          {/* <p>$ 0 </p> */}

        </div>


      </div>
    </>
  );
};

export default AllTotal;
