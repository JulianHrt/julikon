import styled from "styled-components";
import { Image } from "cloudinary-react";

export default function RandomMeals({ meals }) {
  return meals.map((meal) => {
    return (
      <MealList>
        <StyledImage publicId={meal.image}></StyledImage>
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

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
