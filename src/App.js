import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
       const initialFormState = {
       name: "",
       cuisine: "",
       photo: "",
       ingredients: "",
       preparation: "",
   };
    


    const [formData, setFormData] = useState({ ...initialFormState});
  const [recipes, setRecipes] = useState(RecipeData);
 
  
    // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} formData={formData} setFormData={setFormData} initialFormState={initialFormState}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} formData={formData} setFormData={setFormData} initialFormState={initialFormState}/>
    </div>
  );
}

export default App;
