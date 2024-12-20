function Item({ name, quantity, category }) {
  return (
    <ul className="bg-sky-200 w-[80%] py-3 px-5 rounded">
      <li>
        <h4 className="text-xl font-bold">{name}</h4>
        <p>
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}

export default Item;
