import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "",
  ]);

  function onSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient");
    console.log(ingredients);
    setIngredients([...ingredients, newIngredient]);
  }

  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8">Welcome to Chef Claude</h1>
        <p className="text-lg mt-4">The best recipes from around the world</p>

        <form onSubmit={onSubmit}>
          <input
            className="border border-gray-300 p-2 rounded-lg my-4"
            type="text"
            placeholder="e.g. oregono"
            aria-label="Add Ingredient"
            name="ingredient"
          />
          <button className="bg-black text-white rounded-lg font-light p-2 m-4 before:content-['+']   before:ml-0.5 before:mr-1 before:text-white hover:bg-gray-700">
            Add Ingredient
          </button>
        </form>
        <ul>
          {ingredients.map((item) => (
            <li>{...item}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
