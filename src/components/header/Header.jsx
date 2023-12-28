import { useEffect, useState } from "react";
import Foodie from "../../assets/Foodie.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

const Header = () => {
  // let btnName = "login";
  const [btnName, setBtnName] = useState("Login");

  // if no dependency array => useEffect is called on every render
  useEffect(() => {
    // console.log("use effect called");
  });

  // if empty dependency array is empty = [] =>
  // useEffect will only be called on initial render and only once on initial render
  useEffect(() => {
    // console.log("use effect empty dep array called");
  }, []);

  // if dependency aaray has some value, eg: [btnName] =>
  // useEffect will be called when that value changes
  useEffect(() => {
    // console.log("use effect with value in dep array called");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Foodie} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button
              className="login"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
