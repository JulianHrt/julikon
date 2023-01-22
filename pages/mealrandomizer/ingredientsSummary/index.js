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
    <StyledUL>
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
    </StyledUL>
  );
}
const StyledUL = styled.ul`
  margin-right: 2.5rem;
`;

const StyledList = styled.li`
  list-style: none;
  width: 90vw;
  margin: 1rem;
  background-color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 3px rgba(150, 138, 144, 0.2);
`;

const StyledCheckBox = styled.input`
  margin: 0.5rem;
`;
