import AddMeal from "./AddMeal";

export default function RandomMeals({ meals }) {
  return meals.map((meal) => {
    return (
      <div>
        <img src={meal.image} alt={`picture of ${meal.name}`}></img>
        <h3>{meal.name}</h3>
        <ul>
          {meal.ingredients.map((ingredients) => {
            return <li>{ingredients}</li>;
          })}
        </ul>
      </div>
    );
  });
}
