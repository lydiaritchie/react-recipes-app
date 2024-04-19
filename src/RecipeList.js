import React from "react";

function RecipeList({recipes, setRecipes, formData, setFormData, initialFormState}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
    
    //need to add the fromData into the recipies array
    
    //variable to hold the HTML for the recipes
    let recipeContent = [];
   
    //nee dto remove the row from Recipies array
    const handleDelete = (index) => {
        const filteredRecipes = recipes.filter((recipe, currentIndex) => {
            return currentIndex !== index;
        })
        setRecipes(filteredRecipes);
    }
    
    //this displays the recipies once the page renders or the button is pressed
    const createRow = (recipe, index) => {
        return (
            <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                    <img src={recipe.photo}/>
                </td>
                <td className="content_td">
                    <p>{(recipe.ingredients)}</p>
                </td>

                <td className="content_td">
                    <p>{recipe.preparation}</p>
                </td>
                <td> 
                    <button 
                        name="delete" 
                        onClick={() => handleDelete(index)} 
                    >Delete</button>
                </td>
           </tr>
          )
            
        }
        
        
    //making sure that recipes isn't empty
    if(recipes){
    recipeContent = recipes.map((recipe, index) => createRow(recipe, index));
    }
    
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody> 
            {/* Recipies Rows */}
            {recipeContent}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
