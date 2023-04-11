import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Container from "../../Shared/Container";
import MealsItem from "../MealsItem/MealsItem";
import classes from "./MealsList.module.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errText, setErrText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
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

  let content;
  if (mealsElements.length) content = <ul>{mealsElements}</ul>;
  else if (hasError) content = <p className={classes.error}>{errText}</p>;
  else
    content = (
      <div className={classes.loading}>
        <Spinner
          animation="border"
          variant="warning"
          size="md"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
    );
  return <Container>{content}</Container>;
};

export default MealsList;
