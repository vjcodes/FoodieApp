import React, { useEffect, useState } from "react";
import Shimmer from "../shimmerCard/shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

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
