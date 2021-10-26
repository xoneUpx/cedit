import { createSlice } from '@reduxjs/toolkit';
const initialState = false;
const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers: {
      toggleDarkMode(state, action) {
        return !state
      }

  }

});
export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
