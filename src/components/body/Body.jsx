import RestaurantCard from "../restaurantCard/RestaurantCard";
import { restaurants } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(restaurants);
  const onFilter = () => {
    setAllRestaurants(allRestaurants.filter((res) => res.info.avgRating > 4.3));
  };
  return (
    <div className="body">
      <div className="filter">
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
        {allRestaurants.map((restaurant) => (
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
