import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

const fetchBooks = createAsyncThunk("books/fetch", async () => {
  const res = await apiService.get();
  return res.data;
});

export { fetchBooks };
