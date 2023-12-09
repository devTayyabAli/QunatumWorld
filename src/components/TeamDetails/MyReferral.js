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
    text: "Date",
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
    dataField: "ActivationDate",
    text: "Act Date ",
    sort: false,
  },
  // {
  //   dataField: "ActivationType",
  //   text: "Type ",
  //   sort: false,
  // },
  // {
  //   dataField: "TotalBusiness",
  //   text: "Total Business",
  //   sort: false,
  // },
];

const MyReferral = () => {
  const storedValue = sessionStorage.getItem('id');
  // console.log("storedValue",storedValue);
  const user = useSelector((state) => state.UserAuth.userId);
  const storedData = localStorage.getItem('userData');
  const parsedData = JSON.parse(storedData);
  let uId = parsedData.uid_output_six
  let UserID_Seven = localStorage.getItem('uid_output_seven')

  const [dataArray, setdataArray] = useState([])

  const [positionfilter, setpositionfilter] = useState("0")
  const [StatusFilter, setStatusFilter] = useState("2")
  const [fromdatefilter, setfromdatefilter] = useState("")
  const [todateFilter, settodateFilter] = useState("")

  let arr = []
  const referral_API = async () => {
    try {

      let responce = await API?.post('/myReferrals', {
        "uid": UserID_Seven
      })
      console.log("myrefreal_response", responce?.data?.data?.record[0]);
      responce = responce?.data?.data?.record[0];
      // setreferralApi([])

      responce.forEach((item, index) => {
        arr.push({
          Number: index + 1,
          UserId: `${item?.uid} `,
          UserName: `${item?.f_name} `,
          Country: item?.countryname == null ? "Null":item?.countryname,
          Package: `$ ${item?.packageamount}  `,
          DateTime: item?.registrationDate,
          Status: item.ss,
          // Position: item?.position_L_R,
          ActivationDate: item.activationDate != null ? item.activationDate : "Null",
          // TotalBusiness: `$ ${item?.packageamount}`,
          // ActivationType: item.ActivateType

        })
        setdataArray([...arr])


      })


    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  }


  useEffect(() => {
    referral_API()
  }, [positionfilter, StatusFilter, fromdatefilter, todateFilter])

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>My Referral</h6>
        </div>
        <div className="LevelDetailsSelect">
          <div className="LevelDetailsInputs">
            <span>Select Status</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setStatusFilter(e.target.value)}>
              <option>Select Status</option>
              <option value="2">All</option>
              <option value="1">Active</option>
              <option value="0">In-Active</option>
            </Form.Select>
          </div>
          <div className="">
            <button onClick={referral_API}>Search</button>
          </div>
          {/* <div className="LevelDetailsInputs">
            <span>Position</span>
            <Form.Select aria-label="Default select example" onChange={(e) => setpositionfilter(e.target.value)}>
              <option>Select Position</option>
              <option value="0">All </option>
              <option value="1">Left</option>
              <option value="2">Right</option>
            </Form.Select>
          </div> */}
          {/* <div className="LevelDetailsInputs">
            <span>From Date</span>
            <input type="date" onChange={(e) => setfromdatefilter(e.target.value)} />
          </div>
          <div className="LevelDetailsInputs">
            <span>To Date</span>
            <input type="date" onChange={(e) => settodateFilter(e.target.value)} />
          </div> */}

        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
    </>
  );
};

export default MyReferral;
