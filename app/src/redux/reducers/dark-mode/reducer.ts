import { createSlice } from '@reduxjs/toolkit';
export const initialState = false;
const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers: {
      toggleDarkMode: (state, action) =>{
        console.log(action)
        return !state
      }

  }

});
export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
