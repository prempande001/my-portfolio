
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    darkMode: true,
}



const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },
        setTheme: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export default mainSlice.reducer

export const { toggleTheme, setTheme } = mainSlice.actions