export default function Main() {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8">Welcome to Chef Claude</h1>
        <p className="text-lg mt-4">The best recipes from around the world</p>
      
      <form action="submit">
        <input
          className="border border-gray-300 p-2 rounded-lg my-4"
          type="text"
          placeholder="e.g. oregono"
        />
        <button className="bg-black text-white rounded-lg font-light p-2 m-4 before:content-['+']   before:ml-0.5 before:mr-1 before:text-white hover:bg-gray-700">Add Ingredient</button>
      </form>
      </main>
    </>
  );
}
