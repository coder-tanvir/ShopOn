import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.jsx";
import useStyles from "./styles";

const Products = ({ products, onAddTocart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddTocart={onAddTocart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
