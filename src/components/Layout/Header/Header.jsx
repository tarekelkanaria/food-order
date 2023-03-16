import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <header className={classes["main-header"]}>
      <nav className={classes["header__nav"]}>
        <h2>ReactMeals</h2>
        <CartIcon onShowCart={onShowCart} />
      </nav>
    </header>
  );
};
export default Header;
