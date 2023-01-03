import {
  getMealById,
  updateMealById,
  deleteMealById,
} from "../../../../services/mealServices";

export default async function handler(request, response) {
  const { id } = request.query;

  if (request.method === "GET") {
    const oneMeal = await getMealById(id);
    response.status(200).json(oneMeal);
  } else if (request.method === "PATCH") {
    const meal = JSON.parse(request.body);
    const updatedMeal = await updateMealById(id, meal);
    response.status(200).json(updatedMeal);
  } else if (request.method === "DELETE") {
    const meal = await deleteMealById(id);
    response.status(200).json(meal);
  } else {
    response.status(405).setHeader("Allow", ["GET", "PATCH", "DELETE"]).send();
  }
}
