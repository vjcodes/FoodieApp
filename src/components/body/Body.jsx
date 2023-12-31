import RestaurantCard, {
  withPromotedLabel,
} from "../restaurantCard/RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "../shimmerCard/shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../../utils/customHooks/useRestaurantsList";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const { loggedInUser, setUserName } = useContext(UserContext);

  //conditional rendering
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="search-box border border-solid border-black "
            value={searchText}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              onFilter();
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <label className="px-4">Username</label>
          <input
            type="text"
            className="border border-black"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
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
