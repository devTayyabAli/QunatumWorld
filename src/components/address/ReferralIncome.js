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
  // {
  //   dataField: "UserId",
  //   text: "User Id",
  //   sort: false,
  // },
  {
    dataField: "FromID",
    text: "From ID",
    sort: false,
  },
  {
    dataField: "UserName",
    text: "User Name",
    sort: false,
  },
  {
    dataField: "DateTime",
    text: "Date",
    sort: false,
  },

  {
    dataField: "Package",
    text: "Package",
    sort: false,
  },
  {
    dataField: "Income",
    text: "Income",
    sort: false,
  },
];

const ReferralIncome = () => {
  const [dataArray, setdataArray] = useState([]);

  const user = useSelector((state) => state.UserAuth.userId);

  const referral_API = async () => {
    try {
      let responce = await API?.post("/directIncome", {
        uid: user,
        "fdate": "",
        "tdate": ""
      });
      responce = responce?.data?.data?.record[0];
      // console.log("responce",responce);
      let arr = [];
      responce.forEach((item) => {
        arr.push({
          Number: item.row,
          UserId: item.user_id,
          UserName: item.name,
          FromID: item.from_id,
          DateTime: item.dd,
          Package: item.amount,
          Income: item.income,
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
          <h6>Referral Bonus</h6>
        </div>

        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
      <div className="bg_usser_main"></div>
    </>
  );
};

export default ReferralIncome;
