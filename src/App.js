import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Products products={products} onAddTocart={addtocart} />}
          ></Route>
          <Route exact path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
