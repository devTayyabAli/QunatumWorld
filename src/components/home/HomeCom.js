import React, { useEffect, useState } from "react";
import Pricewidget from "./Pricewidget";
import TeamSizeWidget from "./TeamSizeWidget";
import TeamBusiness from "./TeamBusiness";
import MyReferralWidget from "./MyReferralWidget";
import TotalEarningWidget from "./TotalEarningWidget";
import AffiliateLeftWidget from "./AffiliateLeftWidget";
// import AffiliateRightWidget from "./AffiliateRightWidget";
import { Col, Row } from "react-bootstrap";
import scrollreveal from "scrollreveal";
import { API } from "../../API/Api";
import { useDispatch } from "react-redux";
import { userDetailed } from "../../redux/Slices/NFTSlice";
import AllTotal from "./AllTotal";

const HomeCom = () => {
  const [userDetail, setUserDetail] = useState({});


  const storedData = localStorage.getItem('userData');
  const parsedData = JSON.parse(storedData);
  let uId = parsedData.uid_output

  const dispatch = useDispatch();
  const DashboardAPI = async () => {
    try {
      let res = await API.get(`/userDashboard?uid=${uId}`);
      console.log("response_time", res.data.data[0][0]);

      res = res.data.data[0][0];
      setUserDetail(res);
      dispatch(userDetailed(res));
    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  useEffect(() => {
    DashboardAPI();

    const sr = scrollreveal({
      origin: "top",
      distance: "15px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `.HomeMian .colMb
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  // sessionStorage.setItem('Id', userDetail.uid);
  return (
    <>
      {/* home main div  */}
      <div className="HomeMian">

        <Row className="RowMb">
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <Pricewidget nftpkg={userDetail.CurrentPackage} />
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <TeamSizeWidget
              LeftActive={userDetail.TotalActiveTeam}

            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <TeamBusiness
              totalTeamBusiness={userDetail.totalTeamBusiness}
              todayTeamBusiness={userDetail.todayTeamBusiness}

            />
          </Col>
        </Row>
        <Row className="RowMb1">
          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <MyReferralWidget
              TotalReferral={userDetail.TotalReferral}
              TotalActiveReferral={userDetail.TotalActiveReferral}

            />
          </Col>

          {/* referal div here  */}

          <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <AffiliateLeftWidget />
          </Col>

          {/* <Col xs={12} sm={12} md={12} lg={4} className="colMb mb-lg-0 mb-md-3">
            <ActivationFund nftpkg={userDetail.AdminFund} />
          </Col> */}
          <br></br>
          <br></br>

        </Row>
        <br />

      </div>

      {/* home page second div flex section  */}
      <div className="HomeMian pb-3 mb-3 flexz">
        <Row className="RowMb">
          <Col xs={12} sm={12} md={12} lg={6} className="colMb mb-lg-0 mb-md-3">
            <TotalEarningWidget
              withdrawl={userDetail.WithDrawal_Amount}
              netbalance={userDetail.Net_Balance}
              totalincome={userDetail.TotalIncome}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="colMb mx-auto">
            <AllTotal userDetail={userDetail} />
          </Col>
        </Row>

        {/* <Col xs={12} sm={12} md={12} lg={6} className="colMb mx-auto">
            <AllTotal />
          </Col> */}
        {/* <Col xs={12} sm={12} md={6} className="colMb">
            <AffiliateLeftWidget />
          </Col> */}

        {/* <Col xs={12} sm={12} md={12} lg={6} className="colMb mx-auto">
            <TimeWidget timeToQualify={timeToQualify} timetoearn={timeToEarn} />
          </Col> */}

      </div>
    </>
  );
};

export default HomeCom;
