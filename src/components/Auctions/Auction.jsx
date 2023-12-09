import Card from "../Card";
import Zrak from "../../assets/images/Zrak.png";
import Wasser from "../../assets/images/Wasser.png";
import Gleba from "../../assets/images/Gleba.png";
import Foudre from "../../assets/images/Foudre.png";
import Brannbil from "../../assets/images/Brannbil.png";
import '../Auctions/Auctions.css';

const auction_data = [
  {
    id: 1,
    image: Gleba,
    name: "BARBARO",
    description:
      "A digital symbol of unbridled strength, embodying the spirit of a majestic stallion in the digital realm.",
    price: "50",
  },
  {
    id: 2,
    image: Wasser,
    name: "GRAYDAR",
    description:
      "A digital embodiment of graceful elegance, capturing the timeless allure of a majestic grey horse.",
    price: "100",
  },
  {
    id: 3,
    image: Zrak,
    name: "ALYDAR",
    description:
      "Radiating power and charisma, ALYDAR embodies the spirit of a racing champion in the digital realm.",
    price: "500",
  },
  {
    id: 4,
    image: Brannbil,
    name: "DAMASCUS",
    description:
      "A digital tribute to equine majesty, embodying the elegance and power of a noble steed Damascus horses.",
    price: "1000",
  },
  {
    id: 5,
    image: Foudre,
    name: "HANOVERIAN",
    description:
      "A digital celebration of equine elegance and grace, preserving the charm of Hanoverian horses. ",
    price: "2500",
  },
];

const Auction = () => {
  return (
    <div className="container" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <h1 className="text-center display-3 my-">OUR PRODUCTS</h1>
      <div className="row con">
        {auction_data.map((item) => {
          return (
            <div className="col-lg-2 product col-md-4  col-12 mb-4" key={item.id}>
              <Card {...item} />
              {/* <p className="text-center small mt-2">{item.name}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Auction;
