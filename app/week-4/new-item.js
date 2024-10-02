"use client";

import { useState } from "react";
import QuantitySelector from "./quantitySelector";
function NewItem() {
  const [quantity, setQuantity] = useState(1);
  return (
    <main className="flex justify-center mt-5 text-white">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </main>
  );
}

export default NewItem;
