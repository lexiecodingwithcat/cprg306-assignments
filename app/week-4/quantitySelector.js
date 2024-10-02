"use client";
import Button from "./Button";
import { useState } from "react";
function QuantitySelector({ quantity, setQuantity }) {
  // const [quantity, setQuantity] = useState(1);
  const isDisabledDec = quantity === 1 ? true : false;

  const isDisabledInc = quantity === 20 ? true : false;

  function increment() {
    setQuantity((quantity) => quantity + 1);
    return;
  }
  function decrement() {
    setQuantity((quantity) => quantity - 1);
    return;
  }
  return (
    <div className="h-12 text-white bg-black w-40 rounded-md flex items-center justify-between px-2">
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
  );
}

export default QuantitySelector;
