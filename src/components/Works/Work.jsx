import React from "react";

const Work = () => {
  const works = [
    {
      image:
        "https://images.news18.com/ibnlive/uploads/2021/05/1621824461_untitled-design.jpg",
      name: "Revo",
      edition: "3 Edition Limited",
      bid: "0.5",
      creator: "Jane Mie",
      avatar: "https://picsum.photos/200",
    },
    {
      image:
        "https://static.euronews.com/articles/stories/05/59/16/26/1440x810_cmsv2_3b1dfaaa-e8cb-5ada-8321-593abe5e55b7-5591626.jpg",
      name: "Revo",
      edition: "3 Edition Limited",
      bid: "0.5",
      creator: "Jane Mie",
      avatar: "https://picsum.photos/200",
    },
    {
      image:
        "https://assets.clarisco.com/clarisco+images/nft/market-places/nft-marketplace-development-like-zedrun/nft-zedrun-marketplace-development-company.webp",
      name: "Revo",
      edition: "3 Edition Limited",
      bid: "0.5",
      creator: "Jane Mie",
      avatar: "https://picsum.photos/200",
    },
  ];

  return (
    <div className="container my-5" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <div className="row">
        <div className="col-12  mx-auto">
          <div className="px-4 px-md-5 mt-4 mt-md-5">
            <h1 className="text-3xl text-md-4xl uppercase font-bold mb-4 ">
              Featured Works
            </h1>
            <p className=" text-white mt-2">
              Here are the new NFT's featured works from our top creator this
              month. Check them out and place your bid.
            </p>
            <div className="row justify-content-center mt-4">
              {works.map((item, i) => (
                <div className="col-8 col-md-4 mb-4" key={i}>
                  <img
                    src={item.image}
                    alt="img"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
