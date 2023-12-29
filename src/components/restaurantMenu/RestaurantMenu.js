import React, { useEffect, useState } from "react";
import Shimmer from "../shimmerCard/shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="p-4 text-center">
      <h1 className="font-bold text-[40px]">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => {
        return (
          //Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              if (index === showIndex) {
                setShowIndex(null);
              } else {
                setShowIndex(index);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
