import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import nftuser from "../../assets/images/bannerth.jpeg";
import nftuser1 from "../../assets/images/bannerth1.jpeg";
import nftuser2 from "../../assets/images/banner3.jpg";
import nftuser3 from "../../assets/images/banner4.jpg";
import nftuser4 from "../../assets/images/user4.jpeg";
import nftuser5 from "../../assets/images/Phuket.jpeg";

import { API } from "../../API/Api";

const LatestNews = () => {

  const userDetail = useSelector((state) => state.nft.userDetail);
  const user = useSelector((state) => state.UserAuth.userId);
  console.log("userDetail",userDetail);
  const [newsArray, setnewsArray] = useState({ content: "" });

  const userNewsData = async () => {
    console.log("news test","hii");
    let responce = await API.post(`/news`)
    console.log('news', responce)
    console.log('news 1', responce.data.data[0][0])
    setnewsArray({ ...newsArray, content: responce.data.data[0][0].content })
  }

  useEffect(() => {
    userNewsData()
  }, []);

  userNewsData();
  
  return (
    <>
      <div className="MatchingLevelMain latestnewsmain">
        {/* <div className="SalesMain"> */}
        {/* <SalesItems />
          <SalesItems /> */}
        {/* </div> */}
        {/* <div className="SalesMain"> */}
        {/* <SalesItems />
          <SalesItems /> */}
        {/* </div> */}
        <div className="SalesMain_table news_height LatestNewsMain prc-1 ">
          <h4 className="text-light p-2">Latest News</h4>
          <div className="LatestNewsDetails " style={{ height: "100%" }}>
            <p className=" lead ">
              {newsArray?.content}
            </p>
          </div>
        </div>
        <div className="SalesMain_table LatestNewsImage">
          <div className="NewsImagescroll">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" style={{ height: "415px" }}>
                {/* <div class="carousel-item active">
                  <img src={nftuser5} class="d-block w-100" height="395px" alt="..." />
                </div> */}
                {/* <div class="carousel-item ">
                  <img src={nftuser} class="d-block w-100" height="395px" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={nftuser1} class="d-block w-100" height="395px" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={nftuser2} class="d-block w-100" height="395px" alt="..." />
                </div> */}
                {/* <div class="carousel-item">
                  <img src={nftuser3} class="d-block w-100" height="395px" alt="..." />
                </div> */}
              </div>
              {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button> */}
            </div>
            {/* <Image src={nftuser} art="image details" fluid={true} />
            <Image src={nftuser} art="image details" fluid={true} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
