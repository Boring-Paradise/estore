import React, { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // console.log(product);
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            {/*image*/}
            <Link to={`/product/${id}`}>
              <img
                className="max-h-[160px] group-hover:scale-125 transition duration-400 "
                src={image}
                alt=""
              />
            </Link>
          </div>
        </div>
        {/*buttons*/}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col item-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3x1" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-[#1d1d1d] drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/*title/price/category*/}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold text-[#d82508]">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
