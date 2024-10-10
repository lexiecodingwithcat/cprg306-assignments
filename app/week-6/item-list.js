import Item from "./item";

export default function ItemList({ items }) {
  return (
    <div className="flex flex-col gap-3 my-5 ml-5">
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
