import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../Shared/Button";
import classes from "./CartIcon.module.css";
const CartIcon = () => {
  return (
    <div className={classes["cart-icon"]}>
      <AiOutlineShoppingCart className={classes["cart-icon__shape"]} />
      <h3>Your Cart</h3>
      <Button cartIcon>0</Button>
    </div>
  );
};
export default CartIcon;
