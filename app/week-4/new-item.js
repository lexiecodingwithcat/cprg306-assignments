"use client";
import { useState } from "react";
import Button from "./Button";
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
          <Button disabled={isDisabledDec} onClick={decrement}>
            -
          </Button>
          <Button disabled={isDisabledInc} onClick={increment}>
            +
          </Button>
        </div>
      </div>
    </main>
  );
}

export default NewItem;
