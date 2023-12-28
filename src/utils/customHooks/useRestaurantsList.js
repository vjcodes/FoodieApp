import { useEffect, useState } from "react";

const useRestaurantsList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.677305&lng=77.498337&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();

      //optional chaining
      const getAllRestaurants = await jsonData?.data?.cards[4]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants;

      setAllRestaurants(getAllRestaurants);
      setFilteredRestaurants(getAllRestaurants);
    };

    fetchData();
  }, []);

  return {
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurantsList;
