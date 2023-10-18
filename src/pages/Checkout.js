import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { productData } = useSelector((state) => state.cart);

  let totalPrice = 0;
  productData.map(
    (product) => (totalPrice += product.quantity * product.price)
  );
  return (
    <div className="items-center">
      <div className="relative top-[130px] left-[700px] text-2xl font-bold">
        <h1>Your order is successfully Placed....</h1>
        <span className="relative top-[10px]">
          Total Price: INR {totalPrice}{" "}
        </span>
        <p className="relative top-[20px]">Thank you ,Shop Again...</p>
      </div>
      <Link to="/">
        <button className="flex items-center gap-1 text-gray-800 hover:text-black duration-300 relative left-[380px] top-[200px] text-base">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
