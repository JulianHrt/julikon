import { useState } from "react";
import useSWR from "swr";
import AddMeal from "../../components/AddMeal";
import RandomMeals from "../../components/RandomMeals";
import { fetcher } from "../../helpers/api";

export default function results() {
  const [isShown, setIsShown] = useState(false);
  const [isMeals, setIsMeals] = useState([]);

  const { data: meals, error } = useSWR("/api/meals/", fetcher);

  if (error) return <p>failed</p>;

  if (!meals) return <p>loading</p>;

  console.log(meals);

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="count">
            Anzahl der Gerichte
            <input name="count" id="count" type="number"></input>
          </label>
          <button type="submit">Los gehts!</button>
        </form>
        <button onClick={() => setIsShown(!isShown)}>+</button>
        {isShown && (
          <div>
            <AddMeal></AddMeal>
          </div>
        )}
        <RandomMeals meals={isMeals}></RandomMeals>
      </div>
    </>
  );
}
