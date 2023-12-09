import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../API/Api";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";

const columns = [
  {
    dataField: "Number",
    text: "S.Number",
    sort: false,
  },
  {
    dataField: "UserID",
    text: "User ID",
    sort: false,
  },
  {
    dataField: "UserName",
    text: "User Name",
    sort: false,
  },
  {
    dataField: "PackageAmount",
    text: "PackageAmount",
    sort: false,
  },
  {
    dataField: "Income",
    text: "Income",
    sort: false,
  },
  // {
  //   dataField: "Status",
  //   text: "Status",
  //   sort: false,
  // },
  {
    dataField: "DateTime",
    text: "Date & Time",
    sort: false,
  },
];

const NFTStakingIncome = () => {
  const user = useSelector((state) => state.UserAuth.userId);
  const [dataArray, setdataArray] = useState([]);
  const referral_API = async () => {
    try {
      let responce = await API.post('/directIncome', {

        "uid": user,
        "fdate": "",
        "tdate": ""
      })
      responce = responce?.data?.data.record[0];
      // console.log("responce", responce);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          Number: item?.row,
          UserID: item?.uid,
          PackageAmount: item?.package==null ? "Null": item?.package,
          Income: item?.amount,
          UserName:item?.name,
          // Status: (
          //   <>
          //     {item.status == "1" ? (
          //       <span style={{ color: "green" }}>Release</span>
          //     ) : (
          //       <span style={{ color: "red" }}>Hold</span>
          //     )}
          //   </>
          // ),
          DateTime: item?.dd,
        });
      });

      setdataArray(arr);
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  useEffect(() => {
    referral_API();
  }, []);

  return (
    <>
      <BgLayout>
        <div className="BgLayout_Header">
          <h6>Direct Income</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
      <div className="bg_usser_main"></div>
    </>
  );
};

export default NFTStakingIncome;
