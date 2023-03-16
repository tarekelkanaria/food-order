import { nanoid } from "nanoid";
import Container from "../../Shared/Container";
import MealsItem from "../MealsItem/MealsItem";

const meals = [
  {
    id: nanoid(),
    title: "sushi",
    description: "finest fish and veggies",
    price: 22.99,
  },
  {
    id: nanoid(),
    title: "schnitzel",
    description: "a german specialty",
    price: 16.5,
  },
  {
    id: nanoid(),
    title: "barbecue burger",
    description: "american, raw, meaty",
    price: 12.99,
  },
  {
    id: nanoid(),
    title: "green bowl",
    description: "healthy...and green...",
    price: 18.99,
  },
];

const MealsList = () => {
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
    </Container>
  );
};

export default MealsList;
