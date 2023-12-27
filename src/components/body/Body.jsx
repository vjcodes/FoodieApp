import RestaurantCard from "../restaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../shimmerCard/shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.677305&lng=77.498337&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData?.data?.cards[5]?.card?.card);

    //optional chaining
    const getAllRestaurants = await jsonData?.data?.cards[4]?.card?.card
      ?.gridElements?.infoWithStyle?.restaurants;
    // console.log(getAllRestaurants);
    setAllRestaurants(getAllRestaurants);
    setFilteredRestaurants(getAllRestaurants)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFilter = () => {
    setFilteredRestaurants(
      allRestaurants?.filter((res) => res.info.avgRating > 4.3)
    );
  };

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
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
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
