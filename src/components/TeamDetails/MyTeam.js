import React, { useEffect, useState } from "react";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";
import Form from "react-bootstrap/Form";
import { API } from "../../API/Api";
import { useSelector } from "react-redux";

const columns = [
  {
    dataField: "Number",
    text: "S.Number",
    sort: false,
  },
  {
    dataField: "UserId",
    text: "User Id",
    sort: false,
  },
  {
    dataField: "UserName",
    text: "User Name",
    sort: false,
  },
  {
    dataField: "Country",
    text: "Country",
    sort: false,
  },

  {
    dataField: "Package",
    text: "Package",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date ",
    sort: false,
  },
  {
    dataField: "Status",
    text: "Status",
    sort: false,
  },
  // {
  //   dataField: "Position",
  //   text: "Position",
  //   sort: false,
  // },
  {
    dataField: "activationDate",
    text: "Act Date ",
    sort: false,
  },
  // {
  //   dataField: "ActivateType",
  //   text: "Type",
  //   sort: false,
  // },
  // {
  //   dataField: "rewardrankname",
  //   text: " Rank ",
  //   sort: false,
  // },
  // {
  //   dataField: "TotalBusiness",
  //   text: "Total Business",
  //   sort: false,
  // },
  // {
  //   dataField: "matched_amount",
  //   text: "Matching Business",
  //   sort: false,
  // },
];

const MyTeam = () => {
  const user = useSelector((state) => state.UserAuth.userId);
  const [dataArray, setdataArray] = useState([])
  const [positionfilter, setpositionfilter] = useState("0")
  const [StatusFilter, setStatusFilter] = useState("2")
  const [fromdatefilter, setfromdatefilter] = useState("")
  const [todateFilter, settodateFilter] = useState("")
  const [rankfilter, setrankfilter] = useState("")

  let UserID_Seven = localStorage.getItem('uid_output_seven')

  //console.log("UserID_Seven",UserID_Seven);

  // const [FilterRight, setFilterRight] = useState("")
  let arr = []


  const referral_API = async () => {
    try {

      let responceRight = await API?.post('/MyTeamNew', {

        "uid": UserID_Seven,
        "status": StatusFilter,
        "fdate": fromdatefilter,
        "tdate": todateFilter

      })
      console.log("My_Team", responceRight.data.data?.record[0]);
      responceRight = responceRight.data.data?.record[0];
      // setleftreferralApi([])


      responceRight.forEach((item, index) => {
        arr.push({
          Number: index + 1,
          UserId: `${item?.uid} `,
          UserName: `${item?.f_name} `,
          Position: item?.position,
          DateTime: `${item?.registrationDate} `,
          Status: item.ss,
          ActivationDate: item.top_update || "Null",
          TotalBusiness: `$ ${item.packageamount}`,
          Package: item.packageamount,
          Country: item?.countryname == null ? "Null" : item?.countryname,
          rewardrankname: item.rewardrankname,
          matched_amount: item.matched_amount,
          activationDate: item?.activationDate,
          ActivateType: item?.ActivateType

        })

        setdataArray([...arr])
      })

    } catch (e) {
      console.log("Error While calling Myteam API", e);
    }
  }

  useEffect(() => {
    referral_API()
  }, [])

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>My Team</h6>
        </div>
        <div className="LevelDetailsSelect">
          <div className="LevelDetailsInputs">
            <span>Select Status</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setStatusFilter(e.target.value)}>
              <option>Select Status</option>
              <option value="0">All</option>
              <option value="1">Active</option>
              <option value="2">In-Active</option>
            </Form.Select>
          </div>
          {/* <div className="LevelDetailsInputs">
            <span>Position</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setpositionfilter(e.target.value)}>
              <option>Select Position</option>
              <option value="0">All</option>
              <option value="1">Left</option>
              <option value="2">Right</option>
            </Form.Select>
          </div> */}
          <div className="LevelDetailsInputs">
            <span>From Date</span>
            <input type="date" onChange={(e) => setfromdatefilter(e.target.value)} />
          </div>
          <div className="LevelDetailsInputs">
            <span>To Date</span>
            <input type="date" onChange={(e) => settodateFilter(e.target.value)} />
          </div>
          {/* filter input */}
          {/* <div className="LevelDetailsInputs">
            <span>Rank</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setrankfilter(e.target.value)}>
              <option value="">All </option>
              <option value="STAR">Star</option>
              <option value="JADE">Jade</option>
              <option value="PEARL">Pearl</option>
              <option value="SAPPHIRE">Sapphire</option>
              <option value="RUBY">Ruby</option>
              <option value="EMERALD">Emerald</option>
              <option value="DIAMOND">Diamond</option>
              <option value="DOUBLE DIAMOND">Double Diamond</option>
              <option value="TRIPLE DIAMOND">Triple Diamond</option>
              <option value="BLACK DIAMOND">Black Diamond</option>
              <option value="ROYAL DIAMOND">Royal Diamond</option>
              <option value="CROWN DIAMOND">Crown Diamond</option>
              <option value="ROYAL CROWN DIAMOND">Royal Crown Diamond</option>
              <option value="IMPERIAL DIAMOND">Imperial Diamond</option>
            </Form.Select>
          </div> */}
          {/* filtr input */}
          <div className="LevelDetailsInputs">
            <button onClick={referral_API}>Search</button>
          </div>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default MyTeam;
