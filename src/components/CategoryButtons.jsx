import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryButtons = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="container mx-auto py-4 flex justify-center">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/products/category/${category}`}
          className="px-3 py-2 mt-16 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 mr-3 text-decoration-none"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
