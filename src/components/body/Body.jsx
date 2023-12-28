import RestaurantCard from "../restaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../shimmerCard/shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../../utils/customHooks/useRestaurantsList";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  const {
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  } = useRestaurantsList();

  const onFilter = () => {
    setFilteredRestaurants(
      allRestaurants?.filter((res) => res.info.avgRating > 4.3)
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offline, check your network status</h1>;

  //conditional rendering
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="search-box "
            value={searchText}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              const filteredRestaurantsList = allRestaurants?.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurantsList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            onFilter();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

//React hooks
// - Normal JS utility functions
//most imp hooks:
// - useState()
// - useEffect()
