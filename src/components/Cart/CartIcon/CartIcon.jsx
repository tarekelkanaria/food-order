import { useMealsContext } from "../../../store/MealsProvider";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../Shared/Button";
import classes from "./CartIcon.module.css";

const CartIcon = ({ onShowCart }) => {
  const [addToCart, setAddToCart] = useState(false);

  const cartCTX = useMealsContext();

  const { items } = cartCTX;

  const mealsCount = items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setAddToCart(true);
    const timer = setTimeout(() => {
      setAddToCart(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div
      className={`${classes["cart-icon"]} ${addToCart ? classes.bump : ""}`}
      onClick={onShowCart}
    >
      <AiOutlineShoppingCart className={classes["cart-icon__shape"]} />
      <h3>Your Cart</h3>
      <Button cartIcon>{mealsCount}</Button>
    </div>
  );
};
export default CartIcon;
