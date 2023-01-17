export default function IngredientsSummary({ isMeals }) {
  const meals = isMeals;

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
