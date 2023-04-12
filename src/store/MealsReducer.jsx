export const initialState = () => ({ items: [], totalAmount: 0 });

const MealsReducer = (state, action) => {
  if (action.type === "ADD") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existItem = state.items[itemIndex];
    let updatedItems;
    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.amount * action.item.price,
    };
  }

  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const existItem = state.items[itemIndex];
    let updatedItems;
    if (existItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existItem, amount: existItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount - existItem.price,
    };
  }

  if (action.type === "CLEAR") {
    return { items: [], totalAmount: 0 };
  }

  return { items: [], totalAmount: 0 };
};

export default MealsReducer;
