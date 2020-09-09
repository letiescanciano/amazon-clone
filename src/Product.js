import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";
export const IMAGE =
  "data:image/jpeg;base64,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";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: uuidv4(),

        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟 </p>
          ))}
      </div>
      <img src={IMAGE}></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
