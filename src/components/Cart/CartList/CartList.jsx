import { createPortal } from "react-dom";
import { useMealsContext } from "../../../store/MealsProvider";
import { useDisplayContext } from "../../../store/DisplayProvider";
import { useState } from "react";
import axios from "axios";
import Modal from "../../Shared/Modal";
import CheckOut from "../CheckOut/CheckOut";
import Container from "../../Shared/Container";
import ListItem from "../../Shared/ListItem";
import Button from "../../Shared/Button";
import Spinner from "react-bootstrap/Spinner";
import classes from "./CartList.module.css";

const CartList = () => {
  const cartVisabilityCTX = useDisplayContext();
  const cartItemCtx = useMealsContext();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [orderHasSent, setOrderHasSent] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const hasItems = cartItemCtx.items.length > 0;

  const onCartConfirm = async (userData) => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://meals-ae989-default-rtdb.firebaseio.com/orders.json",
        {
          user: userData,
          items: cartItemCtx.items,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        setOrderHasSent(true);
        cartItemCtx.clearCart();
      }
    } catch (error) {
      setHasError(true);
      setErrMessage(`Something went wrong ${error.message}`);
    }
    setIsLoading(false);
  };

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

  const modalContent = (
    <>
      <ul className={classes.itemsList}>
        {cartElements}
        <ListItem total>
          <h3>total amount</h3>
          <p>${cartItemCtx.totalAmount.toFixed(2)}</p>
        </ListItem>
      </ul>
      {cartVisabilityCTX.displayCheckOut && (
        <CheckOut onConfirm={onCartConfirm} />
      )}
      {!cartVisabilityCTX.displayCheckOut && modalActions}
    </>
  );

  const loadingContent = (
    <div className="p-5 d-flex justify-content-center align-items-center">
      <Spinner
        animation="border"
        variant="warning"
        size="md"
        style={{ width: "4rem", height: "4rem" }}
      />
    </div>
  );

  const successContent = (
    <div className="p-5 d-flex flex-column justify-content-center align-items-center bg-success rounded">
      <p className="fw-bold fs-2 text-white pb-5">
        Your Order has been sent successfully
      </p>
      <Button cartOrder onClick={cartVisabilityCTX.toggleDisplayCart}>
        Close
      </Button>
    </div>
  );

  const errorContent = (
    <div className="p-5 d-flex flex-column justify-content-center align-items-center bg-danger rounded">
      <p className="fw-bold fs-3 text-white pb-5">
        {errMessage} Try Again Later
      </p>
      <Button cartOrder onClick={cartVisabilityCTX.toggleDisplayCart}>
        Close
      </Button>
    </div>
  );

  let content;
  if (isLoading) content = loadingContent;
  else if (hasError) content = errorContent;
  else if (orderHasSent) content = successContent;
  else content = modalContent;

  return (
    <>
      {createPortal(
        <>
          <Modal onClick={cartVisabilityCTX.toggleDisplayCart} />
          <div className={classes["cart-wrapper"]}>
            <Container cart modalContainer>
              {content}
            </Container>
          </div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default CartList;
