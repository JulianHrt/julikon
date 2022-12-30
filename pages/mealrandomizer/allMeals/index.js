import { fetcher } from "../../../helpers/api";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

export default function allMeals() {
  const { data: meals, error } = useSWR("/api/meals", fetcher);

  if (error) return <h1>...sorry cannot load meals</h1>;

  if (!meals) return <h1>loading</h1>;

  return (
    <ul>
      {meals.map((meal) => {
        return (
          <StyledMealEntry>
            <h2>{meal.name}</h2>
            <Link href={`/mealrandomizer/allMeals/${meal.id}`}>edit</Link>
            <Link href={`/mealrandomizer/allMeals/${meal.id}`}>delete</Link>
          </StyledMealEntry>
        );
      })}
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
