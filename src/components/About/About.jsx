import Horse1 from "../../assets/images/horse1.png";

const About = () => {
  return (
    <>
      <div className="container" style={{ backgroundColor: "#090d0a", color: "white" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="px-4 py-5 mt-4 mt-md-0">
              <img
                src={Horse1}
                alt="Horse 1"
                className="img-fluid d-none d-md-block larger-image"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase mb-3 text-success font-weight-medium">
              WELCOME TO quantumworld.club
            </h4>

            <h1 className="text-2xl font-weight-bold text-uppercase">
              QUANTUMWORLD offers real crypto rewards through exciting horse racing
            </h1>

            <p className="mt-4 mt-md-8 text-muted">
            QUANTUMWORLD introduces a thrilling dimension to the NFT experience with its dynamic horse racing platform, where enthusiasts can engage in exhilarating races and earn real cryptocurrency rewards.
            </p>
            <div className="d-flex justify-content-center">
              <img
                src="https://www.unitedgamers.gg/wp-content/uploads/2022/02/Pegaxy-race.jpg"
                alt="Random Race"
                className="img-fluid smaller-image"
                style={{ maxWidth: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
