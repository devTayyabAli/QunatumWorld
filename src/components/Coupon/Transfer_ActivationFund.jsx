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
        text: "So.No",
        sort: false,
    },
    // {
    //   dataField: "fromUserid",
    //   text: "From Id",
    //   sort: false,
    // },
    {
        dataField: "id",
        text: "Receiver Id",
        sort: false,
    },
    // {
    //   dataField: "fromUserid",
    //   text: "Sender Id",
    //   sort: false,
    // },

    {
        dataField: "amount",
        text: "Amount",
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
    {
        dataField: "remark",
        text: "Remark",
        sort: false,
    },
];

function Transfer_ActivationFund() {
    const user = useSelector((state) => state.UserAuth.userId);
    const storedData = localStorage.getItem('userData');
    const parsedData = JSON.parse(storedData);
    let uId = parsedData.uid_output
    const [coupon, setCoupon] = useState("");
    const [userName, setUserName] = useState("");
    const [dataArray, setdataArray] = useState([]);
    const [amount, setamount] = useState("");
    const [topid, setTopId] = useState("");
    const [larbalance, setLarBalance] = useState("");

    console.log("Uid", user);

    const CouponGenerate = async () => {
        try {

            const acc = await loadWeb3();
            let res = await API.get(`/getDashboardValues?id=${uId}`)
            console.log('betawallet', res.data.data[0])

            res = res.data.data[0]

            console.log("topid", topid);
            console.log("uId", uId);

            console.log(acc);
            console.log(res.address);
            //if (res.address == acc) {
            let responce = await API?.post("/Transfer_ActivationFund", {
                touid: topid,
                user_id: uId,
                amount: amount,
            });
            responce = responce?.data?.data;
            console.log("Coupon", responce);
            if (responce == "Successfull") {
                alert("Fund Transfer Successfull.");
                window.location.reload();
            }
            else {
                alert(responce);
            }
            // } else {
            //   alert("Metamask Address is mismatch !!")
            // }
        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    };

    const dashboard_coupon = async () => {
        try {
            let responce = await API.get(`/getDashboardValues?id=${uId}`);
            responce = responce.data.data;
            setLarBalance(responce[0].AdminFund);
            // setUserName(responce[0].UserName);
            console.log("responceresponce====>", responce);
        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    };

    const Transfer_coupon = async () => {
        try {
            let responce = await API?.post("/GetCouponDetailHistory", {
                uid: uId,
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
            let responce = await API?.get(`/activationRequestHistory?uid=${user}`);
            responce = responce.data.data[0];
            // setCoupon(responce[0].coupon);
            // setUserName(responce[0].UserName);
            console.log("responceresponce", responce);

            let arr = [];
            responce.forEach((item, index) => {
                arr.push({
                    Number: item.Number,
                    remark: item?.remark,
                    id: item?.touserid,
                    amount: item?.amount,
                    fromUserid: item?.fromUserid,
                    // coupon: item?.coupon,
                    // Txn: <><a href={`https://bscscan.com/tx/${item?.traxn}`} target="_blank" className='text-white'>View Txn</a></>,
                    DateTime: item.DateTime,
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
        Transfer_coupon();
        dashboard_coupon()
    }, []);

    return (
        <div>
            <Layout>
                <BgLayout>
                    <div className="BgLayout_Header">
                        <h6>Transfer Activation Fund</h6>
                    </div>
                    <div className="Share_tableMain" style={{ "display": "none" }}>
                        <div class="card_main">
                            {/* <!-- <div class="circles">
			  <div class="circle circle-1"></div>
			  <div class="circle circle-2"></div>
			</div> --> */}

                            <div class="card-group">
                                <div class="card" id="coupon_card_3">
                                    <div class="logo">
                                        <img
                                            className="copn_img"
                                            src="images/logo.png"
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
                                <label htmlFor="transfer">Available Activation Fund Balance</label>
                                <input
                                    type="number"
                                    name="transfer"
                                    readonly=""
                                    placeholder={`$ ${larbalance}`}

                                />
                                <label htmlFor="transfer">Enter Transfer Id</label>
                                <input
                                    type="number"
                                    placeholder="Enter Transfer Id"
                                    name="transfer"
                                    onChange={(e) => setTopId(e.target.value)}
                                />
                                {/* <br /> */}
                                <label htmlFor="usdamount">Enter Amount</label>
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    name="usdamount"
                                    onChange={(e) => setamount(e.target.value)}
                                />
                            </div>
                            {/* <br /> */}
                            <button
                                className="btn btn-primary  coupon"
                                onClick={() => CouponGenerate()}
                            >
                                Transfer Fund
                            </button>
                        </div>
                    </div>
                    <div className="BgLayout_Header">
                        <h6>Activation Fund Transfer History</h6>
                    </div>
                    <div className="Share_tableMain">
                        <ShareTable columns={columns} Data={dataArray} />
                    </div>
                </BgLayout>
            </Layout>
        </div >
    );
}

export default Transfer_ActivationFund;
