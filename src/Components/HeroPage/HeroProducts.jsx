import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";

const HeroProducts = ({ products }) => {
  // Filter products by category 'groceries'
  const beautyProduct = products.filter((item) => item.category === "groceries");

  return (
    <div className="bg-gray-400 w-full mt-8">
      <h1 className="font-extrabold text-2xl p-4 uppercase italic text-[#E0115F]">
        Products
      </h1>
      <span className="px-2 font-semibold italic uppercase">
        {products && products.Category}
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-8 sm:grid-cols-4 gap-4">
        {products?.map((item) => (
          <div
            key={item.id} // Add key for list rendering
            className="w-36 py-2 flex flex-col justify-between bg-slate-100 rounded-md m-2 text-black mx-auto"
          >
            <Link to={`/ProductDetailsPage/${item?.id}`}>
              <img className="h-40 mx-auto" src={item.images[0]} alt={item.title} />
              <h1 className="uppercase text-xs font-semibold text-center mt-2">
                {item.title}
              </h1>
            </Link>
            <AddToCart item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroProducts;
