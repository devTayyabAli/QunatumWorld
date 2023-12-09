import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../API/Api";
import Layout from "../Layout";
import "./Coupon.css";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";

import { loadWeb3 } from "../../apis/api";

const columns = [
  {
    dataField: "Number",
    text: "So.No.",
    sort: false,
  },
  
  {
    dataField: "id",
    text: "Receiver Id",
    sort: false,
  },
  {
    dataField: "coupon",
    text: "Coupon No.",
    sort: false,
  },
  {
    dataField: "amount",
    text: "Amount",
    sort: false,
  },
  {
    dataField: "deduct",
    text: "Deduct",
    sort: false,
  },
  {
    dataField: "remark",
    text: "Remark",
    sort: false,
  },
  // {
  //   dataField: "coupon",
  //   text: "Coupon Number",
  //   sort: false,
  // },
  {
    dataField: "DateTime",
    text: "Date & Time",
    sort: false,
  },

];

function Add_Coupon() {
  const user = useSelector((state) => state.UserAuth.userId);
  const [coupon, setCoupon] = useState("");
  const [userName, setUserName] = useState("");
  const [dataArray, setdataArray] = useState([]);
  const [amount, setamount] = useState("");
  const [totalbalance, settotalbalance] = useState("");
   const [totalLAR, setTotalLAR] = useState("");

  const CouponGenerate = async () => {
    try {
      const acc = await loadWeb3();
      let res = await API.get(`/getDashboardValues?id=${user}`)
     console.log('betawallet', res.data.data[0])

      res = res.data.data[0]

      if (res.address == acc) {

      let responce = await API?.post("/AddFundCouponWallet", {
        uid: user,
        amount: amount,
      });
      responce = responce?.data?.data;

      console.log("Coupon", responce);
      if (responce == "Fund Add Successfully.") {
        alert("Fund Add Successfully.");
      } else {
        alert(responce);
      }
    }else
    {
      alert ("Metamask Address is mismatch !!")
    }
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  const dashboard_coupon = async () => {
    try {
      let responce = await API.get(`/getDashboardValues?id=${user}`);
      responce = responce.data.data;
      settotalbalance(responce[0].NetCouponBalance);
      setTotalLAR(responce[0].NetMainwallet);
      console.log("responceresponce====>", responce);
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  const Add_coupon = async () => {
    try {
      let responce = await API?.post("/GetCouponDetailHistory", {
        uid: user,
        type: "User",
      });
      responce = responce.data.data[0];
      setCoupon(responce[0].coupon);
      setUserName(responce[0].UserName);
      console.log("responceresponce", responce);
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  const referral_API = async () => {
    try {
      let responce = await API.get(`/AddFundCouponWalletHistory?id=${user}`);
      responce = responce.data.data;
      // setCoupon(responce[0].coupon);
      // setUserName(responce[0].UserName);
      console.log("responceresponce", responce);

      let arr = [];
      responce.forEach((item, index) => {
        arr.push({
          Number: index + 1,
          UserName: item?.UserName,
          amount: item?.amount,
          // fromUserid: item?.fromUserid,
          id: item?.uid,
          coupon: item?.coupon,
          // Txn: <><a href={`https://bscscan.com/tx/${item?.traxn}`} target="_blank" className='text-white'>View Txn</a></>,
          DateTime: moment(item?.edate).format("DD/MM/YYYY h:m:s A"),
          deduct: item?.deduct,
          remark: item?.remark,
        });
      });
      console.log("responce", arr);

      setdataArray(arr);
    } catch (e) {
      console.log("Error While calling Referrer API", e);
    }
  };

  useEffect(() => {
    referral_API();
    Add_coupon();
    dashboard_coupon();
  }, []);

  return (
    <div>
      <Layout>
        <BgLayout>
          <div className="BgLayout_Header">
            <h6>Add Fund In Coupon</h6>
          </div>
          <div className="Share_tableMain">
            <div class="card_main">
              {/* <!-- <div class="circles">
			  <div class="circle circle-1"></div>
			  <div class="circle circle-2"></div>
			</div> --> */}

              <div class="card-group">
                <div class="card" id="coupon_card_1">
                  <div class="logo">
                    <img
                      className="copn_img"
                      src="images/logo.jpg"
                      alt="Visa"
                    />
                  </div>
                  <div class="chip">
                    <img src="images/chip.png" alt="chip" />
                  </div>
                  {coupon == "" ? (
                    <div class="coupon_number number">XXXXXX</div>
                  ) : (
                    <div class="coupon_number number">{coupon}</div>
                  )}

                  {userName == "" ? (
                    <div class="name">XXXXXX</div>
                  ) : (
                    <div class="name">{userName}</div>
                  )}
                  {/* <div class="from">10/20</div>
			    <div class="to">06/23</div> */}
                  <div class="ring"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Share_tableMain">
            <div>
              <div className="col-md-4 coupn_lar lar_inputWrper">
                 <label htmlFor="usdamount">Available LAR Balance</label>
                <input
                  type="number"
                  readonly=""
                  name="usdamount"
                  placeholder={`$ ${totalLAR}`}
                 
                />
                {/* <br /> */}
                <label htmlFor="usdamount">Available Coupon Balance</label>
                <input
                  type="number"
                  readonly=""
                  name="usdamount"
                  placeholder={`$ ${totalbalance}`}
                 
                />
                {/* <br /> */}
                <label htmlFor="usdamount">Enter Coupon Amount</label>
                <input
                  type="number"
                  onChange={(e) => setamount(e.target.value)}
                  placeholder="Enter Fund"
                  name="usdamount"
                />
              </div>
              {/* <br /> */}
              <button
                className="btn btn-primary  coupon"
                onClick={() => CouponGenerate()}
              >
                Add Fund
              </button>
            </div>
          </div>
          <div className="BgLayout_Header">
            <h6>Add Coupon History</h6>
          </div>
          <div className="Share_tableMain">
            <ShareTable columns={columns} Data={dataArray} />
          </div>
        </BgLayout>
      </Layout>
    </div>
  );
}

export default Add_Coupon;
