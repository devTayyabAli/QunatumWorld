import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import horse from "../assets/images/horse.png";
import { toast } from "react-toastify";
import { API } from "../API/Api";
import { useForm } from "react-hook-form";
import Header from "../components/Landing_Page/Header/Header";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login-main.css";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../redux/Slices/UserAuth";

function Franchise_main() {
  const userDetail = useSelector((state) => state.nft.userDetail);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const [inputdata, setinputdata] = useState({ uid: "", password: "" });
  const [Ip, setIP] = useState();
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [checkbox, setcheckbox] = useState(false);
  const [spinnerload, setspinnerload] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [LoginId,setLoginId]=useState('');

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
    uid: yup.string().required("Id is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const CheckNumber = async (e) => {
    let { value } = e.target
    setLoginId(value)

    // const newValue =value.replace(/[^0-9]/gi, "");
    // if (newValue == '') {
    //   setLoginId('')
    // } else {
    //   setLoginId(newValue)
    // }
  }


  const onSubmitHandler = async (data) => {
    setspinnerload(true);
    // let response = await axios.get('https://geolocation-db.com/json/')
    // console.log("response Geolocation",response.data.IPv4);
    // setIP(response.data.IPv4)
    // response = response.data.IPv4
    let res = await API.post("/Loginfranchise", {
      franchise: data.uid,
      password: data.password,
    });
    // let res_here = await API.get(`/getDashboardValues?id=${data.uid}`);
    // // console.log("Response",res_here.data.data.address);
    console.log("UserloginNew", res.data.data);
    let UserID = res.data.data
    if (res.data.data.result == "Successfull") {
      toast.success(`Login Successful`);
      dispatch(updateAuth({ isAuth: true, userId: data.uid }));
      localStorage.setItem("userData", JSON.stringify(UserID));
      localStorage.setItem("uid_output_six", res.data.data.uid_output_six);
      localStorage.setItem("uid_output_seven", res.data.data.uid_output);

      // localStorage.setItem("user", data.uid);
      // if(res_here.data.data[0].address==""){

      //     history('/Wallet_Address_change')
      // }else{
      navigate("/dashboard");
      window.location.reload();
    } else {
      toast.error(`${res.data.data.result}`);
      console.log(res.data.data.result);
      setspinnerload(false);
    }
    setspinnerload(false);
  };

  return (
    <div className="theme-orange main_div_her_login_red ">
      <Header />


      <section className="logginn" id="login">
        <div className="login-text">
          <h1>
            SIGN IN YOUR
            <br /> <span>FRANCHISE ACCOUNT</span>

          </h1>
          <p>To Keep connected with us please login with your personal info.</p>
          <div id="login-form">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="login-form-inputs">
              <label className="lable-ip">Login Id</label>
                <input
                  type="text"
                  name="firstname"
                  {...register("uid", { required: true })}
                  placeholder="Login"

                  required
                  value={LoginId}
                  // maxLength={8}
                  onChange={(e) => {
                    CheckNumber(e)
                  }}
                />
                <p className="text-white">{errors.uid?.message}</p>
                {/* <label className="lable-ip">Login Id</label> */}
                <label className="lable-ip">Password</label>
                <input
                  name="lastname"
                  type={values.showPassword ? "text" : "password"}
                  maxLength={80}
                  // value={values.password}
                  {...register("password", { required: true })}
                  onChange={handleChange("password")}
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
                  placeholder="Password"
                  required
                />
                <p className="p_tage">{errors.password?.message}</p>
                {/* <label className="lable-ip">Password</label> */}
              </div>
              <div className="form-inputs-checkbox">
                <input
                  className="checkbox checkbox-1"
                  type="checkbox"
                  name="phone"
                  checked={checkbox}
                  onChange={(e) => setcheckbox(e.target.checked)}
                />
                <p className="checkbox-p">
                  Remember Me,{" "}
                  <Link className="signup-link lable-ip" to="/Forgat_Password">
                    Forgot Password?
                  </Link>
                </p>
              </div>
              <div className="login-btn">
                <button
                  className="nav-btn nav-btn-1 active-btn-header signin-btnn"
                  type="submit"
                >
                  {spinnerload ? (
                    <>
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </>
                  ) : (
                    "Sign In"
                  )}{" "}
                </button>
              </div>
              <p className="form-p">
                Create An Account{" "}
                <Link className="signup-link" to="/Register_main">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="login-img">
          <img alt="nftxpress login image" src={horse} />
        </div>
      </section>
      {/* <Footer /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Franchise_main;
