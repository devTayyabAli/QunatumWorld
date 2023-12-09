import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import "./Coupon.css";
import { API } from "../../API/Api";
import BgLayout from "../sharecomponent/BgLayout";
import { useDispatch, useSelector } from "react-redux";

function Adjestment() {
  const user = useSelector((state) => state.UserAuth.userId);
  const [userDetail, setUserDetail] = useState("");
  const DashboardAPI = async () => {
    try {
      let res = await API.get(`/getDashboardValues?id=${user}`);
      console.log("response time", res.data.data);
      res = res.data.data[0];
      setUserDetail(res);
    } catch (e) {
      console.log("Error While Fatch Dashboard API", e);
    }
  };

  useEffect(() => {
    DashboardAPI();
  });

  return (
    <div>
      <Layout>
        <BgLayout>
          <div className="col-md-12" style={{ display: "flex" }}>
            <div className="Col-md-4 ddl LADChatWidgetMain rcr1">
              <div className="LADChatText">
                <div className="">
                  <h6 className="Adjestment">Total Investment- {}</h6>
                  <h6 className="Adjestment">
                    {userDetail.TotalAdjustmentAmount}
                  </h6>
                </div>
              </div>
            </div>
            <div className="Col-md-4 ddl LADChatWidgetMain rcr1">
              <div className="LADChatText">
                <div className="">
                  <h6 className="Adjestment"> Adjestment- {}</h6>
                  <h6 className="Adjestment">{userDetail.AdjustmentAmount}</h6>
                </div>
              </div>
            </div>
            <div className="Col-md-4 ddl LADChatWidgetMain rcr1">
              <div className="LADChatText">
                <div className="">
                  <h6 className="Adjestment">
                    Remaining- {}
                  </h6>
                  <h6 className="Adjestment">
                    {userDetail.AvailbleAdjustmentAmount}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </BgLayout>
      </Layout>
    </div>
  );
}

export default Adjestment;
