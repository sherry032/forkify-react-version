import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showModal: false,
    isLoading: false,
    error: null
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers:{
        showModal: (state) =>{
            state.showModal = true
        },
        closeModal: (state) =>{
            state.showModal = false
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action)=>{
            state.error = action.payload
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer