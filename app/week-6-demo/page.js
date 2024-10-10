import dogsJson from "./dogs.json";
import Image from "next/image";
function page() {
  let dogs = [...dogsJson];
  // dogs = dogs.sort((a, b) => a.name.localeCompare(b.name));
  // dogs = dogs.filter((dog) => dog.name.length > 5);
  return (
    <main>
      <h1>Dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <h2>{dog.name}</h2>
            <p>{dog.description}</p>
            <p>
              <Image src={dog.image} alt={dog.name} width={640} height={480} />
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default page;
