import React from "react";
import Item from "./Item";

const ItemsList = ({ itemsList }) => {
  return (
    <div>
      {itemsList.map((item) => (
        <Item key={item?.card?.info.id} item={item?.card?.info} />
      ))}
    </div>
  );
};

export default ItemsList;
