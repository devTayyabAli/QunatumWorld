import React, { useEffect, useState } from "react";
import { API } from "../../API/Api";
import Layout from "../Layout";
import { useSelector } from "react-redux";

function ContestReward() {
    const userDetail = useSelector((state) => state.nft.userDetail);
    const user = useSelector((state) => state.UserAuth.userId)
    const [dataArray, setdataArray] = useState({});

    const userDetailData = async () => {
        let responce = await API.post("/getContestRewardReport", {
            uid: user,
          });
      console.log('DashboardRewarForUser', responce.data.data[0])
      setdataArray(responce.data.data[0])
    }
    useEffect(() => {
      userDetailData()
  
  
    }, []);

  return (
    <div>
      <Layout>
        <div className="UserDetailsMain contest_data">
        <div className="UsersProfiles resp">
            <div className="circulProfile">
            </div>
            <div className="ProfileDetails">
              <h6> Contest</h6>
              

              <h5>Phuket Contest & $600</h5>
              <h4>{dataArray?.RewardQualify == "1"  ?
              <>Qualify</>:
                <>Not Qualify</>
                }</h4>
            </div>
          </div>
          <div className="userskil dash_top">
            <div className="userskilTit">
              <span>Phuket Contest</span>
              {/* <span>Duration : 7th May to 6th June</span> */}
              <span>Duration : 1st July to 30th September </span>
            </div>
            {/* <div className="LegOneSkill">
              <h6 className="Matching_business">Direct Business</h6>
              <div className="LegOneSkillProgress">
                <div
                  className="userskilOne"
                  style={{
                    backgroundColor: `${
                      (dataArray?.totalnextrewardbusiness /
                        dataArray?.Nextreqreward) *
                        100 >=
                      100
                        ? "rgba(255, 255, 255, 0.46)"
                        : "rgba(83, 80, 239, 0.16)"
                    }`,
                  }}
                >
                  <div
                    className="userskilFill text-white"
                    style={{
                      width: `100%`,
                      opacity: "1",
                    }}
                  >
                    <span className="Out_of ms-5 text-white">
                      {dataArray?.directbussiness} out of{" "} 5000
                      
                    </span>{" "}
                  </div>
                  
                </div>
              </div>
            </div> */}
            <div className="LegOneSkill">
              <h6 className="Matching_business">Matching Business</h6>
              <div className="LegOneSkillProgress">
                <div className="userskilOne">
                  <div
                    className="userskilFill text-white "
                    style={{
                      width: `100%`,
                      opacity: "1",
                    }}
                  >
                    <span className="Out_of ms-5 text-white">
                      {dataArray?.matchingbussiness} out of{" "}{dataArray?.Req_matching}
                      {/* {dataArray?.matchingbussiness_percent} */}
                    </span>
                  </div>
                  {/* <div className="userskilOneText">Max. 800</div> */}
                </div>
              </div>
            </div>

            <div className="LegOneSkill">
              <h6 className="Matching_business">Rank</h6>
              <div className="LegOneSkillProgress">
                <div className="userskilOne">
                  <div
                    className="userskilFill text-white "
                    style={{
                      width: `100%`,
                      opacity: "1",
                    }}
                  >
                    <span className="Out_of ms-5 text-white">
                      {dataArray?.rank_name}
                      {/* {dataArray?.matchingbussiness_percent} */}
                    </span>
                  </div>
                  {/* <div className="userskilOneText">Max. 800</div> */}
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ContestReward;
