import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { productData } = useSelector((state) => state.cart);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData &&
      productData.map((item) => {
        price += item.price * item.quantity;
        return price;
      });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <div>
      <>
        <img
          className="w-full h-60 object-cover"
          src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cartImg"
        />
        <>
          {productData.length > 0 ? (
            <div className="max-w-screen-xl mx-auto py-20 flex">
              <CartItem />
              <div className="w-1/3 bg-[#fafafa] py-6 px-4">
                <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                  <h2 className="text-2xl font-medium ">cart totals</h2>
                  <p className="flex items-center gap-4 text-base">
                    Subtotal{" "}
                    <span className="font-titleFont font-bold text-lg">
                      INR{totalAmt}
                    </span>
                  </p>
                  <p className="flex items-start gap-4 text-base">Shipping </p>
                </div>
                <p className="font-titleFont font-semibold flex justify-between mt-6">
                  Total <span className="text-xl font-bold">INR{totalAmt}</span>
                </p>
                <Link to="/checkout">
                  <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
                    proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
              <p className="text-xl text-orange-600 font-titleFont font-semibold">
                Your Cart is Empty. Please go back to Shopping and add products
                to Cart.
              </p>
              <Link to="/">
                <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                  <span>
                    <HiOutlineArrowLeft />
                  </span>
                  go shopping
                </button>
              </Link>
            </div>
          )}
        </>
      </>
    </div>
  );
};

export default Cart;
