import React, { useState } from "react";
import globe from "../assets/images/globe.png";
import { useEffect } from "react";
import Select from "react-select";
import "./Register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loadWeb3 } from "../apis/api";
import { API } from "../API/Api";
import Header from "../components/Landing_Page/Header/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Footer from "./Landing_Page/Footer/Footer";

function Register_main() {
  let history = useNavigate();
  const [checkbox, setcheckbox] = useState(false);
  const [userId, setuserId] = useState(null);
  const [spinnerload, setspinnerload] = useState(false);
  const [positionSid, setposition] = useState(null);
  const [checkreffarl, setcheckreffarl] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [RefID, setRefID] = useState(null);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [fname, setfname] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const schema = yup.object().shape({
    // sid: yup.string().required("Sponser id is required"),
    f_name: yup.string().required("User name is required"),
    // mob: yup.string().required("Mobile number is required"),
    // .min(10, "Mobile number length should be at least 10 characters")
    // .max(10, "Mobile number cannot exceed more than 10 characters"),
    // position: yup.string().required("Position is required"),
    email: yup.string().email().required("Email is required"),
    mob: yup.string().required("Phone number is required"),
    psw: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    cpsw: yup
      .string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([yup.ref("psw")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = async (data) => {
    setspinnerload(true);

    try {
      console.log("positionSid");
      let res = await API.post(
        "/registration",

        checkreffarl
          ? {
            sid: RefID,
            f_name: data.f_name,
            uid: "0",
            email: data.email,
            psw: data.psw,
            mob: data.mob,
            countryId: selectedCountry.value
            // countryname: countryName,
            // countryvalue: countryvalue,
          }
          : {
            sid: data.sid,
            f_name: data.f_name,
            uid: "0",
            email: data.email,
            psw: data.psw,
            mob: data.mob,
            countryId: selectedCountry.value
            // position: data.position,
            // countryname: countryName,
            // countryvalue: countryvalue,
          }
      );
       console.log("reg",res.data.data)
      if (res.data.data.result == "Successfull") {
        localStorage.setItem("Name", data.f_name);
        toast.success(`Successful`);
        // console.log("Successful", res.data);
        let uid = res.data.data.uid;
        // console.log("uid", uid);
        let reg_uid = localStorage.setItem("reg_uid", uid);
        history(`/welComePage/${uid}`)
        // history(`/OTP/${uid}`);
      } else {
        toast.error(`${res.data.data.result}`);
        setspinnerload(false);
      }
      setspinnerload(false);
    } catch (error) {
      console.log("API ERROR", error);
    }
  };

  const getresponseId = async (e) => {
    let { value } = e.target;
    const newValue = value.replace(/[^0-9]/gi, "");
    // console.log("newValue", newValue);
    if (newValue == "") {
      setuserId("");
      setRefID("");
    } else {
      setRefID(newValue);
      let res = await API.get(`/check_sponsorid?uid=${newValue}`);
      console.log("check_sponsorid", res);
      if (res.data.success == true) {
        let { result } = res.data.data;
        setuserId(result);
      } else {
        setuserId("Wrong sponser id");
      }
    }
  };

  const checkUserName = async (e) => {
    let { value } = e.target;
    const newValue = value.replace(/[^A-Za-z0-9_ ]/g, "");
    if (newValue == "") {
      setfname("");
    } else {
      setfname(newValue);
    }
  };

  const ReferralAddress = async () => {
    const user = localStorage.getItem("user");
    let ress = JSON.parse(user);
    let uId = ress?.user_id;

    try {
      let URL = window.location.href;
      if (URL.includes("referrallink")) {
        setcheckreffarl(true);
        let pathArray = URL.split("&");
        let UserID = pathArray[pathArray.length - 1];
        // console.log("URL",UserID);
        UserID = UserID.split("=");
        UserID = UserID[UserID.length - 1];
        // console.log("LAST",UserID);
        setRefID(UserID);
        let urllast = pathArray[pathArray.length - 1];
        let n = urllast.split("=");
        // console.log("setposition", n[n.length - 1]);
        setposition(n[n.length - 1]);
        // let res = await API.get(`/checkSponser?id=${UserID}`);
        let res = await API.get(`/check_sponsorid?uid=${UserID}`);
        // console.log("check_sponsoridNew",res.data);
        if (res.data.success == true) {
          // let { result } = res.data.data;

          let { result } = res.data.data;
          setuserId(result);
        } else {
          setuserId("Wrong sponser id");
        }


      } else {
      }
    } catch (e) {
      console.log("Erroe Whille Referral Fuction Call", e);
    }
  };

  useEffect(() => {
    ReferralAddress();

    Country_Details();
  }, []);


  const Country_Details = async () => {
    try {
      let res = await API.get('/countryList');
      console.log("res", res.data.data[0]);
      setCountries(res.data.data[0]);
    } catch (e) {
      console.log("Country API",e);
    }
  }
  // console.log("selectedCountry", selectedCountry);
  // console.log("label",countryName);
  // let countryName = selectedCountry.Countryname;
  // let countryvalue = selectedCountry.id;
  // console.log("countryName==>", countries);
  // console.log("countryvalue==>", countryvalue);
  // useEffect(() => {
  //   fetch(
  //     "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCountries(data.countries);
  //       setSelectedCountry(data.userSelectValue);
  //     });


  // }, []);

  const options = countries.map(country => ({
    value: country.id,
    label: country.Countryname
  }));


  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    // You can access the selected country's ID using selectedOption.value;;.value);
  }

  console.log("country ",selectedCountry)



  return (
    <div className="theme-orange main_div_her_login_red ">
      <Header />

      <section id="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                  <div className="signup-text">
                    <h1>SIGN UP</h1>
                    <p>Enter your personal details to begin your journey with us.</p>
                    <div id="signup-form">
                      <form onSubmit={handleSubmit(onSubmitHandler)}>

                        <div className="form-inputs">
                        <div className="row">
                          <div className="col-md-6">
                          <input
                            type="text"
                            name="firstname"
                            {...register("sid", { required: true })}
                            value={RefID}
                            maxLength={8}
                            onChange={(e) => {
                              getresponseId(e);
                            }}
                            placeholder="Enter Sponsor Id"
                            required
                          />

                          </div>
                          <div className="col-md-6">
                            {/* <p className="p_tage">{errors.sid?.message}</p> */}
                            <input
                              type="text"
                              name="lastname"
                              value={userId}
                              disabled={true}
                              placeholder="Sponsor Name"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="Name"
                              maxLength={80}
                              placeholder="Name"
                              {...register("f_name", { required: true })}
                              value={fname}
                              onChange={(e) => {
                                checkUserName(e);
                              }}
                            />
                            <p className="p_tage">{errors.f_name?.message}</p>

                          </div>
                          {/* <div className="col-md-6">
                          {positionSid == null ? (
                            <>
                              <select
                                className="floating-inputs form-control select_bg"
                                data-val="true"
                                data-val-required="Position is required"
                                {...register("position", { required: true })}
                              >
                                <option value="">Select Position</option>
                                <option value="1">Left</option>
                                <option value="2">Right</option>
                              </select>
                              <p className="p_tage">{errors.position?.message}</p>
                            </>
                          ) : (
                            <input
                              className="form-control mb-3 input-log-cls"
                              placeholder="postion"
                              type="text"
                              value={positionSid}
                            />
                          )}

                          <p className="p_tage">{errors.position?.message}</p>

                          </div> */}
                          <div className="col-md-6">
                          <input
                            name="phone"
                            type={values.showPassword ? "text" : "password"}
                            // value={values.password}
                            {...register("psw", { required: true })}
                            onChange={handleChange("password")}
                            placeholder="Password"
                            maxLength={80}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  // onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <p className="p_tage">{errors.psw?.message}</p>

                          </div>
                          <div className="col-md-6">
                            <input
                              name="website"
                              type={values.showPassword ? "text" : "password"}
                              // value={values.password}
                              maxLength={80}
                              onChange={handleChange("password")}
                              placeholder="Confirm Password"
                              {...register("cpsw", { required: true })}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {values.showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />

                          </div>
                          <div className="col-md-6">
                          <input
                            type="text"
                            name="email"
                            placeholder="example@gmail.com"
                            {...register("email", { required: true })}
                            maxLength={80}
                          />
                          <p className="p_tage">{errors.email?.message}</p>

                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              name="mob"
                              placeholder="Phone Number"
                              {...register("mob", { required: true })}
                              maxLength={40}
                            />
                            <p className="p_tage">{errors.mob?.message}</p>
                          </div>

                          <div className="col-md-6">
                          <Select
        className="secl select_bg"
        styles={{ width: "100%" }}
        id="countries"
        options={options}
        value={selectedCountry}
        onChange={handleCountryChange}
      />

                          </div>
                          <div className="col-md-12">

                          </div>



                          </div>


                        </div>

                        <div className="form-inputs-checkbox">
                          <input
                            className="checkbox"
                            type="checkbox"
                            checked={checkbox}
                            onChange={(e) => setcheckbox(e.target.checked)}
                            name="phone"
                            required
                          />

                          <p className="checkbox-p">
                            I Agree your{" "}
                            <a
                              target="_blank"
                              href="https://docs.google.com/document/d/1U0ur7mYwFwYHaUPYEHsOykxUQtWrlUtp/edit?usp=sharing&ouid=104886031954054854729&rtpof=true&sd=true"
                              className="login-link"
                            >
                              Terms & condition
                            </a>
                          </p>
                        </div>
                        <div className="form-btn">
                          <button
                            className="nav-btn nav-btn-1 active-btn-header signin-btnn"
                            type="submit"
                            value="Sign Up"
                            disabled={!checkbox}
                          >
                            {spinnerload ? (
                              <>
                                <div className="spinner-border" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                              </>
                            ) : (
                              "Sign Up"
                            )}
                          </button>
                        </div>
                        <p className="form-p">
                          Already have an account{" "}
                          <Link className="login-link" to="/Login_main">
                            Log In
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
              <div className="signup-img">
                <img alt="globe " src={globe} />
              </div>
              </div>

            </div>
          </div>
        </div>


      </section>
      {/* <Footer  /> */}
      {/* <div className='space' >
<img src={spaceimg} className='sapce-img' />
</div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Register_main;
