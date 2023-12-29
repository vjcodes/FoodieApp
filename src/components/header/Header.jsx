import { useContext, useEffect, useState } from "react";
import Foodie from "../../assets/Foodie.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

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

  const data = useContext(UserContext)
  console.log(data)

  return (
    <>
      <div className="flex justify-between items-center bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
        <div className="logo-container m-4">
          <img className="w-20" src={Foodie} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button
              className="login px-4"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
            <li className="px-4 font-bold">{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
