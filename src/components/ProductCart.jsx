import React, { useState } from "react";
import * as classes from "./product-cart.module.scss";

const ProductCart = ({ dto }) => {
  const [isDescription, setIsDescription] = useState(false);

  const changeDescription = () => {
    setIsDescription(!isDescription);
  };

  return (
    <div className={classes.cart}>
      <h2 className={classes.cart__title}>{dto.title}</h2>
      <p>
        <span>Price:</span>
        <strong>{dto.price}</strong>
      </p>
      <p>
        <span>Category:</span>
        <strong>{dto.category}</strong>
      </p>

      <a href={`/product/${dto.id}`}>Open product</a>

      <button onClick={changeDescription} className={classes.cart__btn}>
        Toggle description
      </button>

      {isDescription && (
        <p className={classes.cart__descr}>{dto.description}</p>
      )}

      <p>
        <img
          className={classes.cart__img}
          src={dto.image}
          loading="lazy"
          alt=""
        />
      </p>
    </div>
  );
};

export default ProductCart;
