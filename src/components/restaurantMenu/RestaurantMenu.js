import React, { useEffect, useState } from "react";
import Shimmer from "../shimmerCard/shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   const [restaurantBasicInfo, setRestaurantBasicInfo] = useState({});
  //   const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?
      page-type=REGULAR_MENU&complete-menu=true
      &lat=28.677305&lng=77.498337&restaurantId=${resId}&
      catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData.data);

    // const { name, cuisines, costForTwoMessage } =
    //   jsonData?.data?.cards[0]?.card?.card?.info;

    // setRestaurantBasicInfo({ name, cuisines, costForTwoMessage });

    // const { itemCards } =
    //   jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
    //     ?.card?.card;
    // setRestaurantMenuItems(itemCards);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
