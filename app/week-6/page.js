"use client";

import Button from "./button.js";
import ItemList from "./item-list.js";
import itemsJson from "./items.json";

import { useState } from "react";
function Page() {
  const [shoppingItems, setShoppingItems] = useState([...itemsJson]);

  function handleSort(sortAttribute) {
    const sortedItems = [...shoppingItems].sort((a, b) =>
      a[sortAttribute].localeCompare(b[sortAttribute])
    );
    setShoppingItems(sortedItems);
  }

  function handleGroup() {
    const groupedItems = [...shoppingItems].reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, []);
    setShoppingItems(groupedItems);
    console.log(groupedItems);
  }

  return (
    <main className="bg-stone-50 text-stone-900">
      <h1 className="text-[28px] font-bold ml-5 mt-5">Shopping List</h1>
      <div className="ml-5 mt-5 flex gap-5 items-center">
        <span>Sort By:</span>
        <Button handleClick={() => handleSort("name")}>Name</Button>
        <Button handleClick={() => handleSort("category")}>Category</Button>
        <button onClick={handleGroup}>Grouped Category</button>
      </div>
      <ItemList items={shoppingItems} />
    </main>
  );
}

export default Page;
