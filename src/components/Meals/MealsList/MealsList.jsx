import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../Shared/Container";
import MealsItem from "../MealsItem/MealsItem";
import classes from "./MealsList.module.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errText, setErrText] = useState("");

  const extractData = (data) => {
    const meals = [];
    for (const item in data) {
      meals.push({
        id: item,
        title: data[item].title,
        description: data[item].description,
        price: data[item].price,
      });
    }
    return meals;
  };

  const getMeals = async () => {
    try {
      await axios
        .get("https://meals-ae989-default-rtdb.firebaseio.com/meals.json")
        .then((response) => setMeals(extractData(response.data)));
    } catch (error) {
      setHasError(true);
      setErrText(`Something went wrong ${error.message}`);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  const mealsElements = meals.map((item) => (
    <MealsItem
      key={item.id}
      id={item.id}
      itemDescription={item.description}
      itemTitle={item.title}
      itemPrice={item.price}
    />
  ));

  return (
    <Container>
      <ul>{mealsElements}</ul>
      {hasError && <p className={classes.error}>{errText}</p>}
    </Container>
  );
};

export default MealsList;
