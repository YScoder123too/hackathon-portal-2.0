import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  signupUser,
  logoutUser,
  getCurrentUser,
} from "../../app/api/authApi";

// -------------------- SIGNUP --------------------
export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const response = await signupUser(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

// -------------------- LOGIN --------------------
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUser(credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// -------------------- LOAD CURRENT USER --------------------
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    try {
      const response = await getCurrentUser();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

// -------------------- LOGOUT --------------------
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await logoutUser();
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue("Logout failed");
    }
  }
);

const initialState = {
  user: null,
  loading: true,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Signup
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Load User
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(loadUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;