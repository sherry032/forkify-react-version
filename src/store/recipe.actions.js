import { recipeActions } from "./recipe.slice";
import { API_URL, KEY } from '../helper/config'
import { AJAX } from '../helper/helpers'

export const convertDataToRecipe = function(data){
    const { recipe } = data.data;
    return {
      id: recipe.id,
      cookingtime: recipe.cooking_time,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      url: recipe.source_url,
      title: recipe.title,
      ...(recipe.key && {key: recipe.key})
    };
  }

export const loadRecipe = (id)=>{
    return async (dispatch) =>{
        try{
            const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
            console.log(data)
            dispatch(recipeActions.setRecipe(convertDataToRecipe(data)))
        }catch(err){
            dispatch(recipeActions.setError(err.message))
        }
    }
}