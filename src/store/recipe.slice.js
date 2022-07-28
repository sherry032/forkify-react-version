import { createSlice } from '@reduxjs/toolkit'

const updateIngredients = (ingredients, servings, newServings)=>{
    return ingredients.map((ing) => ({...ing, quantity: (ing.quantity / servings) * newServings}))
}

const initialState ={
    recipe: {},
}
const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers:{
        setRecipe: (state, action) => {
            state.recipe = action.payload
        },
        increaseServings: (state) =>{
            const {servings, ingredients} = state.recipe
                const newServings = servings + 1
                state.recipe.servings = newServings
                state.recipe.ingredients = updateIngredients(ingredients, servings, newServings)
            
        },
        decreaseServings: (state) =>{
            const {servings, ingredients} = state.recipe
                if(servings > 1){const newServings = servings - 1
                state.recipe.servings = newServings
                state.recipe.ingredients = updateIngredients(ingredients, servings, newServings)}
            
        },
    }
})

export default recipeSlice.reducer

export const recipeActions = recipeSlice.actions

