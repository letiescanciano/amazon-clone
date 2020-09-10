import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

import CurrencyFormat from "react-currency-format";
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = basket.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong>{getBasketTotal.toFixed(2)}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        sufix="€"
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
