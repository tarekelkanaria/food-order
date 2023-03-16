import { useMealsContext } from "../../../store/MealsProvider";
import { useRef, useState } from "react";
import ListItem from "../../Shared/ListItem";
import Button from "../../Shared/Button";
import classes from "./MealsItem.module.css";

const MealsItem = ({ id, itemDescription, itemTitle, itemPrice }) => {
  const [orderIsValid, setOrderIsValid] = useState(true);

  const orderRef = useRef();

  const newMealCTX = useMealsContext();

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const orderAmount = orderRef.current.value;
    const orderAmountNumber = +orderAmount;
    if (
      isNaN(orderAmountNumber) ||
      orderAmountNumber < 1 ||
      orderAmountNumber > 5
    ) {
      setOrderIsValid(false);
      return;
    }
    newMealCTX.addItem({
      id: id,
      title: itemTitle,
      amount: orderAmountNumber,
      price: itemPrice,
    });
  };

  return (
    <ListItem homeItem>
      <div className={classes["meals-item"]}>
        <h3>{itemTitle}</h3>
        <p>{itemDescription}</p>
        <span>{`$${itemPrice.toFixed(2)}`}</span>
      </div>
      <form
        className={classes["meals-item__action"]}
        onSubmit={handleOrderSubmit}
      >
        <div>
          <label htmlFor={id}>Amount</label>
          <input
            ref={orderRef}
            id={id}
            type="number"
            min="1"
            step="1"
            max="5"
            defaultValue="1"
          />
        </div>
        {!orderIsValid && (
          <p className={classes.error}>Please enter a valid value (1 - 5 )</p>
        )}
        <Button type="submit">+ Add</Button>
      </form>
    </ListItem>
  );
};
export default MealsItem;
