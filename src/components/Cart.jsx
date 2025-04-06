// Cart.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const addingToCart = () => {
    dispatch(addToCart());
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded-2xl shadow-lg">
      <img
        src="https://t3.ftcdn.net/jpg/05/25/37/30/360_F_525373026_mEvYH9lgyphjWukE2aiqp4O20xSTiZ0g.jpg"
        alt="Product"
        className="w-full h-48 object-cover rounded-xl"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">Product Title</h2>
      <p className="text-sm text-gray-600">$29.99</p>
      <button
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
        onClick={addingToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
