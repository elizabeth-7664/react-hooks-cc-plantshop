import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}){
  function handleDelete(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
    });
  }
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onDelete={handleDelete} />
    ))}
    </ul>
  );
}

export default PlantList;
