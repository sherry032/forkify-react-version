import { createSlice } from '@reduxjs/toolkit'
import { API_URL, KEY } from '../helper/config'
import { AJAX } from '../helper/helpers'
import {convertDataToRecipe } from "./recipe.actions"
import {bookmarksActions} from "./bookmarks.slice"
const initialState = {
    recipe: {}
}
const addRecipeSlice = createSlice({
    name: "addRecipe",
    initialState,
    reducers:{
        setRecipe: (state, action) =>{
            state.recipe = action.payload
        }
    }
})

export const addRecipeActions = addRecipeSlice.actions 
export default addRecipeSlice.reducer

export const creatRecipe = function(newRecipe){
    return async (dispatch) =>{
        try{
            const newRecipeArr = Object.entries(newRecipe)
            const ingredients = newRecipeArr.filter(entry => entry[0].startsWith("ingredient") && entry[1] !== "").map(ing => {
              const ingArr = ing[1].replaceAll(" ", "").split(",")
              if(ingArr.length !== 3) throw new Error ("ingredients input is not correct")
              const [quantity, unit, description ] = ingArr
            return {quantity: quantity? +quantity : null, unit, description}
            })
        
            const recipe = {
              cooking_time: +newRecipe.cookingTime,
              image_url: newRecipe.image,
              ingredients,
              publisher: newRecipe.publisher,
              servings: +newRecipe.servings,
              source_url: newRecipe.sourceUrl,
              title: newRecipe.title,
            }
        
            const data = await AJAX(`${API_URL}?key=${KEY}`, recipe)
            const downloadedRecipe = convertDataToRecipe(data)
            dispatch(addRecipeActions.setRecipe(downloadedRecipe))
            dispatch(bookmarksActions.toggleBookmark(downloadedRecipe))
            
          }catch(err){
            console.log(err);
            throw err
        
          }
    }
    
  }