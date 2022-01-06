import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";

import Products from "./components/products/Products";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addtocart = async (productid, quantity) => {
    const item = await commerce.cart.add(productid, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddTocart={addtocart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
