import React, { useEffect, useState } from 'react';

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    try {
      const response = await fetch('http://localhost:8081/ingredients'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setIngredients(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    }
  };

  return (
    <div>
      <h1>Ingredients</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.ingredientID}>
            {ingredient.ingredientName} - Amount: {ingredient.ingredientAmt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
