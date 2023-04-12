import MealsProvider from "./store/MealsProvider";
import { useDisplayContext } from "./store/DisplayProvider";
import CartList from "./components/Cart/CartList/CartList";
import Header from "./components/Layout/Header/Header";
import Landing from "./components/Layout/Landing/Landing";
import MealsList from "./components/Meals/MealsList/MealsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const displayCTX = useDisplayContext();

  return (
    <MealsProvider>
      {displayCTX.displayCart && <CartList />}
      <Header />
      <main>
        <Landing />
        <MealsList />
      </main>
    </MealsProvider>
  );
}

export default App;
