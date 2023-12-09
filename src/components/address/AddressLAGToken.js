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
    dataField: "Id",
    text: "User Id",
    sort: false,
  },
  {
    dataField: "Income",
    text: "Income",
    sort: false,
  },
  
  {
    dataField: "DateTime",
    text: "Date ",
    sort: false,
  },
];

const AddressLAGToken = () => {
  const [dataArray, setdataArray] = useState([]);
  const user = useSelector((state) => state.UserAuth.userId);

  const referral_API = async () => {
    try {
      let responce = await API?.post("/WithdrawlShareBonus", {
        uid: user
       
      });

      responce = responce?.data?.data;

      console.log("Res", responce);
      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          Number: index + 1,
          Id: `${item?.uid} `,
          Income: `$ ${item?.income} `,
          DateTime: `${item.edate}`,
          
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
          <h6>Withdrawal Share Bonus</h6>
        </div>
        <div className="Share_tableMain">
          <ShareTable columns={columns} Data={dataArray} />
        </div>
      </BgLayout>
      <div className="bg_usser_main"></div>
    </>
  );
};

export default AddressLAGToken;
