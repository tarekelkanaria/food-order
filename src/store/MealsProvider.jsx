import { createContext, useContext, useReducer } from "react";
import MealsReducer, { initialState } from "./MealsReducer";

const MealsContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const MealsProvider = (props) => {
  const [mealsState, dispatchMealsState] = useReducer(
    MealsReducer,
    initialState()
  );

  const addItemHandler = (item) => {
    dispatchMealsState({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchMealsState({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchMealsState({ type: "CLEAR" });
  };

  const mealsContextState = {
    items: mealsState.items,
    totalAmount: mealsState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <MealsContext.Provider value={mealsContextState}>
      {props.children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => useContext(MealsContext);

export default MealsProvider;
