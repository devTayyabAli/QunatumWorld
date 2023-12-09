import React from "react";
import logout from "../../assets/images/logout.png";
// import sidebarbootom from "../../assets/images/sidebarmainimage";

import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../redux/Slices/UserAuth";
const Logout = () => {
  const dispatch = useDispatch();
  const LogoutHandler = (e) => {
    dispatch(updateAuth({ isAuth: false, userId: '' }));

  };
  return (
    <>
      <div className="logoutIcon" onClick={LogoutHandler}>
        <Image src={logout} alt="Image description" fluid={true} />
        Logout
      </div>
      {/* <Image src={sidebarbootom} alt="Image description" fluid={true} /> */}

    </>
  );
};

export default Logout;
