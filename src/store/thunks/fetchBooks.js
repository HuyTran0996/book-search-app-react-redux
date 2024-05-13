import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

const fetchBooks = createAsyncThunk("books/fetch", async ({ input, page }) => {
  const res = await apiService.get(`${input}&page=${page}&limit=20`);
  return res.data;
});

export { fetchBooks };
