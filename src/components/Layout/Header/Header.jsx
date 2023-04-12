import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <nav className={classes["header__nav"]}>
        <h2>ReactMeals</h2>
        <CartIcon />
      </nav>
    </header>
  );
};
export default Header;
