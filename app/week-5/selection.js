"use client"
function Selection({setCategory}) {
  const options = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Food",
    "Beverages",
    "Snacks",
    "Household",
    "Others",
  ];
  function selectCategory(e) {
    setCategory(e.target.value);
    console.log(e.target.value);
  }
  return (
    <select
      className="border rounded-lg p-3"
      onChange={selectCategory}
    >
      <option defaultValue="Category" disabled>
        Category
      </option>
      {options.map((option) => (
        <option value={option} key={option}>{option}</option>
      ))}
    </select>
  );
}

export default Selection;
