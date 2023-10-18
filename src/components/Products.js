import React from "react";
import ProductsCard from "./Productcard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-blue-600 text-white py-2 w-80 text-center">
          Buy your favourite
        </h1>
        <span className="w-20 h-[3px] bg-red-500"></span>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
