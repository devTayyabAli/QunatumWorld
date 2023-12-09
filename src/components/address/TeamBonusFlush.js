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
        dataField: "PackageAmount",
        text: "PackageAmount",
        sort: false,
    },
    {
        dataField: "Level_income",
        text: "Level Income",
        sort: false,
    },

    {
        dataField: "NetIncome",
        text: "$ Net Income",
        sort: false,
    },
    {
        dataField: "DateTime",
        text: "Date",
        sort: false,
    },
];
const dataArray = [
    {
        Number: 213213,
        UserId: 222,
        MatchingBusiness: "demo",
        NetIncome: 233,
        DateTime: "12/12/2020",
    },
];

const TeamBonusFlush = () => {
    const [dataArray, setdataArray] = useState([]);

    const user = useSelector((state) => state.UserAuth.userId);

    const referral_API = async () => {
        try {
            let responce = await API?.post("/levelIncome", {
                uid: user,
                fdate: "",
                tdate: ""
            });
            responce = responce?.data?.data.record[0];
            console.log("response", responce);
            let arr = [];
            responce.forEach((item) => {
                arr.push({
                    Number: item.row,
                    UserName: item.sname,
                    UserId: item.uid,
                    PackageAmount: item?.package==null ? "Null": item?.package,
                    Level_income: item?.Level_income,

                    // String(item.uid).substring(0, 4) +
                    // "..." +
                    // String(item.uid).substring(item.uid.length - 4),
                    //MatchingBusiness: item.paidpv,
                    NetIncome: `$ ${item.on_amount}`,
                    DateTime: item.dd,
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
                    <h6>Level Income</h6>
                </div>
                <div className="Share_tableMain">
                    <ShareTable columns={columns} Data={dataArray} />
                </div>
            </BgLayout>
            <div className="bg_usser_main"></div>
        </>
    );
};

export default TeamBonusFlush;
