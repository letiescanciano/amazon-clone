import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/I/B1GlRgoqMaS.jpg"
        />
        <h2 className="checkout__title">Your shopping basket</h2>
        {basket.map((item) => {
          console.log("item", item);
          return <BasketItem data={item} />;
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
