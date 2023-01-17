import { fetcher } from "../../../helpers/api";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

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
    <ul>
      {meals.map((meal) => {
        return (
          <StyledMealEntry key={meal.name}>
            <h2>{meal.name}</h2>
            <Link href={`/mealrandomizer/allMeals/${meal.id}`}>edit</Link>
            <button onClick={() => deleteMeal(meal.id)}>Delete</button>
          </StyledMealEntry>
        );
      })}
      <Link href="/mealrandomizer/addMeal">+ Gericht hinzufügen</Link>
    </ul>
  );
}

const StyledMealEntry = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
