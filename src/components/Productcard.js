import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Productcard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="w-full relative group">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>

      <div className="w-full border-[1px] px-3 py-5">
        <div className="flex flex-column ">
          <div className="flex justify-between items-center">
            <h2 className="font-title first-letter:Font text-base font-bold right-3">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="  text-sm relative w-32 justify-end overflow-hidden  ">
            <div className="relative  left-3 flex flex-row gap-3">
              <p className="line-through text-gray-500">
                INR{product.oldPrice}
              </p>
              <p className="font-semibold">INR{product.price}</p>
            </div>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <p
          onClick={() =>
            dispatch(
              addToCart({
                _id: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                description: product.description,
              })
            )
          }
          className=" relative top-3 left-[60px] w-[200px] font-bold text-gray-800 hover:cursor-pointer"
        >
          ADD TO CART
          <span className="relative left-[115px] bottom-5 font-bold ">
            <BsArrowRight />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Productcard;
