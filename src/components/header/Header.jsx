import { useContext, useEffect, useState } from "react";
import Foodie from "../../assets/Foodie.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  // You should always take the specific state of a store not the whole store
  // const store = useSelector(store) //THIS IS NOT RIGHT APPROACH
  // ==> as if we take the whole store in this component
  // then if any changes happen in any state throughout the store which has
  // no relation with this component then also this component will get
  // rendered, which is not right as it can make our app slow

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

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
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>
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
