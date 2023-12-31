import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item, { itemInCart } from "../restaurantMenu/Item";
import { clearCart } from "../../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const ItemInCart = itemInCart(Item);
  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <div className="text-center">
          {" "}
          <div className="font-bold text-xl">Cart</div>
          <button
            onClick={() => dispatch(clearCart())}
            className="p-2 m-2 bg-black text-white rounded-lg"
          >
            Clear Cart
          </button>
        </div>

        {cartItems.map((item) => (
          <ItemInCart item={item} inCart={true} />
        ))}
        {cartItems.length === 0 && <h1>Your cart is empty...</h1>}
      </div>
    </div>
  );
};

export default CartPage;
