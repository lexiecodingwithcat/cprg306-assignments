"use client";
import { useState } from "react";
function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const isDisabledDec = quantity === 1 ? true : false;

  const isDisabledInc = quantity === 20 ? true : false;

  function increment() {
    setQuantity((quantity) => quantity + 1);
  }
  function decrement() {
    setQuantity((quantity) => quantity - 1);
  }
  return (
    <main className="flex justify-center mt-5 text-white">
      <div className="h-12 bg-black w-36 rounded-md flex items-center justify-evenly">
        <span>{quantity}</span>
        <div className="flex gap-1">
          <button
            className="h-6 w-10 rounded-md disabled:bg-gray-500  bg-blue-500 hover:bg-blue-700 "
            disabled={isDisabledDec}
            onClick={decrement}
          >
            -
          </button>
          <button
            className="h-6 w-10 bg-blue-500 hover:bg-blue-700 rounded-md  disabled:bg-gray-500"
            onClick={increment}
            disabled={isDisabledInc}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}

export default NewItem;
