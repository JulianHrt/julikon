import RandomMeals from "../../components/RandomMeals";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import styled from "styled-components";
import Icons from "../../components/SVG";

export default function results({
  isMeals,
  setIsMeals,
  likedMeal,
  setLikedMeal,
}) {
  const { data: meals, error } = useSWR("/api/meals", fetcher);

  if (error) return <h1>...sorry cannot load meals</h1>;

  if (!meals) return <h1>loading</h1>;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const count = data.count === "" ? 1 : data.count;

    const shuffled = [...meals].sort(() => 0.5 - Math.random());

    const shuffledMeals = shuffled.slice(0, count);

    setIsMeals(shuffledMeals);
  }

  function likeRecipe(variant) {
    if (variant === "like") {
      const like = isMeals.map((meal) => {
        return { ...meal, wanted: "yes" };
      });

      setLikedMeal((currentList) => {
        return [...currentList, ...like];
      });

      const ids = likedMeal !== "" ? likedMeal.map((meal) => meal.id) : [];

      const mealsWithoutLiked = meals.filter((meal) => !ids.includes(meal.id));

      const shuffled = [...mealsWithoutLiked].sort(() => 0.5 - Math.random());

      const shuffledMeals = shuffled.slice(0, 1);

      setIsMeals(shuffledMeals);
    }
    if (variant === "dislike") {
      const like = isMeals.map((meal) => {
        return { ...meal, wanted: "no" };
      });

      setLikedMeal((currentList) => {
        return [...currentList, ...like];
      });

      const ids = likedMeal !== "" ? likedMeal.map((meal) => meal.id) : [];

      const mealsWithoutLiked = meals.filter((meal) => !ids.includes(meal.id));

      const shuffled = [...mealsWithoutLiked].sort(() => 0.5 - Math.random());

      const shuffledMeals = shuffled.slice(0, 1);

      setIsMeals(shuffledMeals);
    }
  }

  return (
    <>
      <div>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="count">
            Anzahl der Gerichte
            <input name="count" id="count" type="number"></input>
          </label>
          <button type="submit">
            <Icons variant="refresh">Los gehts!</Icons>
          </button>
        </StyledForm>
        <RandomMeals meals={isMeals} likeRecipe={likeRecipe}></RandomMeals>
      </div>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  input {
    display: block;
    width: 100%;
  }

  button,
  label {
    width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
  }
`;
