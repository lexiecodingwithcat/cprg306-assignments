import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <h1 className="text-[28px] font-bold ml-5 mt-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
