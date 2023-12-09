import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
// import userCover from '../../assets/images/userCover.png';
import circulProfile from "../../assets/images/circulProfile.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { API } from "../../API/Api";
import ProgressBar from 'react-customizable-progressbar'
import STAR from "../../assets/RankImages/Star.png"
import JADE from "../../assets/RankImages/Jade.png"
import PEARL from "../../assets/RankImages/Pearl.png"
import SAPPHIRE from "../../assets/RankImages/Saphiira.png"
import RUBY from "../../assets/RankImages/Ruby.png"
import EMERALD from "../../assets/RankImages/emerald.png"
import DIAMOND from "../../assets/RankImages/dimond.png"
import DOUBLE_DIAMOND from "../../assets/RankImages/DOUBLE DIAMOND.png"
import TRIPLE_DIAMOND from "../../assets/RankImages/Triple Diamond.png"
import BLACK_DIAMOND from "../../assets/RankImages/Black dimond.png"
import ROYAL_DIAMOND from "../../assets/RankImages/royal diamond.png"
import CROWN_DIAMOND from "../../assets/RankImages/crown Diamond.png"
import ROYAL_CROWN_DIAMOND from "../../assets/RankImages/Royal Crown Diamond.png"
import IMPERIAL_DIAMOND from "../../assets/RankImages/Imperial Diamond.png"



const UserDetails = () => {
  const userDetail = useSelector((state) => state.nft.userDetail);
  const user = useSelector((state) => state.UserAuth.userId);

  const [dataArray, setdataArray] = useState({});

  const userDetailData = async () => {
    let responce = await API.get(`/DashboardRewarForUser?uid=${user}`,)
    console.log('DashboardRewarForUser', responce.data.data[0])
    setdataArray(responce.data.data[0])
  }
  useEffect(() => {
    userDetailData()


  }, []);
  const LastSkillFill = styled.div`
    background: rgba(255, 255, 255, 0.46);
    border-radius: 11px;
    width: ${() => ` ${dataArray?.nextpercentrewrd}%`};
    height: 35px;
  `;
  const LastSkillValue = styled.div`
    position: absolute;
    top: 24%;
    left: 50%;
    font-family: "sans-serif";
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 21px;
    color: #ffffff;
    opacity: 0.9;
  `;

  return (
    <>
      <div className="UserDetailsMain">
        {/* <div className="BgLayout_Header mb-4">
          <h6>User Details</h6>
        </div> */}
        <div className="UserDetailsHeader">
          <div className="UsersProfiles usqa">
            <div className="circulProfile">
              <Image src={dataArray?.currentrankname == "STAR" ? STAR :
                dataArray?.currentrankname == "JADE" ? JADE :
                  dataArray?.currentrankname == "PEARL" ? PEARL :
                    dataArray?.currentrankname == "SAPPHIRE" ? SAPPHIRE :
                      dataArray?.currentrankname == "RUBY" ? RUBY :
                        dataArray?.currentrankname == "EMERALD" ? EMERALD :
                          dataArray?.currentrankname == "DIAMOND" ? DIAMOND :
                            dataArray?.currentrankname == "DOUBLE DIAMOND" ? DOUBLE_DIAMOND :
                              dataArray?.currentrankname == "TRIPLE DIAMOND" ? TRIPLE_DIAMOND :
                                dataArray?.currentrankname == "BLACK DIAMOND" ? BLACK_DIAMOND :
                                  dataArray?.currentrankname == "ROYAL DIAMOND" ? ROYAL_DIAMOND :
                                    dataArray?.currentrankname == "CROWN DIAMOND" ? CROWN_DIAMOND :
                                      dataArray?.currentrankname == "ROYAL CROWN DIAMOND" ? ROYAL_CROWN_DIAMOND :
                                        dataArray?.currentrankname == "IMPERIAL DIAMOND" ? IMPERIAL_DIAMOND :
                                          circulProfile} alt="Image description" fluid={true} />
            </div>
            <div className="ProfileDetails">
              <h6> Current Rank</h6>
              <br></br>
              {/* <h5>username</h5> */}
              <h4>{`${dataArray?.currentrankname || 'NA'}`} 
              {/* ${dataArray?.currentreward} */}
              </h4>
            </div>
          </div>

          <div className="UsersProfiles resp">
            <div className="circulProfile">
              <Image src={dataArray?.Nextrankname == "STAR" ? STAR :
                dataArray?.Nextrankname == "JADE" ? JADE :
                  dataArray?.Nextrankname == "PEARL" ? PEARL :
                    dataArray?.Nextrankname == "SAPPHIRE" ? SAPPHIRE :
                      dataArray?.Nextrankname == "RUBY" ? RUBY :
                        dataArray?.Nextrankname == "EMERALD" ? EMERALD :
                          dataArray?.Nextrankname == "DIAMOND" ? DIAMOND :
                            dataArray?.Nextrankname == "DOUBLE DIAMOND" ? DOUBLE_DIAMOND :
                              dataArray?.Nextrankname == "TRIPLE DIAMOND" ? TRIPLE_DIAMOND :
                                dataArray?.Nextrankname == "BLACK DIAMOND" ? BLACK_DIAMOND :
                                  dataArray?.Nextrankname == "ROYAL DIAMOND" ? ROYAL_DIAMOND :
                                    dataArray?.Nextrankname == "CROWN DIAMOND" ? CROWN_DIAMOND :
                                      dataArray?.Nextrankname == "ROYAL CROWN DIAMOND" ? ROYAL_CROWN_DIAMOND :
                                        dataArray?.Nextrankname == "IMPERIAL DIAMOND" ? IMPERIAL_DIAMOND :
                                          circulProfile} alt="Image description" fluid={true} />
            </div>
            <div className="ProfileDetails">
              <h6> Next Rank</h6>
              <br></br>

              {/* <h5>username</h5> */}
              <h4>{dataArray?.Nextrankname}
               {/* ${dataArray?.Nextreward} */}
               </h4>
            </div>
          </div>
        </div>

<br />

        <div className="userskil">
          <div className="userskilTit">
            <span>Completed</span>
            <span>Total</span>
          </div>
          {/* <div className=" rounded-5" style={{ backgroundColor: "rgba(83, 80, 239, 0.16)" }}>
            <div className="d-flex justify-content-between py-2 rounded-5 w-50 " style={{ backgroundColor: "rgba(255, 255, 255, 0.46)" }}>


              <span className="ps-3 text-white">25000</span>
              <span className="text-white pe-3">35000</span>

            </div>
          </div> */}
          {/* <ProgressBar
            progress={60}
            radius={50}
          /> */}

          <div className="userskilOne" style={{ backgroundColor: `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100 >= 100 ? 'rgba(255, 255, 255, 0.46)' : "rgba(83, 80, 239, 0.16)"}` }}>
            {console.log('imagewith percent', `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100 >= 100 ? '100' : ""}%`)}
            <div className="userskilFill text-white" style={{
              width: `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100 >= 100 ? '100%' : `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100}%`}`,
              opacity: `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100 >= 100 ? '0.9' : "1"}`,
              backgroundColor: `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100 >= 100 ? 'transparent' : "rgba(255, 255, 255, 0.46)"}`
            }}><span className="ms-5 text-white">{dataArray?.totalnextrewardbusiness} out of {dataArray?.Nextreqreward}</span></div>
            {/* <div className="userskilOneText text-white">{dataArray?.Nextreqreward}</div> */}
          </div>

          <div className="LegOneSkill">
            <h6>Leg 1</h6>
            <div className="LegOneSkillProgress" >
              <div className="userskilOne" style={{ backgroundColor: `${(dataArray?.totalnextrewardbusiness / dataArray?.Nextreqreward) * 100 >= 100 ? 'rgba(255, 255, 255, 0.46)' : "rgba(83, 80, 239, 0.16)"}` }}>
                <div className="userskilFill text-white" style={{ width: `${(dataArray?.nextpercentLeg1)}%`, opacity: "1" }}

                ><span className="ms-5 text-white">{dataArray?.legbusiness1} </span> </div>
                {/* <div className="userskilOneText">Max. 800</div> */}
              </div>
            </div>
          </div>
          <div className="LegOneSkill">
            <h6>Leg 2</h6>
            <div className="LegOneSkillProgress">
              <div className="userskilOne">
                <div className="userskilFill text-white " style={{ width: `${(dataArray?.nextpercentLeg2)}%`, opacity: "1" }}>
                  <span className="ms-5">{dataArray?.legbusiness2}</span></div>
                {/* <div className="userskilOneText">Max. 800</div> */}
              </div>
            </div>
          </div>
          <div className="LegOneSkill">
            <h6>others</h6>
            <div className="LegOneSkillProgress" >
              <div className="userskilOne" >
                <div className="userskilFill text-white " style={{ width: `${(dataArray?.nextpercentLeg3)}%`, opacity: "1" }}><span className="ms-5" style={{ color: "#fff" }}>{dataArray?.legbusinessother} </span> </div>
                {/* <div className="userskilOneText">Max. 800</div> */}
              </div>
            </div>
          </div>

          <br />
          <div className="userskilTit">
            <span>Matching Business</span>
          </div>
          <div className="lastSkill">
            <LastSkillFill></LastSkillFill>
            <LastSkillValue> {dataArray?.nextpercentrewrd}% </LastSkillValue>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default UserDetails;
