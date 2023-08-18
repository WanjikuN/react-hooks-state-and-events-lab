import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const classMode = cart?"in-cart":"";
  function handleClick(){
    setCart(cart => !cart);
  }
  return (
    <li className={classMode}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={handleClick} className="add">{cart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
