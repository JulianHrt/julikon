export default function likeList({ likedMeal, setLikedMeal }) {
  return (
    <>
      {likedMeal === "" ? (
        <h1>keine Likes</h1>
      ) : (
        <>
          <ul>
            {likedMeal.map((meal) => {
              if (meal.wanted === "yes") {
                return <li key={meal.id}>{meal.name}</li>;
              }
            })}
          </ul>
          <button type="button" onClick={() => setLikedMeal("")}>
            Clear
          </button>
        </>
      )}
    </>
  );
}
