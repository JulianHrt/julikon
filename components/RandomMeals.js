import styled from "styled-components";

export default function RandomMeals({ meals }) {
  return meals.map((meal) => {
    return (
      <MealList>
        <img src={meal.image} alt={`picture of ${meal.name}`}></img>
        <h3>{meal.name}</h3>
      </MealList>
    );
  });
}

const MealList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  margin: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 10px;
`;
