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

  return (
    <div>
      <h1>Shopping List</h1>
      <Form />
      <ShoppingList shoppingItems={shoppingItems} handleSort={handleSort} />
    </div>
  );
}

export default Page;
