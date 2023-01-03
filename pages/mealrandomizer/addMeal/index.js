import { useRouter } from "next/router";
import AddMeal from "../../../components/AddMeal";

export default function addMeal() {
  const router = useRouter();

  async function addNewMeal(meal) {
    const newMeal = {
      ...meal,
      ingredients: meal.ingredients.split(","),
    };

    const response = await fetch("/api/meals/", {
      method: "POST",
      body: JSON.stringify(newMeal),
    });

    router.back();
  }

  return <AddMeal onSubmit={addNewMeal} />;
}
