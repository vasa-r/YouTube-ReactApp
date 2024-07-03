import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: true,
  },
  reducers: {
    menuToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    secondPageMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { menuToggle, secondPageMenu } = menuSlice.actions;

export default menuSlice.reducer;
