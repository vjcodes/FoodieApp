import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div>
      <div
        className="border my-4 mx-auto p-5 w-10/12 bg-gray-50
       shadow-lg "
      >
        <div
          className="flex justify-between"
          onClick={() => {
            setShowIndex();
          }}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">{showItems ? "🔼" : "🔽"}</span>
        </div>

        {showItems && <ItemsList itemsList={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
