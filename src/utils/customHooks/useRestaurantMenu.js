import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetch called");
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.677305&lng=77.498337&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return resInfo;
};

export default useRestaurantMenu;
