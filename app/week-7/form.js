"use client";
import { useState } from "react";
import QuantitySelector from "../week-4/quantitySelector";
import Selection from "../week-5/selection";

function Form() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  function submitForm(e) {
    e.preventDefault();
    alert(
      `Added item: ${itemName}, quantity: ${quantity}, category: ${category}`
    );
  }
  return (
    <form
      className="border rounded-lg grid grid-cols-2 py-7 px-5 gap-4"
      onSubmit={submitForm}
    >
      <input
        type="text"
        placeholder="Item name"
        className="col-span-2 border rounded-lg h-10 px-2"
        value={itemName}
        required
        onChange={(e) => setItemName(e.target.value)}
      />
      <div className="flex justify-between col-span-2">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Selection category={category} setCategory={setCategory} />
      </div>
      <button className="h-8  bg-blue-500 hover:bg-blue-700 rounded-md  disabled:bg-gray-500 col-span-2">
        +
      </button>
    </form>
  );
}

export default Form;
