import { createSlice } from '@reduxjs/toolkit'

const bookmarksSlice = createSlice({
    name:"bookmarks",
    initialState: [],
    reducers:{
        toggleBookmark: (state, action) =>{
            const {id} = action.payload
            const exsitingRecipeIndex = state.findIndex(recipe=> recipe.id ===id)
            if(exsitingRecipeIndex === -1) state.push(action.payload)
            if(exsitingRecipeIndex >=0 ) state.splice(exsitingRecipeIndex, 1)
        },
        
    }
})

export const bookmarksActions = bookmarksSlice.actions
export default bookmarksSlice.reducer