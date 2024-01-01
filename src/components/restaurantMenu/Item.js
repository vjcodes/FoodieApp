import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Item = ({ item, inCart }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="border-b  flex justify-between items-center h-[10rem] p-4">
      <div className="flex-col items-start w-10/12">
        <div className="border w-8">{item.isVeg ? "🟢" : "🔴"}</div>
        <div className="w-fit">{item.name}</div>
        <div className="w-fit">₹{item.price}</div>
        <div className="w-[70%] text-left text-gray-500 text-sm">
          {item.description}
        </div>
      </div>
      <div className="h-full w-2/12">
        <div className="absolute mx-7">
          {!inCart && (
            <button
              onClick={handleAddItem}
              className="px-10 py-3 bg-white shadow-lg rounded-lg border text-green-600"
            >
              Add +
            </button>
          )}

       
        </div>
        <img
          className="rounded-lg h-[100%] w-[100%]"
          src={`${CDN_URL}${item.imageId}`}
        />
      </div>
    </div>
  );
};

export const itemInCart = (Item) => {
  return (props) => {
    return <Item item={props.item} inCart={props.inCart} />;
  };
};

export default Item;
