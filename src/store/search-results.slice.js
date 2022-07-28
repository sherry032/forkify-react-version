import { createSlice } from '@reduxjs/toolkit'
import { RES_PER_PAGE } from '../helper/config'


const initialState = {
    results:[],
    page: 1,
    query: "",
    resultsPerPage: RES_PER_PAGE,
    totalPages: 1,
}

const searchResultsSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        setSearchResults:(state, action)=>{
            state.results = action.payload
            const {resultsPerPage } = state
            state.totalPages = Math.ceil(action.payload.length / resultsPerPage)
        },
        setQuery: (state, action) => {
            state.query = action.payload
        },
        incrementPage: (state) => {
            
            state.page ++
            if(state.page === state.totalPages - 1) return
            
        },
        decrementPage: (state) =>{
            if(state.page === 1) return
            state.page --
        },
    }
})

export default searchResultsSlice.reducer

export const searchResultsActions = searchResultsSlice.actions

