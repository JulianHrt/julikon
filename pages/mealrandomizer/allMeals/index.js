import { fetcher } from "../../../helpers/api";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";
import Icons from "../../../components/SVG";

export default function allMeals() {
  const { data: meals, error, mutate } = useSWR("/api/meals", fetcher);

  if (error) return <h1>...sorry cannot load meals</h1>;

  if (!meals) return <h1>loading</h1>;

  async function deleteMeal(id) {
    await fetch(`/api/meals/${id}`, {
      method: "DELETE",
    });

    mutate();
  }

  return (
    <StyledUL>
      {meals.map((meal) => {
        return (
          <StyledMealEntry key={meal.name}>
            <h3>{meal.name}</h3>
            <StyledButton>
              <Link href={`/mealrandomizer/allMeals/${meal.id}`}>
                <Icons variant="edit"></Icons>
              </Link>
              <button onClick={() => deleteMeal(meal.id)}>
                <Icons variant="delete"></Icons>
              </button>
            </StyledButton>
          </StyledMealEntry>
        );
      })}
      <Link href="/mealrandomizer/addMeal">
        <Icons variant="add">Gericht hinzufügen</Icons>
      </Link>
    </StyledUL>
  );
}

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 1;
  margin: 0.5rem;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  gap: 20px;
`;

const StyledMealEntry = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
  height: 16vh;
  box-shadow: 2px 2px 5px 3px rgba(150, 138, 144, 0.2);

  button {
    background-color: white;
    border: none;
  }
`;
