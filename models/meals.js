import { Schema, model, models } from "mongoose";

const mealSchema = new Schema({
  image: String,
  name: String,
  ingredients: Array,
  id: String,
});

const Meal = models.Meal || model("Meal", mealSchema);

export default Meal;
