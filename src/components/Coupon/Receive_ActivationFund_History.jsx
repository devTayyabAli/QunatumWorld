import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../API/Api";
import { APILocal } from "../../API/Api";
import Layout from "../Layout";
import "./Coupon.css";
import BgLayout from "../sharecomponent/BgLayout";
import ShareTable from "../sharecomponent/ShareTable";


const columns = [
    {
        dataField: "Number",
        text: "So.No",
        sort: false,
    },

    {
        dataField: "fromUserid",
        text: "Sender Id",
        sort: false,
    },
    // {
    //   dataField: "coupon",
    //   text: "Deduct Amount",
    //   sort: false,
    // },
    {
        dataField: "amount",
        text: "Received Amount",
        sort: false,
    },

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


function Recieve_ActivationFund_History() {
    const user = useSelector((state) => state.UserAuth.userId);
    const storedData = localStorage.getItem('userData');
    const parsedData = JSON.parse(storedData);
    let uId = parsedData.uid_output
    const [dataArray, setdataArray] = useState([]);

    const referral_API = async () => {
        try {
            let responce = await API.post("/activationfundreceivedHistory", {
                uid: uId
            });
            console.log("responceresponce", responce);
            responce = responce.data.data[0];
            console.log("responceresponce", responce);

            let arr = [];
            responce.forEach((item, index) => {
                arr.push({
                    Number: index + 1,
                    toUserid: item?.touserid,
                    amount: item?.amount,
                    fromUserid: item?.uid,
                    remark: item?.remark,
                    // coupon: item?.debit,
                    // Txn: <><a href={`https://bscscan.com/tx/${item?.traxn}`} target="_blank" className='text-white'>View Txn</a></>,
                    DateTime: item.dd,
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
    }, []);
    return (
        <div>

            <Layout>
                <BgLayout>

                    <div className="BgLayout_Header">
                        <h6>Received Activation Fund History</h6>
                    </div>
                    <div className="Share_tableMain">
                        <ShareTable columns={columns} Data={dataArray} />
                    </div>
                </BgLayout>
            </Layout>

        </div>
    )
}

export default Recieve_ActivationFund_History