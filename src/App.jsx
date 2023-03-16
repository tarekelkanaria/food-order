import { useState } from "react";
import MealsProvider from "./store/MealsProvider";
import CartList from "./components/Cart/CartList/CartList";
import Header from "./components/Layout/Header/Header";
import Landing from "./components/Layout/Landing/Landing";
import MealsList from "./components/Meals/MealsList/MealsList";
import "./App.css";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const toggleDisplayCart = (e) => {
    e.stopPropagation();
    setDisplayCart((prevDisplay) => !prevDisplay);
  };

  return (
    <MealsProvider>
      {displayCart && <CartList onHideCart={toggleDisplayCart} />}
      <Header onShowCart={toggleDisplayCart} />
      <main>
        <Landing />
        <MealsList />
      </main>
    </MealsProvider>
  );
}

export default App;
