import  React, { useState, useEffect } from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlants(data));
  }, []);

  const handleDelete = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
  }

  const filteredPlants = plants.filter((plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants} setPlants={setPlants} onDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
