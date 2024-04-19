import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes, formData, setFormData, initialFormState}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
    
 const [ placeholder, setPlaceholder] = useState({
        name: 'Name',
        cuisine: 'Cuisine',
        photo: 'Photo',
        ingredients: 'Ingredients',
        preparation: 'Preparation'
       })
    
    
   // Form handlers
     const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecipe = {
            name: formData.name,
            cuisine: formData.cuisine,
            photo: formData.photo,
            ingredients: formData.ingredients,
            preparation: formData.preparation
            };
        setRecipes([...recipes, newRecipe])
        setFormData({...initialFormState})

    }
    
    
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
            {/*  Table Row  */}
          <tr>
          {/*  Table Cells  */}
          {/*  Name  */}
              <td>
                  <label htmlFor="name">
                      <input 
                          id="name" 
                          type="text" 
                          name="name" 
                          onChange={handleChange}
                          value={formData.name}
                          placeholder={placeholder.name}
                          />
                  </label>
              </td>
              
          {/*  Cuisine  */}
              <td>
                <label htmlFor="cuisine">
                      <input 
                          id="cuisine" 
                          type="text" 
                          name="cuisine" 
                          onChange={handleChange}
                          value={formData.cuisine}
                          placeholder={placeholder.cuisine}
                          />
                  </label>
              </td>
              
          {/*  Photo  */}
              <td>
                  <label htmlFor="photo">
                      <input 
                          id="photo" 
                          type="text" 
                          name="photo" 
                          onChange={handleChange}
                          value={formData.photo}
                          placeholder={placeholder.photo}
                          />
                  </label>
              </td>
              
          {/*  Ingredients  */}
              <td>
                <label htmlFor="ingredients">
                      <textarea 
                          id="ingredients" 
                          type="text" 
                          name="ingredients" 
                          onChange={handleChange}
                          value={formData.ingredients}
                          placeholder={placeholder.ingredients}
                          />
                  </label>
              </td>
              
          {/*  Preparation  */}
              <td>
                  <label htmlFor="preparation">
                      <textarea 
                          id="preparation" 
                          type="text" 
                          name="preparation" 
                          onChange={handleChange}
                          value={formData.preparation}
                          placeholder={placeholder.preparation}
                          />
                  </label>
              </td>
              
          {/*  Actions (Create)  */}
            <td>
              <button 
                  type="submit">Create</button>
            </td>
              
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
