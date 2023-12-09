import logo from "../../assets/images/fex-logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent absolute">
      <div className="container px-8 pt-6">
        <div className="flex items-center">
          <img src={logo} alt="logo" width={150}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
