import Button from "../week-6/button";
import ItemList from "../week-6/item-list";

function ShoppingList({ shoppingItems, handleSort }) {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="ml-5 mt-5 flex gap-5 items-center">
        <span>Sort By:</span>
        <Button handleClick={() => handleSort("name")}>Name</Button>
        <Button handleClick={() => handleSort("category")}>Category</Button>
      </div>
      <ItemList items={shoppingItems} />
    </main>
  );
}

export default ShoppingList;
