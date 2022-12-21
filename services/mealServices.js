import Meal from "../models/meals";
import crypto from "crypto";
import connectWithMongoDB from "../helpers/dbConnect";

async function getAllMeals() {
  await connectWithMongoDB();

  const meals = await Meal.find({}, { _id: false, __v: false }, { lean: true });

  return meals;
}

async function getMealById(id) {
  await connectWithMongoDB();

  const meal = await Meal.findOne(
    { id },
    { _id: false, __v: false },
    { lean: true }
  );
  return meal;
}

async function createNewMeal(meal) {
  await connectWithMongoDB();

  const createdMeal = await Meal.create({
    ...meal,
    id: crypto.randomUUID(),
  });

  return {
    ...createdMeal.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

async function updateMealById(id, meal) {
  await connectWithMongoDB();

  await Meal.updateOne({ id }, meal);
  const updatedMeal = await getMealById(id);
  return updatedMeal;
}

async function deleteMealById(id) {
  await connectWithMongoDB();

  const meal = await getMealById(id);
  await Meal.deleteOne({ id });
  return meal;
}

export {
  getAllMeals,
  getMealById,
  createNewMeal,
  updateMealById,
  deleteMealById,
};
