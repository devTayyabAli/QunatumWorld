import React, { useEffect } from "react";
import { Nav, NavItem, Image } from "react-bootstrap";
import minTnft from "../../assets/images/minTnft.png";
import ArrowDown from "../../assets/images/ArrowDown.png";
import team from "../../assets/images/team.png";
import income from "../../assets/images/income.png";
import ticket from "../../assets/images/ticket.png";
import withdraw from "../../assets/images/withdraw.png";
import address from "../../assets/images/address.png";
import contest from "../../assets/images/contest.png";
import support from "../../assets/images/support.png";
import { Link } from "react-router-dom";
import scrollreveal from "scrollreveal";

import { useDispatch } from "react-redux";
import { UpdateMobileMenu } from "../../redux/Slices/MobileSlice";
// import { Support } from "@mui/icons-material";
import {
  MintNFT,
  Address,
  AllIncome,
  ContestReward,
  Generate_Coupon,
  Activation_Fund,
  TeamDetails,
  Withdrawal,
  tutorial,
  users,
} from "./MenuData.js";

const MenuList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `.SideBarMain,.MainNabBar .nav-item ,.dashboardItem,.logoutIcon,.SideBottomMain
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  const closeMobileMenu = (e) => {
    e.preventDefault();
    dispatch(UpdateMobileMenu(false));
  };

  return (
    <>
      <Nav className="flex-column MainNabBar" style={{ lineheight: "60px" }}>
        {/* <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={minTnft} alt="Image description" fluid={true} />
            Mint NFT
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>
          <div className="Sidebar_submenu">
            {MintNFT?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem> */}
        <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={team} alt="Image description" fluid={true} />
            Team Details
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>

          <div className="Sidebar_submenu">
            {TeamDetails?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem>
        <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={income} alt="Image description" fluid={true} />
            All Income
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>

          <div className="Sidebar_submenu">
            {AllIncome?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem>
        {/* <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={ticket} alt="Image description" fluid={true} />
            Rapid Fund
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>

          <div className="Sidebar_submenu">
            {Generate_Coupon?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem> */}
        <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={ticket} alt="Image description" fluid={true} />
            Activation Fund
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>

          <div className="Sidebar_submenu">
            {Activation_Fund?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem>
        <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={withdraw} alt="Image description" fluid={true} />
            Withdrawal
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>

          <div className="Sidebar_submenu">
            {Withdrawal?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem>
        {/* <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={address} alt="Image description" fluid={true} />
            Address
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>

          <div className="Sidebar_submenu">
            {Address?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem> */}
        <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={team} alt="Image description" fluid={true} />
            User
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>
          <div className="Sidebar_submenu">
            {users?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem>
        {/* <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={support} alt="Image description" fluid={true} />
            Support
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>
          <div className="Sidebar_submenu">
            {tutorial?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem> */}
        {/* <NavItem className="SideMain HaveSubItem">
          <div className="MainMenu">
            <Image src={contest} alt="Image description" fluid={true} />
            Contest
            <Image src={ArrowDown} alt="Image ArrowDown" fluid={true} />
          </div>
          <div className="Sidebar_submenu">
            {ContestReward?.map((value, index) => {
              return (
                <>
                  <div key={index} onClick={closeMobileMenu}>
                    <Link to={value.url} className={value.className}>
                      {value.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </NavItem> */}
      </Nav>
    </>
  );
};

export default MenuList;
