"use client";
import Form from "../week-7/form";
import itemsJson from "../week-6/items.json";
import ShoppingList from "./shoppingList";
import { useState } from "react";

function Page() {
  const [shoppingItems, setShoppingItems] = useState([...itemsJson]);

  function handleSort(sortAttribute) {
    const sortedItems = [...shoppingItems].sort((a, b) =>
      a[sortAttribute].localeCompare(b[sortAttribute])
    );
    setShoppingItems(sortedItems);
  }
  function handleAddItem(item) {
    setShoppingItems([...shoppingItems, item]);
  }

  return (
    <div className="ml-5 mb-5 mt-10 w-1/4">
      <h1 className="text-3xl ml-5 mb-10 font-extrabold text-center ">
        Shopping List
      </h1>
      <div className=" ml-5 ">
        <Form handleAddItem={handleAddItem} />
      </div>
      <ShoppingList shoppingItems={shoppingItems} handleSort={handleSort} />
    </div>
  );
}

export default Page;
