
import HeroSection from "../../HeroSection/HeroSection"
import Auction from "../../Auctions/Auction";
import About from "../../About/About";
import Work from "../../Works/Work";
import BusinessModel from "../../About/BusinessModel";
import AboutFexRace from "../../About/AboutFexRace";
import Contact from "../../Contact/Contact";
import CircularImageScroller from "../../NftCollection/CircularImageScroller";
import Partners from "../../Partners/Partners";
import HowToPlay from "../../HowToPlay/HowToPlay";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <Auction />
      <About />
      <Work />
      <BusinessModel />
      <CircularImageScroller />
      <HowToPlay />
      <AboutFexRace />
      <Partners />
      <Contact />
    </>
  );
};

export default Landing;
