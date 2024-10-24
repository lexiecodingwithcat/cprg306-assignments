"use client";
import { useState, useEffect } from "react";

function Page() {
  const [randomDogURL, setRandomDogURL] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const getRandomDog = async (breed) => {
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();
    //const data = response.json(); //this is a promise, not the actual data
    const url = data.message;
    setRandomDogURL(url); //return the URL of a random dog image
  };

  const getGogBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message); //get all the keys from the object and return all of them as a array
    setDogBreeds(breeds);
  };

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  useEffect(() => {
    getRandomDog();
    getGogBreeds();
  }, []); //empty array means runs once

  useEffect(() => {
    if (selectedBreed === " ") return;
    getRandomDog(selectedBreed);
  }, [selectedBreed]); //run when selectedBreed changes

  return (
    <div>
      <h1>week 8 demo</h1>
      <div>
        <select onChange={handleBreedChange}>
          {dogBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <p>
        <img src={randomDogURL} alt="dog_image" />
      </p>
    </div>
  );
}

export default Page;
