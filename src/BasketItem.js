import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";
const BasketItem = ({ data }) => {
  const { _id, title, price, image, rating } = data;

  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        _id,
      },
    });
  };
  console.log("basket item props", data);
  return (
    <div className="basket_item">
      <img src={image}></img>
      <div className="basket_item__info">
        <strong>{title}</strong>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟 </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
