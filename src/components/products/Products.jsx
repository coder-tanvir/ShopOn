import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.jsx";

const Products = ({ products }) => {
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
