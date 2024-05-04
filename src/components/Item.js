import React, { useState } from "react";

function Item({ name, category }) {
  let [isInCart, setIsInCart] = useState(false);
  function addToCart() {
    setIsInCart(() => isInCart = !isInCart)
  }

  const liClass = isInCart ? "in-cart" : "";
  const btnClass = isInCart ? "remove" : "add";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={addToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;