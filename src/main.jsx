import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
import { SidebarProvider } from "./contexts/SidebarContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx"; // Use named import for CartProvider

ReactDOM.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>,
  document.getElementById("root")
);
