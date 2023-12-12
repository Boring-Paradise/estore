// import React, { useState, useEffect, createContext } from "react";
// import { useLocation } from "react-router-dom";

// export const ProductContext = createContext();

// const Products = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const selectedCategory = queryParams.get("category");

//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         if (response.ok) {
//           const data = await response.json();
//           setProducts(data);
//         } else {
//           throw new Error("Failed to fetch products");
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products
//   useEffect(() => {
//     if (selectedCategory) {
//       const filtered = products.filter(
//         (product) =>
//           product.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//       setFilteredProducts(filtered);
//     } else {
//       setFilteredProducts(products);
//     }
//   }, [selectedCategory, products]);

//   return (
//     <ProductContext.Provider value={{ products: filteredProducts }}>
//       {/* Your product display code */}
//     </ProductContext.Provider>
//   );
// };

// export default Products;
