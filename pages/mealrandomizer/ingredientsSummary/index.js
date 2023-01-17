export default function IngredientsSummary({ isMeals }) {
  const meals = isMeals;

  if (meals.length >= 0) {
    return <p>keine Gerichte - Keine Zutaten</p>;
  } else {
    return (
      <ul>
        {meals.map((meal) => {
          return meal.ingredients.map((tag) => {
            return <li key={tag}>{tag}</li>;
          });
        })}
      </ul>
    );
  }
}
