import { useRouter } from "next/router";
import AddMeal from "../../../../components/AddMeal";
import useSWR, { mutate } from "swr";
import { fetcher } from "../../../../helpers/api";

export default function editpage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: meal, error } = useSWR(`/api/meals/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load Meal </h1>;

  if (!meal) return <h1>...still loading</h1>;

  async function updateMeal(meal, publicId) {
    const updatedMeal = {
      ...meal,
      ingredients: meal.ingredients.split(","),
      image: publicId,
    };

    await fetch(`/api/meals/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedMeal),
    });

    router.push("/mealrandomizer/allMeals");
  }
  return <AddMeal defaultValue={meal} onSubmit={updateMeal} />;
}
