import { createPortal } from "react-dom";
import { useMealsContext } from "../../../store/MealsProvider";
import { useDisplayContext } from "../../../store/DisplayProvider";
import Modal from "../../Shared/Modal";
import CheckOut from "../Checkout/Checkout";
import Container from "../../Shared/Container";
import ListItem from "../../Shared/ListItem";
import Button from "../../Shared/Button";
import classes from "./CartList.module.css";

const CartList = () => {
  const cartVisabilityCTX = useDisplayContext();
  const cartItemCtx = useMealsContext();

  const hasItems = cartItemCtx.items.length > 0;

  const cartElements = cartItemCtx.items.map((meal) => {
    return (
      <ListItem key={meal.id} cartItem>
        <div className={classes["item-feild"]}>
          <div>
            <h3>{meal.title}</h3>
            <span>${meal.price.toFixed(2)}</span>
          </div>
          <Button cartList quantity>
            X {meal.amount}
          </Button>
        </div>
        <div className={classes["item-feild"]}>
          <Button
            cartList
            actions
            onClick={() => cartItemCtx.removeItem(meal.id)}
          >
            -
          </Button>
          <Button
            cartList
            actions
            onClick={() => cartItemCtx.addItem({ ...meal, amount: 1 })}
          >
            +
          </Button>
        </div>
      </ListItem>
    );
  });

  const modalActions = (
    <div className={classes["cart-actions"]}>
      <Button cartClose onClick={cartVisabilityCTX.toggleDisplayCart}>
        Close
      </Button>
      {hasItems && (
        <Button cartOrder onClick={cartVisabilityCTX.toggleDisplayCheckOut}>
          Order
        </Button>
      )}
    </div>
  );

  return (
    <>
      {createPortal(
        <>
          <Modal onClick={cartVisabilityCTX.toggleDisplayCart} />
          <div className={classes["cart-wrapper"]}>
            <Container cart modalContainer>
              <ul className={classes.itemsList}>
                {cartElements}
                <ListItem total>
                  <h3>total amount</h3>
                  <p>${cartItemCtx.totalAmount.toFixed(2)}</p>
                </ListItem>
              </ul>
              {cartVisabilityCTX.displayCheckOut && <CheckOut />}
              {!cartVisabilityCTX.displayCheckOut && modalActions}
            </Container>
          </div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default CartList;
