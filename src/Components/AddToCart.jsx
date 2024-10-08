import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/Redux/CartSlice.js";

const AddToCart = (
  {
  item,
  paddingY = "1",
  paddingX = "4",
  Bgcolor = "bg-[#E0115F]",
  textColor = "text-white",
  text = "Add to Cart",
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the item is already in the cart
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handleAddBook = () => {
    if (!isInCart) {
      dispatch(addItem(item));
    }
  };

  return (
    <button
      className={`border ${Bgcolor} ${textColor} ${isInCart ? "bg-white text-black" : ""} w-full py-${paddingY} px-${paddingX}`}
      onClick={handleAddBook}
      disabled={isInCart} // Disables the button if the item is already in the cart
    >
      {isInCart ? "In Cart" : text}
    </button>
  );
};

export default AddToCart;
