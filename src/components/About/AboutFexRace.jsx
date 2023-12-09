import React from "react";
import Earn from "../../assets/images/icons/earn.png";
import Engage from "../../assets/images/icons/engage.png";
import Learn from "../../assets/images/icons/learn.png";
import Race from "../../assets/images/icons/race.png";
import Trade from "../../assets/images/icons/trade.png";
import Play from "../../assets/images/icons/play.png";

const AboutFexRace = () => {
  const about = [
    {
      logo: Play,
      title: "Play2Earn",
      description: "Race to Earn",
    },
    {
      logo: Engage,
      title: "Engage2Earn",
      description: "Player Activity",
    },
    {
      logo: Race,
      title: "Gover2Earn",
      description: "Host Races",
    },
    {
      logo: Learn,
      title: "Learn2Earn",
      description: "Academy Q&A",
    },
    {
      logo: Earn,
      title: "Breed2Earn",
      description: "Mint NFTs",
    },
    {
      logo: Trade,
      title: "Trade2Earn",
      description: "Marketplace",
    },
  ];

  return (
    <div className="container my-5" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {about.map((item, index) => (
          <div className="col" key={index}>
            <div className="d-flex flex-column justify-content-center align-items-center py-3 rounded-lg bg-succes text-black">
              <img
                src={item.logo}
                alt="logo"
                className="img-fluid w-30"
                style={{ maxWidth: "100%", maxHeight: "80px", borderRadius: "20px" }}
              />
              <h1 className="text-lg font-medium text-center my-3">{item.title}</h1>
              <p className="text-center text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFexRace;
