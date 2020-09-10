import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import AnimatedCheckOut from "./AnimatedCheckOut";
import FlipMove from "react-flip-move";
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
        <FlipMove>
          {basket.map((item, i) => {
            console.log("item", item);
            return (
              <AnimatedCheckOut key={`an ${item.id}`} item={item} index={i} />
            );
          })}
        </FlipMove>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
