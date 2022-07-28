import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from "./recipe.slice"
import searchReducer from "./search-results.slice"
import bookmarksReducer from './bookmarks.slice'
import addRecipeReducer from "./addRecipe.slice"
import uiRdducer from "./ui.slice"
import logger from 'redux-logger'
const reducer ={
        "recipe": recipeReducer,
        "search": searchReducer,
        "bookmarks": bookmarksReducer,
        "addRecipe": addRecipeReducer,
        "ui": uiRdducer
}
   const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
      })

export default store