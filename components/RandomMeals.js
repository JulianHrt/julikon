import styled from "styled-components";
import { Image } from "cloudinary-react";

export default function RandomMeals({ meals, likeRecipe }) {
  return meals.map((meal) => {
    return (
      <MealList>
        <StyledImage
          publicId={
            meal.image === undefined
              ? "placeholder-1920x1080_camkmj"
              : meal.image
          }
        ></StyledImage>
        <StyledLikeContainer>
          <StyledButtonDisLike
            type="button"
            onClick={() => likeRecipe("dislike")}
          >
            Dislike
          </StyledButtonDisLike>
          <StyledTitle>{meal.name}</StyledTitle>
          <StyledButtonLike type="button" onClick={() => likeRecipe("like")}>
            Like
          </StyledButtonLike>
        </StyledLikeContainer>
      </MealList>
    );
  });
}

const StyledTitle = styled.h3`
  font-weight: bold;
`;

const StyledButtonLike = styled.button`
  background-color: white;
  border: 0px;
  border-radius: 0px 0px 10px 0px;
  color: green;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 2px solid green;
  border-right: 2px solid green;
`;

const StyledButtonDisLike = styled.button`
  background-color: white;
  border: 0px;
  border-radius: 0px 10px 0px;
  color: red;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 2px solid red;
  border-left: 2px solid red;
`;

const MealList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 3px rgba(150, 138, 144, 0.2);
  width: 90vw;
  height: auto;
  position: relative;
`;

const StyledLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;

  button {
    min-width: 25%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 50vw;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
