import { getAllMeals, createNewMeal } from "../../../services/mealServices";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const allMeals = await getAllMeals();
    response.status(200).json(allMeals);
  } else if (request.method === "POST") {
    const meal = JSON.parse(request.body);
    const createdMeal = await createNewMeal(meal);
    response.status(201).json(createdMeal);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET", "POST"])
      .send("only the Methods GET and POST are allowed!");
  }
}
