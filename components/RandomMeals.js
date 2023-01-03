import styled from "styled-components";

export default function RandomMeals({ meals }) {
  return meals.map((meal) => {
    return (
      <MealList>
        <Image src={meal.image} alt={`picture of ${meal.name}`}></Image>
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
  width: 90vw;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
