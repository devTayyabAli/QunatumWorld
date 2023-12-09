import React, { useState, useEffect } from "react";
import BgLayout from "../sharecomponent/BgLayout";
import CountrySelect from "react-bootstrap-country-select";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { useSelector } from "react-redux";
import { API } from "../../API/Api";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Select from "react-select";

function UserInfo() {
  const Navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHandler();
  };

  const userDetail = useSelector((state) => state.nft.userDetail);
  const user = useSelector((state) => state.UserAuth.userId);

  // console.log("userDetail", userDetail);

  const [value, setValue] = useState(null);
  const [otpcheck, setotpcheck] = useState(false);
  const [spinnerload, setspinnerload] = useState(false);

  const [countries, setCountries] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({
        "value": userDetail.countryvalue,
        "label": userDetail.countryname,
});


  const [formValues, setFormValues] = useState({
    email: userDetail.email,
    walletAddress: userDetail.address,
    mob: userDetail.mobile,
    name: userDetail.f_name,
    countryname: userDetail.countryname,
    countryvalue: userDetail.countryvalue,
    otp: "",
  });

  console.log("formValues", formValues);

  const handleForm = (e) => {
    const value = e.target.value;
    console.log("forms value", value);
    console.log("forms name", e.target.name);
    const newValue =
      e.target.name === "name"
        ? value.replace(/[^A-Z0-9_ ]/gi, "")
        : e.target.name === "walletAddress"
        ? value.replace(/[^A-Z0-9]/gi, "")
        : e.target.name === "otp"
        ? value.replace(/[^0-9]/gi, "")
        : e.target.name === "mob"
        ? value.replace(/[^0-9]/gi, "")
        : value;

    setFormValues({
      ...formValues,
      [e.target.name]: newValue,
    });
  };
  const onSubmitHandler = async (data) => {
    updateProfile(data)
    // setspinnerload(true)
    // otpcheck ? updateProfile(data) : sendOTP();
    // history(`/dashboard/Update_profile_email/${emailAddress}/${wallet}`)
    // setspinnerload(false)
  };

  const sendOTP = async () => {
    let res = "";
    setspinnerload(true);
    // console.log("showAddress", emailAddress);
    setotpcheck(true);
    res = await API.post("/SendOTPProfile", {
      uid: user,
    });
    console.log("SendOTPProfile", res);
    toast.success(
      "Email with verification code has been sent to you Successfully"
    );
    setspinnerload(false);
  };

  const updateProfile = async (e) => {
    // se.etotpcheck(true)
    // e.preventDefault()
    setspinnerload(true);

    console.log("formValues", formValues);

    let countryName = selectedCountry.label;
    let countryvalue = selectedCountry.value;

    let res = await API.post("/updateprofile", {
      uid: user,
      //email: formValues.email,
      mobile: formValues.mob,
      accountaddress: formValues.walletAddress,
      f_name: formValues.name,
      countryname: countryName,
      countryvalue: countryvalue,
      otp: formValues.otp,
    });
    console.log("updateprofile", res.data.data);
    if (res.data.data == "Update Successfull") {
      toast.success(" Profile Update Successfull");
      setotpcheck(false);

      Navigate("/dashboard");
      window.location.reload();
    } else {
      toast.error(`${res.data.data}`);
      setspinnerload(false);

      // history('/dashboard/Update_profile_email')
    }
  };




  let countryName = selectedCountry.label;
  let countryvalue = selectedCountry.value;

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        //setSelectedCountry(data.userSelectValue);

      });
  }, []);

  return (
    <>
      <BgLayout className="bg_usser_main">
        <div className="bg_usser">
          <div className="BgLayout_Header">
            <h6>Profile</h6>
          </div>
          <div className="UserProfile">
            <div className="lar_fromMain">
              <form>
                <div className="lar_inputWrper">
                  <label htmlFor="email">Enter Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={formValues.email}
                    onChange={handleForm}
                    maxLength={80}
                    readOnly
                  />
                </div>
                <div className="lar_inputWrper">
                  <label htmlFor="walletAddress">Enter Wallet Address</label>
                  <input
                    name="walletAddress"
                    type="text"
                    id="walletAddress"
                    placeholder="Enter Wallet Address"
                    value={formValues.walletAddress}
                    onChange={handleForm}
                    maxLength={80}
                  />
                </div>
                <div className="lar_inputWrper">
                  <label htmlFor="username">Enter User Name</label>
                  <input
                    type="text"
                    id="username"
                    name="name"
                    placeholder="Enter User Name"
                    value={formValues.name}
                    onChange={handleForm}
                    maxLength={40}
                  />
                </div>
                <div className="lar_inputWrper">
                  <label htmlFor="username">Enter Mobile</label>
                  <input
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder="Enter Mobile"
                    value={formValues.mob}
                    onChange={handleForm}
                    maxLength={20}
                  />
                </div>
                <div className="CountrySelectMain lar_inputWrper">
                  <span>Select Country</span>
                  {/* <span>Selected : {formValues.countryname}</span> */}
                  <Select
                    styles={{ width: "100%" }}
                    id="countries"
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) =>
                      setSelectedCountry(selectedOption)
                    }
                  />

                  {/* <input
                    type="text"
                    id=""
                    name="name"
                    placeholder="Country Name"
                    readOnly
                    value={formValues.country}
                  /> */}
                  {/* <CountrySelect
                flags={true}
                defaultCountry={formValues.country}
                name='country'

                value={value}
                onChange={setValue}


              /> */}
                </div>
                {otpcheck ? (
                  <>
                    <div className="lar_inputWrper">
                      <label htmlFor="email">Enter Otp</label>
                      <input
                        type="text"
                        id="otp"
                        placeholder="Enter Otp "
                        name="otp"
                        value={formValues.otp}
                        onChange={handleForm}
                        maxLength={8}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </form>
              {otpcheck ? (
                <>
                  <div className="lar_button">
                    <button onClick={() => updateProfile()}>
                      {spinnerload == true ? (
                        <>
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>{" "}
                        </>
                      ) : (
                        " Update Profile"
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="lar_button">
                    <button
                      onClick={() => sendOTP()}
                      // disabled={(formValues.name&&formValues.email&&formValues.walletAddress&&formValues.country)?false:true}
                    >
                      {spinnerload == true ? (
                        <>
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>{" "}
                        </>
                      ) : (
                        "SEND OTP"
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </BgLayout>
      <div className="bg_usser_main"></div>
    </>
  );
}

export default UserInfo;
