import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function IngredientsSummary({ isMeals }) {
  const [isIngredients, setIngredients] = useState([]);

  const ingredients = isMeals.map((meal) => {
    return meal.ingredients.map((ingredient) => {
      return { ingredient, bought: false, id: nanoid() };
    });
  });

  function setTrue(key) {
    const newArray = isIngredients.map((one) => {
      return one.map((eins) => {
        if (eins.id === key) {
          return { ...eins, bought: true };
        } else {
          return { ...eins };
        }
      });
    });
    setIngredients(newArray);
  }
  useEffect(() => {
    setIngredients(ingredients);
  }, isMeals);

  return (
    <ul>
      {isIngredients.map((one) => {
        return one.map((eins) => {
          if (eins.bought === false) {
            return (
              <StyledList key={eins.id}>
                <StyledCheckBox
                  type="checkbox"
                  onChange={() => setTrue(eins.id)}
                ></StyledCheckBox>
                {eins.ingredient}
              </StyledList>
            );
          }
        });
      })}
    </ul>
  );
}

const StyledList = styled.li`
  list-style: none;
  width: 90vw;
  margin: 1rem;
  background-color: lightgray;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 10px;
`;

const StyledCheckBox = styled.input`
  margin: 0.5rem;
`;
