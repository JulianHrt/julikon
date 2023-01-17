import RandomMeals from "../../components/RandomMeals";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import styled from "styled-components";

export default function results({ isMeals, setIsMeals }) {
  const { data: meals, error } = useSWR("/api/meals", fetcher);

  if (error) return <h1>...sorry cannot load meals</h1>;

  if (!meals) return <h1>loading</h1>;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());

      return shuffled.slice(0, num);
    }

    setIsMeals(() => getMultipleRandom(meals, data.count));
  }

  return (
    <>
      <div>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="count">
            Anzahl der Gerichte
            <input name="count" id="count" type="number"></input>
          </label>
          <button type="submit">Los gehts!</button>
        </StyledForm>
        <RandomMeals meals={isMeals}></RandomMeals>
      </div>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  input {
    display: block;
    width: 100%;
  }

  button,
  label {
    width: 100%;
  }
`;
