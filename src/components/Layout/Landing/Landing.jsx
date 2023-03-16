import meals from "../../../assets/meals.jpg";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <section>
      <div className={classes["landing"]}>
        <img src={meals} alt="meals dishes" loading="lazy" />
      </div>
      <article className={classes["landing__content"]}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available
          mealsand enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs
        </p>
      </article>
    </section>
  );
};
export default Landing;
