import { get } from "../Services/ApiEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk("updateuser", async () => {
  try {
    const request = await get("/api/auth/CheckUser");

    const response = request.data;
    return response;
  } catch (error) {
    throw error;
  }
});
const initialState = {
  loading: null,
  error: null,
  users: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    SetUser: (state, action) => {
      state.users = action.payload;
    },
    Logout: (state, actions) => {
      state.users = null;
      state.loading = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = null;
      state.users = action.payload;
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = null;
      state.error = action.error.message;
      state.users = null;
    });
  },
});
export const { SetUser, Logout } = AuthSlice.actions;
export default AuthSlice.reducer;
