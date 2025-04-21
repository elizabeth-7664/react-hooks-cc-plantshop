import React, {useState} from "react";

function PlantCard({ plant, onDelete }) {
  function handleDeleteClick() {
    onDelete(plant.id);
  }
  const [inStock, setInStock] = useState(true);

  function handleToggle() {
    setInStock(!inStock)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
