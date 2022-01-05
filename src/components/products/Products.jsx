import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.jsx";
const products = [
  {
    id: 1,
    name: "Nike Foamposite",
    description: "Good for Basketball",
    price: "$200",
  },
  {
    id: 2,
    name: "Adidas Allstar",
    description: "Good for Basketball",
    price: "$90",
  },
  {
    id: 3,
    name: "Adidas Terrex",
    description: "Fluffy jacket",
    price: "$250",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
