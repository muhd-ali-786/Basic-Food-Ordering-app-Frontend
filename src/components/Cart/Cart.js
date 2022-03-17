import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import css from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={css["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHide}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItem && <button className={css.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
