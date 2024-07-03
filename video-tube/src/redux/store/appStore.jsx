import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menuSlice.jsx";

const appStore = configureStore({
  reducer: {
    menu: menuSlice,
  },
});

export default appStore;
