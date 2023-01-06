import React from "react";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <div>
      <ProductCard>
        <h2>Sony Display</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ut
          consequatur nemo officiis, voluptatem in repellat harum assumenda
          maxime dolorem. Non maxime repellat suscipit fuga impedit provident
          illum eos vel.
        </p>
      </ProductCard>

      <ProductCard>
        <h2>Intel Processor</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ut
          consequatur nemo officiis, voluptatem in repellat harum assumenda
          maxime dolorem. Non maxime repellat suscipit fuga impedit provident
          illum eos vel.
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
