import React from "react";
import { useParams } from "react-router-dom";
import Page from './Page';

const RecipeDetailPage = () => {
  const { id } = useParams();

  const recipes = [
    {
      id: 1,
      name: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "This is a salad",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      id: 2,
      name: "Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante nec est molestie, sedeleifend nisi tincidunt. Integer condimentum lacus nec velit fringilla, ut lobortis velit vestibulum.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    { 
      id: 3, 
      name: "Pasta", 
      description: "This is a Pasta", 
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    { 
      id: 4, 
      name: "Sides", 
      description: "This is a sides", 
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
  ];

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  // Check if the recipe exists
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width="300" />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailPage;