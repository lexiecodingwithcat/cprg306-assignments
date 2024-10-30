"use client";
import Form from "./form";
import itemsJson from "../../week-6/items.json";
import ShoppingList from "./shoppingList";
import { useEffect, useState } from "react";
import MealsIdea from "./meals-idea";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/compat/router";

function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  function handleRedirect() {
    router.push("../week-9");
  }
  if (!user) {
    return (
      <div>
        <h2>Not authorized. Go back to the login page</h2>
        <button onClick={handleRedirect}>Go back</button>
      </div>
    );
  }
  const [shoppingItems, setShoppingItems] = useState([...itemsJson]);
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);

  function handleSort(sortAttribute) {
    const sortedItems = [...shoppingItems].sort((a, b) =>
      a[sortAttribute].localeCompare(b[sortAttribute])
    );
    setShoppingItems(sortedItems);
  }

  function handleAddItem(item) {
    setShoppingItems([...shoppingItems, item]);
  }

  function handleIngredient(itemName) {
    // console.log(itemName);
    setIngredient(itemName);
  }
  async function fetchMealIdeas() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setMeals(data.meals);
  }

  //fetch data using useEffect
  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex gap-20 ml-5 mb-5 mt-10">
      <div className=" w-1/4">
        <h1 className="text-3xl ml-5 mb-10 font-extrabold text-center ">
          Shopping List for {user.displayName}
        </h1>
        <div className="ml-5">
          <Form handleAddItem={handleAddItem} />
        </div>
        <ShoppingList
          shoppingItems={shoppingItems}
          handleSort={handleSort}
          handleIngredient={handleIngredient}
        />
      </div>

      <div className="w-1/4">
        <h2 className="font-bold text-3xl">Meals Ideas</h2>
        {ingredient ? (
          <div>
            <MealsIdea meals={meals} ingredient={ingredient} />
          </div>
        ) : (
          <p>Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  );
}

export default Page;
