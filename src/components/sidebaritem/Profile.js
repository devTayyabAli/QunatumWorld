import React from "react";
import { Image } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";
import borderImage from "../../assets/images/borderImage.png";
import { useSelector } from "react-redux";

const Profile = ({ name }) => {
  const user = useSelector((state) => state.UserAuth.userId);

  return (
    <>
      <div className="profileMain">
        {/* <Image className="top_logo" src={logo} alt="Image description" fluid={true} /> */}
        <h6>{name}</h6>
        <span>ID. {user}</span>
        <Image
          src={borderImage}
          alt="border image"
          fluid={true}
          className="border_image"
        />
      </div>
    </>
  );
};

export default Profile;
