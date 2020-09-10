import React from "react";
import BasketItem from "./BasketItem";

const AnimatedCheckOut = React.forwardRef(({ item, index }, ref) => (
  <div ref={ref}>
    <BasketItem key={`anim index ${item.id}`} data={item} />
  </div>
));

export default AnimatedCheckOut;
