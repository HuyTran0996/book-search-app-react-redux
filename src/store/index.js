import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export * from "./thunks/fetchBooks";
