export default function AddMeal() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const newMeal = {
      ...data,
      ingredients: data.ingredients.split(","),
    };

    const response = await fetch("/api/meals/", {
      method: "POST",
      body: JSON.stringify(newMeal),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">
        Bildupload
        <input name="image" id="image" type="text"></input>
      </label>
      <label htmlFor="name">
        Name des Gerichts:
        <input name="name" id="name" type="text"></input>
      </label>
      <label htmlFor="ingredients">
        Zutaten:
        <input name="ingredients" id="ingredients" type="text"></input>
      </label>
      <button type="submit">speichern</button>
    </form>
  );
}
