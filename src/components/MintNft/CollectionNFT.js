import React, { useState, useMemo, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import nftsImage from "../../assets/images/mint_nfts.png";
import hart from "../../assets/images/hart.png";
import share from "../../assets/images/share.png";
import scrollreveal from "scrollreveal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-toastify'
import axios from "axios";
import {
  BUSD_Token,
  BUSD_Token_ABI,
  GLABA_NFT,
  GLABA_NFT_1000,
  GLABA_NFT_2500,
  GLABA_NFT_500,
  GLABA_NFT_5000,
  GLABA_NFT_ABI,
  GLABA_NFT_ABI_1000,
  GLABA_NFT_ABI_20_5000,
  GLABA_NFT_ABI_2500,
  GLABA_NFT_ABI_500,
  GLABA_NFT_ABI_5000,
  LaRace_Governance_Token,
  LaRace_Governance_Token_ABI,
  Minting_Token,
  Minting_Token_ABI,
  USDT_Token,
  USDT_Token_ABI,
  WIRE_Token,
  WIRE_Token_ABI,
} from "../../utilies/constant";
import { loadWeb3 } from "../../apis/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { API } from "../../API/Api";
import Web3 from "web3";
import { setValue } from "../../redux/Slices/NFTSlice";


const CollectionNFT = () => {
  const singlenft = useSelector((state) => state.nft.SingleNFT);
  const Count = useSelector((state) => state.nft.count);
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.nft.userDetail);
  const user = useSelector((state) => state.UserAuth.userId);
  const [netCoupon, setNetCoupon] = useState(0);
  const [Spinner, setSpinner] = useState(false);
  const [User_Api_Amount, setUser_Api_Amount] = useState(0);
  const [UserAddress, setUserAddress] = useState("");
  const [AdminFund, setAdminFund] = useState(0);
  const [RapidFund, setRapidFund] = useState(0);

  let navigate = useNavigate();

  const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");

  const dashboard_Api = async () => {
    try {
      let res = await API.get(`/getDashboardValues?id=${user}`);
      console.log("getDashboardValues", res);

      res = res.data.data[0];
      //setNetCoupon(res.NetCouponBalance * value);
      setUserAddress(res.address);
      setRapidFund(res.rapidFund);
      setAdminFund(res.AdminFund);
      let AddressUser = res.address;
      // console.log("AddressUser", AddressUser);

      // let Tauras_res = await axios.post("https://taurusprotocol-1.nakshtech.info/getUserNetIncome", {
      //   uid: AddressUser,
      // });
      // Tauras_res = Tauras_res.data.data;
      // // console.log("getUserNetIncome==>", Tauras_res.netincome);
      // setUser_Api_Amount(Tauras_res.netincome);
    } catch (e) {
      console.log("dashboard_Api", e);
    }
  };
  const [value, setCount] = useState(1);

  useEffect(() => {
    dashboard_Api();

    const sr = scrollreveal(
      {
        origin: "left",
        distance: "10px",
        duration: 1000,
        reset: false,
      },
      [singlenft.minting_counter]
    );

    sr.reveal(
      `.CollectionMain .col-md-3,.CollectionMain .col-md-9
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  const [selectedValue, setSelectedValue] = useState({
    name: "Mint with 100% USDT",
    price: "$0",
  });
  const [PriceArray, setPriceArray] = useState([
    {
      name: "Mint with 100% USDT",
      price: "$0",
    },
    {
      name: "Mint with 100% Token",
      price: "$0",
    },
    {
      name: "Mint with 50% USDT & 50% Admin Wallet",
      price: "$0",
    },
    {
      name: "Mint with 50% Token & 50% Admin Wallet",
      price: "$0",
    },
    {
      name: "50% USDT & 50% Token",
      price: "$0",
    },
    {
      name: "Mint with 85% USDT & 15% Rapid Fund",
      price: "$0",
    },
    {
      name: "Mint with 85% Token & 15% Rapid Fund",
      price: "$0",
    },
    {
      name: "42% USDT & 42% Token & 15% Rapid Fund",
      price: "$0",
    },
  ]);

  const incrementCount = useMemo(
    () => () => setCount((prev) => prev + 1),
    [value]
  );
  const decrementCount = useMemo(() => {
    if (value === 0) {
      return;
    }
    return () => setCount((prev) => prev - 1);
  }, [value]);

   console.log("selectedValue?.name==>",selectedValue?.name);

  const handleChange = (e) => {
    e.preventDefault();
    let obj = JSON.parse(e.target.value);
    setSelectedValue(obj);
  };

  const mint = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      console.log("selectedValue?.name ", selectedValue?.name);
      console.log("selectedValue?.name 1", PriceArray[0]?.name);

      if (selectedValue?.name == PriceArray[0]?.name) {
        mint100USDT();
      } else if (selectedValue?.name == PriceArray[1]?.name) {
        mint100Token();
      } else if (selectedValue?.name == PriceArray[2]?.name) {
        mint50USDT();
      } else if (selectedValue?.name == PriceArray[3]?.name) {
        mint50Token();
      } else if (selectedValue?.name == PriceArray[4]?.name) {
        mint50USDT50Token();
      } else if (selectedValue?.name == PriceArray[5]?.name) {
        mint85USDT();
      } else if (selectedValue?.name == PriceArray[6]?.name) {
        mint85Token();
      } else if (selectedValue?.name == PriceArray[7]?.name) {
        mint42USDT42Token();
      }
    }
  };

  const mint100USDT = async () => {
    
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;
        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc ) {
          try {
            setSpinner(true);
            const web3 = window.web3;
            let approvetoken1 = new web3.eth.Contract(
              USDT_Token_ABI,
              USDT_Token
            );
            let usdAmount = singlenft.count;
            //value?.count=="100" ? "50":value?.count=="500"? "100" :value?.count=="1000"? "500" :
            // value?.count=="2500"?"1000":"2500"

            console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay2Price(Count)
              .call();
            token1 = web3.utils.fromWei(token1.toString());
            token1 = parseFloat(token1);
            if (singlenft.minting_counter == 1) {
              token1 = Number(token1) + increment_each_data;
              console.log("Token", token1);
            } else if (singlenft.minting_counter == 2) {
              token1 = Number(token1);
            }
            token1 = web3.utils.toWei(token1.toString());
            console.log("Token1", token1);
            const gasPrice = await window.web3.eth.getGasPrice();

            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_1000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_2500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_5000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            }
            toast.success("Approve Confirmed USDT Token");
            let hash = await nftContractOf.methods.mintPay2(Count).send({
              from: acc,
              gasPrice:gasPrice
            });
            hash = hash.transactionHash;
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);
            // let res = await API.post("/MintWithCouponWallet", {
            //   uid: user,
            //   amount: Count == 1 ? usdAmount : (usdAmount * Count),
            //   txn: hash,
            // });
            // console.log("response_Coupon==>", res.data.data);
            // res = res.data.data;
            // if (res == "Successfull") {
            //   toast.success("Minting Successful");
            // } else {
            //   toast.error(res);
            // }
            // console.log("postapi", postapi);
            toast.success(postapi.data.data);
            window.location.reload(false);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);
          }
          // }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);
      }
    }
  };

  const mint100Token = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;

        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);
            const web3 = window.web3;
            let approvetoken1 = new web3.eth.Contract(
              Minting_Token_ABI,
              Minting_Token
            );
            let usdAmount = singlenft.count;
            console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay3Price(Count)
              .call();
            token1 = web3.utils.fromWei(token1.toString());
            token1 = parseFloat(token1);
            if (singlenft.minting_counter == 1) {
              token1 = Number(token1) + increment_each_data;
            } else if (singlenft.minting_counter == 2) {
              token1 = Number(token1);
            }
            token1 = web3.utils.toWei(token1.toString());
            
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_1000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_2500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_5000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            }
            toast.success("Approve Confirmed Token");
            let hash = await nftContractOf.methods.mintPay3(Count).send({
              from: acc,
              gasPrice:gasPrice
            });
            hash = hash.transactionHash;
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);
            // let res = await API.post("/MintWithCouponWallet", {
            //   uid: user,
            //   amount: Count == 1 ? usdAmount : (usdAmount * Count),
            //   txn: hash,
            // });
            // console.log("response_Coupon==>", res.data.data);
            // res = res.data.data;
            // if (res == "Successfull") {
            //   toast.success("Minting Successful");
            // } else {
            //   toast.error(res);
            // }
            // console.log("postapi", postapi);
            toast.success(postapi.data.data);
            window.location.reload(false);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);
          }
          // }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);
      }
    }
  };

  const mint50USDT = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;

        console.log("res_Mint", own_Address == acc);
        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);
            const web3 = window.web3;
            let approvetoken1 = new web3.eth.Contract(
              USDT_Token_ABI,
              USDT_Token
            );
            let usdAmount = singlenft.count;
            console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay5Price(Count)
              .call();
            token1 = web3.utils.fromWei(token1.toString());
            token1 = parseFloat(token1);
            if (singlenft.minting_counter == 1) {
              token1 = Number(token1) + increment_each_data;
            } else if (singlenft.minting_counter == 2) {
              token1 = Number(token1);
            }
            token1 = web3.utils.toWei(token1.toString());
            
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_1000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_2500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_5000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            }
            toast.success("Approve Confirmed USDT Token");
            let hash = await nftContractOf.methods.mintPay5(Count).send({
              from: acc,
              gasPrice:gasPrice
            });
            hash = hash.transactionHash;
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);
            // let res = await API.post("/MintWithCouponWallet", {
            //   uid: user,
            //   amount: Count == 1 ? usdAmount : (usdAmount * Count),
            //   txn: hash,
            // });
            // console.log("response_Coupon==>", res.data.data);
            // res = res.data.data;
            // if (res == "Successfull") {
            //   toast.success("Minting Successful");
            // } else {
            //   toast.error(res);
            // }
            // console.log("postapi", postapi);
            toast.success(postapi.data.data);
            window.location.reload(false);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);
          }
          // }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);
      }
    }
  };
  const mint50Token = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;

        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);
            const web3 = window.web3;
            let approvetoken1 = new web3.eth.Contract(
              Minting_Token_ABI,
              Minting_Token
            );
            let usdAmount = singlenft.count;
            console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay4Price(Count)
              .call();
            token1 = web3.utils.fromWei(token1.toString());
            token1 = parseFloat(token1);
            if (singlenft.minting_counter == 1) {
              token1 = Number(token1) + increment_each_data;
              console.log("Token", token1);
            } else if (singlenft.minting_counter == 2) {
              token1 = Number(token1);
            }
            token1 = web3.utils.toWei(token1.toString());
            console.log("Token1", token1);
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_1000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_2500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_5000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            }
            toast.success("Approve Confirmed  Token");
            let hash = await nftContractOf.methods.mintPay4(Count).send({
              from: acc,
              gasPrice:gasPrice
            });
            hash = hash.transactionHash;
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);
            // let res = await API.post("/MintWithCouponWallet", {
            //   uid: user,
            //   amount: Count == 1 ? usdAmount : (usdAmount * Count),
            //   txn: hash,
            // });
            // console.log("response_Coupon==>", res.data.data);
            // res = res.data.data;
            // if (res == "Successfull") {
            //   toast.success("Minting Successful");
            // } else {
            //   toast.error(res);
            // }
            // console.log("postapi", postapi);
            toast.success(postapi.data.data);
            window.location.reload(false);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);
          }
          // }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);
      }
    }
  };
  const mint50USDT50Token = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;
        // setCount(singlenft.minting_counter == 2 ? 2 : value);

        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);

            const web3 = window.web3;
            let nftTokenOf_La_Race = new web3.eth.Contract(
              Minting_Token_ABI,
              Minting_Token
            );
            let nftTokenOf_Wire = new web3.eth.Contract(
              USDT_Token_ABI,
              USDT_Token
            );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }

            let token1 = await nftContractOf.methods
              .getmintPay1Price(Count)
              .call();
            let token2 = token1.token1;
            token1 = token1.token0;

            token2 = web3.utils.fromWei(token2.toString());
            token1 = web3.utils.fromWei(token1.toString());

            if (singlenft.minting_counter == 1) {
              token1 = await Number(token1);
              token2 = await Number(token2);
            } else if (singlenft.minting_counter == 2) {
              token1 = await Number(token1);
              token2 = await Number(token2);
            }

            token1 = web3.utils.toWei(token1.toString());
            token2 = web3.utils.toWei(token2.toString());

            console.log("token2token2", token2);
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods.approve(GLABA_NFT, token2).send({
                from: acc,
                gasPrice:gasPrice
              });

              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_500, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_500, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });

              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_1000, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_1000, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });

              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_2500, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_2500, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });

              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_5000, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_5000, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });

              toast.success("Approve Confirmed Token");
            }

            let hash = await nftContractOf.methods
              .mintPay1(Count)
              .send({ from: acc, gasPrice:gasPrice });

            hash = hash.transactionHash;

            let usdAmount = singlenft.count;
             console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);

            console.log("postapi", postapi);
            toast.success(postapi.data.data);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);

            // setbtnFour('Mint With BUSD')
          }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);

          // setinputdatahere(' ')
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);

        // setinputdatahere(' ')
      }
    }
  };

  const mint85USDT = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;
        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);
            const web3 = window.web3;
            let approvetoken1 = new web3.eth.Contract(
              USDT_Token_ABI,
              USDT_Token
            );
            let usdAmount = singlenft.count;
            console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay6Price(Count)
              .call();
            token1 = web3.utils.fromWei(token1.toString());
            token1 = parseFloat(token1);
            if (singlenft.minting_counter == 1) {
              token1 = Number(token1) + increment_each_data;
            } else if (singlenft.minting_counter == 2) {
              token1 = Number(token1);
            }
            token1 = web3.utils.toWei(token1.toString());
            
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_1000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_2500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_5000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            }
            toast.success("Approve Confirmed USDT Token");
            let hash = await nftContractOf.methods.mintPay6(Count).send({
              from: acc,
              gasPrice:gasPrice
            });
            hash = hash.transactionHash;
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);
            let res = await API.post("/UseRapidFundByUser", {
              uid: user,
              amount: usdAmount,
              // txn: hash,
            });
            console.log("UseRapidFundByUser ==>", res.data.data);
            // res = res.data.data;
            // if (res == "Successfull") {
            //   toast.success("Minting Successful");
            // } else {
            //   toast.error(res);
            // }
            // console.log("postapi", postapi);
            // toast.success(postapi.data.data);
            window.location.reload(false);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);
          }
          // }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);
      }
    }
  };
  const mint85Token = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;

        console.log("res_Mint", own_Address == acc);
        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);
            const web3 = window.web3;
            let approvetoken1 = new web3.eth.Contract(
              Minting_Token_ABI,
              Minting_Token
            );
            let usdAmount = singlenft.count;
            console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay7Price(Count)
              .call();
            token1 = web3.utils.fromWei(token1.toString());
            token1 = parseFloat(token1);
            if (singlenft.minting_counter == 1) {
              token1 = Number(token1) + increment_each_data;
              console.log("Token", token1);
            } else if (singlenft.minting_counter == 2) {
              token1 = Number(token1);
            }
            token1 = web3.utils.toWei(token1.toString());
            console.log("Token1", token1);
            
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_1000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_2500, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await approvetoken1.methods.approve(GLABA_NFT_5000, token1).send({
                from: acc,
                gasPrice:gasPrice
              });
            }
            toast.success("Approve Confirmed  Token");
            let hash = await nftContractOf.methods.mintPay7(Count).send({
              from: acc,
              gasPrice:gasPrice
            });
            hash = hash.transactionHash;
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);

            let res = await API.post("/UseRapidFundByUser", {
              uid: user,
              amount: usdAmount,
              // txn: hash,
            });
            console.log("UseRapidFundByUser ==>", res.data.data);
            // res = res.data.data;
            // if (res == "Successfull") {
            //   toast.success("Minting Successful");
            // } else {
            //   toast.error(res);
            // }
            console.log("postapi", postapi);
            toast.success(postapi.data.data);
            window.location.reload(false);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);
          }
          // }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);
      }
    }
  };
  const mint42USDT42Token = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        // let own_Address = userDetail.address
        let own_Address = true;
        // setCount(singlenft.minting_counter == 2 ? 2 : value);

        if (UserAddress == "") {
          toast.error("Please Update Your Profile");
          navigate("/Profile");
        } else if (UserAddress == acc) {
          try {
            setSpinner(true);

            const web3 = window.web3;
            let nftTokenOf_La_Race = new web3.eth.Contract(
              Minting_Token_ABI,
              Minting_Token
            );
            let nftTokenOf_Wire = new web3.eth.Contract(
              USDT_Token_ABI,
              USDT_Token
            );

            let nftContractOf;
            let increment_each_data;
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
              increment_each_data = 0.00365946;
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_500,
                GLABA_NFT_500
              );
              increment_each_data = 0.0109232;
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_1000,
                GLABA_NFT_1000
              );
              increment_each_data = 0.0182093;
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_2500,
                GLABA_NFT_2500
              );
              increment_each_data = 0;
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              nftContractOf = new web3.eth.Contract(
                GLABA_NFT_ABI_5000,
                GLABA_NFT_5000
              );
              increment_each_data = 0.0910139;
            }
            let token1 = await nftContractOf.methods
              .getmintPay8Price(Count)
              .call();
            let token2 = token1.token1;
            token1 = token1.token0;

            token2 = web3.utils.fromWei(token2.toString());
            token1 = web3.utils.fromWei(token1.toString());

            if (singlenft.minting_counter == 1) {
              token1 = await Number(token1);
              token2 = await Number(token2);
            } else if (singlenft.minting_counter == 2) {
              token1 = await Number(token1);
              token2 = await Number(token2);
            }
            token1 = web3.utils.toWei(token1.toString());
            token2 = web3.utils.toWei(token2.toString());
            
            const gasPrice = await window.web3.eth.getGasPrice();
            if (
              (singlenft.count == 100 && singlenft.minting_counter == 1) ||
              (singlenft.count == 200 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods.approve(GLABA_NFT, token1).send({
                from: acc,
                gasPrice:gasPrice
                
              });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods.approve(GLABA_NFT, token2).send({
                from: acc,
                gasPrice:gasPrice
              });
              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 1000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_500, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_500, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });

              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 2000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_1000, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_1000, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });

              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
              (singlenft.count == 5000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_2500, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_2500, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed Token");
            } else if (
              (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
              (singlenft.count == 10000 && singlenft.minting_counter == 2)
            ) {
              await nftTokenOf_Wire.methods
                .approve(GLABA_NFT_5000, token1)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed USDT Token");
              await nftTokenOf_La_Race.methods
                .approve(GLABA_NFT_5000, token2)
                .send({
                  from: acc,
                  gasPrice:gasPrice
                });
              toast.success("Approve Confirmed Token");
            }
            let hash = await nftContractOf.methods
              .mintPay8(Count)
              .send({ from: acc,gasPrice:gasPrice });
            hash = hash.transactionHash;
            let usdAmount = singlenft.count;
           console.log("data",singlenft.count );
            console.log("data 1",singlenft.minting_counter );
            if (singlenft.count == "100" && singlenft.minting_counter == 1) {
              usdAmount = "50";
            } else if (
              singlenft.count == "500" &&
              singlenft.minting_counter == 1
            ) {
              usdAmount = "100";
            } else if (
              singlenft.count == "1000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "500";
            } else if (
              singlenft.count == "2500" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "1000";
            } else if (
              singlenft.count == "5000" &&
              singlenft.minting_counter == 1
            ) {
             usdAmount = "2500";
            }
            console.log("data usdAmount",usdAmount );
            let postapi = await axios.post(
              "https://fexrace-api.nakshtech.info/activation_new",
              {
                uid: user,
                sid: "0",
                transaction: hash,
                amount: usdAmount,
                useraddress: acc,
                tokenamount: "0",
                type: "Without Referral ID",
                quantity: Count,
                horseType: singlenft.minting_counter == 1 ? "SINGLE" : "DUAL",
                ActivateType : selectedValue?.name
              }
            );
            toast.success("Transaction Confirmed");
            setSpinner(false);
            
            let res = await API.post("/UseRapidFundByUser", {
              uid: user,
              amount: usdAmount,
              // txn: hash,
            });
            console.log("UseRapidFundByUser ==>", res.data.data);
            
            console.log("postapi", postapi);
            toast.success(postapi.data.data);
          } catch (e) {
            console.log("Error while minting ", e);
            toast.error("Transaction failed");
            setSpinner(false);

            // setbtnFour('Mint With BUSD')
          }
        } else {
          toast.error("Wrong Metamask Address");
          setSpinner(false);

          // setinputdatahere(' ')
        }
      } catch (e) {
        console.log("Error ", e);
        setSpinner(false);

        // setinputdatahere(' ')
      }
    }
  };

  const getVAlues = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
    } else if (acc == "Wrong Network") {
      toast.error(
        "Wrong Newtwork please connect to Binance smart chain network"
      );
    } else {
      try {
        const web3 = window.web3;
        let nftContractOf;
        let increment_each_data;

        if (
          (singlenft.count == 100 && singlenft.minting_counter == 1) ||
          (singlenft.count == 200 && singlenft.minting_counter == 2)
        ) {
          nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
          increment_each_data = 0.00365946;
        } else if (
          (singlenft.count == 500 && singlenft.minting_counter == 1) ||
          (singlenft.count == 1000 && singlenft.minting_counter == 2)
        ) {
          nftContractOf = new web3.eth.Contract(
            GLABA_NFT_ABI_500,
            GLABA_NFT_500
          );
          increment_each_data = 0.0109232;
        } else if (
          (singlenft.count == 1000 && singlenft.minting_counter == 1) ||
          (singlenft.count == 2000 && singlenft.minting_counter == 2)
        ) {
          nftContractOf = new web3.eth.Contract(
            GLABA_NFT_ABI_1000,
            GLABA_NFT_1000
          );
          increment_each_data = 0.0182093;
        } else if (
          (singlenft.count == 2500 && singlenft.minting_counter == 1) ||
          (singlenft.count == 5000 && singlenft.minting_counter == 2)
        ) {
          nftContractOf = new web3.eth.Contract(
            GLABA_NFT_ABI_2500,
            GLABA_NFT_2500
          );
          increment_each_data = 0;
        } else if (
          (singlenft.count == 5000 && singlenft.minting_counter == 1) ||
          (singlenft.count == 10000 && singlenft.minting_counter == 2)
        ) {
          nftContractOf = new web3.eth.Contract(
            GLABA_NFT_ABI_5000,
            GLABA_NFT_5000
          );
          increment_each_data = 0.0910139;
        }
        let arr = [];

        /// 100% USDT

        if (singlenft.minting_counter == 1) {
          let mintingbnbPrice_Toke_2 = await nftContractOf.methods
            .getmintPay2Price(Count)
            .call();
          mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2);
          arr.push({
            name: "Mint with 100% USDT",
            price: mintingbnbPrice_Toke_2,
          });
          setSelectedValue({ ...selectedValue, price: mintingbnbPrice_Toke_2 });
        } else if (singlenft.minting_counter == 2) {
          let mintingbnbPrice_Toke_2 = await nftContractOf.methods
            .getmintPay2Price(Count)
            .call();
          mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2);
          arr.push({
            name: "Mint with 100% USDT",
            price: mintingbnbPrice_Toke_2,
          });
          setSelectedValue({ ...selectedValue, price: mintingbnbPrice_Toke_2 });
        }

        /// 100 % Token---------------------

        if (singlenft.minting_counter == 1) {
          let mint100Token = await nftContractOf.methods
            .getmintPay3Price(Count)
            .call();
          mint100Token = web3.utils.fromWei(mint100Token);
          mint100Token = parseFloat(mint100Token).toFixed(4);

          arr.push({
            name: "Mint with 100% Token",
            price: mint100Token,
          });
        } else if (singlenft.minting_counter == 2) {
          let mint100Token = await nftContractOf.methods
            .getmintPay3Price(Count)
            .call();
          mint100Token = web3.utils.fromWei(mint100Token);
          mint100Token = parseFloat(mint100Token).toFixed(4);
          arr.push({
            name: "Mint with 100% Token",
            price: mint100Token,
          });
        }

        /// 50 % USDT---------------------

        if (singlenft.minting_counter == 1) {
          let mint50USDT = await nftContractOf.methods
            .getmintPay5Price(Count)
            .call();
          mint50USDT = web3.utils.fromWei(mint50USDT);
          mint50USDT = parseFloat(mint50USDT).toFixed(4);

          arr.push({
            name: "Mint with 50% USDT & 50% Admin Wallet",
            price: mint50USDT,
          });
        } else if (singlenft.minting_counter == 2) {
          let mint50USDT = await nftContractOf.methods
            .getmintPay5Price(Count)
            .call();
          mint50USDT = web3.utils.fromWei(mint50USDT);
          mint50USDT = parseFloat(mint50USDT).toFixed(4);
          arr.push({
            name: "Mint with 50% USDT & 50% Admin Wallet",
            price: mint50USDT,
          });
        }

        /// 50% Token---------------------

        if (singlenft.minting_counter == 1) {
          let mint50Token = await nftContractOf.methods
            .getmintPay4Price(Count)
            .call();
          mint50Token = web3.utils.fromWei(mint50Token);
          mint50Token = parseFloat(mint50Token).toFixed(4);

          arr.push({
            name: "Mint with 50% Token & 50% Admin Wallet",
            price: mint50Token,
          });
        } else if (singlenft.minting_counter == 2) {
          let mint50Token = await nftContractOf.methods
            .getmintPay4Price(Count)
            .call();
          mint50Token = web3.utils.fromWei(mint50Token);
          mint50Token = parseFloat(mint50Token).toFixed(4);
          arr.push({
            name: "Mint with 50% Token & 50% Admin Wallet",
            price: mint50Token,
          });
        }

        /// 50% USDT and 50% Token------

        let Token50Price;
        let mintingbnbPrice_Toke_1 = await nftContractOf.methods
          .getmintPay1Price(Count)
          .call();
        Token50Price = mintingbnbPrice_Toke_1.token1;
        Token50Price = web3.utils.fromWei(Token50Price.toString());
        mintingbnbPrice_Toke_1 = mintingbnbPrice_Toke_1.token0;
        mintingbnbPrice_Toke_1 = web3.utils.fromWei(
          mintingbnbPrice_Toke_1.toString()
        );
        mintingbnbPrice_Toke_1 = Number(mintingbnbPrice_Toke_1);
        if (singlenft.minting_counter == 1) {
          mintingbnbPrice_Toke_1 = `$${mintingbnbPrice_Toke_1} & Token ${parseFloat(
            Token50Price
          ).toFixed(4)}`;
          arr.push({
            name: "50% USDT & 50% Token",
            price: mintingbnbPrice_Toke_1,
          });
        } else if (singlenft.minting_counter == 2) {
          mintingbnbPrice_Toke_1 = `$${mintingbnbPrice_Toke_1} & Token ${parseFloat(
            Token50Price
          ).toFixed(4)}`;
          arr.push({
            name: "50% USDT & 50% Token",
            price: mintingbnbPrice_Toke_1,
          });
        }

        // ------------ 85% USDT--------------

        if (singlenft.minting_counter == 1) {
          let mint85USDT = await nftContractOf.methods
            .getmintPay6Price(Count)
            .call();
          mint85USDT = web3.utils.fromWei(mint85USDT);
          arr.push({
            name: "Mint with 85% USDT & 15% Rapid Fund",
            price: mint85USDT,
          });
        } else if (singlenft.minting_counter == 2) {
          let mint85USDT = await nftContractOf.methods
            .getmintPay6Price(Count)
            .call();
          mint85USDT = web3.utils.fromWei(mint85USDT);
          arr.push({
            name: "Mint with 85% USDT & 15% Rapid Fund",
            price: mint85USDT,
          });
        }

        // ------------ 85% Token--------------
        if (singlenft.minting_counter == 1) {
          let mint85Token = await nftContractOf.methods
            .getmintPay7Price(Count)
            .call();
          mint85Token = web3.utils.fromWei(mint85Token);
          mint85Token = parseFloat(mint85Token).toFixed(4);
          arr.push({
            name: "Mint with 85% Token & 15% Rapid Fund",
            price: mint85Token,
          });
        } else if (singlenft.minting_counter == 2) {
          let mint85Token = await nftContractOf.methods
            .getmintPay7Price(Count)
            .call();
          mint85Token = web3.utils.fromWei(mint85Token);
          mint85Token = parseFloat(mint85Token).toFixed(4);
          arr.push({
            name: "Mint with 85% Token & 15% Rapid Fund",
            price: mint85Token,
          });
        }

        /// 42% USDT and 42% Token------

        let TokenPrice;
        let mintingbnbPrice_42Both = await nftContractOf.methods
          .getmintPay8Price(Count)
          .call();
        TokenPrice = mintingbnbPrice_42Both.token1;
        TokenPrice = web3.utils.fromWei(TokenPrice.toString());
        mintingbnbPrice_42Both = mintingbnbPrice_42Both.token0;
        mintingbnbPrice_42Both = web3.utils.fromWei(
          mintingbnbPrice_42Both.toString()
        );
        mintingbnbPrice_42Both = Number(mintingbnbPrice_42Both);
        if (singlenft.minting_counter == 1) {
          mintingbnbPrice_42Both = `$${mintingbnbPrice_42Both} & Token ${parseFloat(
            TokenPrice
          ).toFixed(4)}`;
          arr.push({
            name: "42% USDT & 42% Token & 15% Rapid Fund",
            price: mintingbnbPrice_42Both,
          });
        } else if (singlenft.minting_counter == 2) {
          mintingbnbPrice_42Both = `$${mintingbnbPrice_42Both} & Token ${parseFloat(
            TokenPrice
          ).toFixed(4)}`;
          arr.push({
            name: "42% USDT & 42% Token & 15% Rapid Fund",
            price: mintingbnbPrice_42Both,
          });
        }

        setPriceArray(arr);
      } catch (e) {
        console.log("Error while Get Vale ", e);
      }
    }
  };

  useEffect(() => {
    getVAlues();
  }, [singlenft, value, netCoupon, User_Api_Amount, Count]);

  return (
    <>
      <div className="NftMain CollectionMain">
        <Row>
          <Col xs={12} sm={12} md={3}>
            <div className="Nft_cardMain ">
              {singlenft && singlenft?.imageUrl ? (
                <Image
                  src={singlenft?.imageUrl}
                  alt="Image description"
                  fluid={true}
                  className="CollectionCrdImg"
                />
              ) : singlenft.videoUrl ? (
                <video controls className="CollectionCrdvid">
                  <source src={singlenft?.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={nftsImage}
                  alt="Image description"
                  fluid={true}
                  className="CollectionCrdImg"
                />
              )}

              <div className="nftsPrice">
                <span>
                  {singlenft && singlenft?.price
                    ? `${singlenft?.title}`
                    : "$0.10"}
                </span>
                <span>
                  <Image src={hart} alt="Image description" fluid={true} />
                  {singlenft && singlenft?.count ? (
                    <>
                      $
                      {singlenft?.count == "100"
                        ? "50"
                        : singlenft?.count == "500"
                        ? "100"
                        : singlenft?.count == "1000"
                        ? "500"
                        : singlenft?.count == "2500"
                        ? "1000"
                        : "2500"}
                    </>
                  ) : (
                    "50"
                  )}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <div className="NftArt">
              <div className="NftArt_Count">
                <button disabled onClick={() => dispatch(setValue(Count - +1))}>
                  -
                </button>
                <div className="NftArt_CountOutout">{Count}</div>
                <button disabled onClick={() => dispatch(setValue(Count + +1))}>
                  +
                </button>
              </div>
              <div className="BUSD_Mian">
                {selectedValue && (
                  <button onClick={mint}>
                    {Spinner ? (
                      <>
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      <>
                        {selectedValue?.name} - {selectedValue?.price}
                      </>
                    )}
                  </button>
                )}

                <div className="BUSD_text">
                  <Form.Select onChange={handleChange}>
                    {PriceArray?.map((value) => (
                      <>
                        <option value={JSON.stringify(value)} key={value?.name}>
                          {value?.name} - {value?.price}
                        </option>
                      </>
                    ))}
                  </Form.Select>
                </div>
              </div>
              <div className="NftArt_text">
                <h6>NFT Name</h6>
                <h6>{singlenft.title}</h6>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CollectionNFT;
