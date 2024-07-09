import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menuSlice.jsx";
import chatSlice from "../slices/chatSlice.jsx";

const appStore = configureStore({
  reducer: {
    menu: menuSlice,
    chat: chatSlice,
  },
});

export default appStore;
