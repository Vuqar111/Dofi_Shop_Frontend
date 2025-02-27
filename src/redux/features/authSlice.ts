import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { AuthState, SigninResponse } from '../../types/slices/authSlice';

const initialState: AuthState = {
  token: null,
  registerSuccess: null,
  registerLoading: false,
  registerError: null,
  signinSuccess: null,
  signinLoading: false,
  signinError: null,
  forgotPasswordSuccess: null,
  forgotPasswordLoading: false,
  forgotPasswordError: null,
  resetPasswordSuccess: null,
  resetPasswordLoading: false,
  resetPasswordError: null,
  isAuthenticated: false
};




export const registerUser = createAsyncThunk(
  'user/register',
  async (
    { userData }: { userData: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post<SigninResponse>(
        `${API_URL}/auth/register`,
        userData
      );
      const { token, expiresIn } = response.data;
      const expiry = new Date().getTime() + expiresIn;

      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiry', expiry.toString());

      localStorage.setItem('token', response?.data.token);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (
    { userData }: { userData: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post<SigninResponse>(
        `${API_URL}/auth/login`,
        userData
      );
      const { token, expiresIn } = response.data;
      const expiry = new Date().getTime() + expiresIn;

      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiry', expiry.toString());
      localStorage.setItem('token', response?.data.token);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'user/forgot-password',
  async (
    { userData }: { userData: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post<SigninResponse>(
        `${API_URL}/auth/forgot-password`,
        userData
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);


export const resetPassword = createAsyncThunk(
  'user/reset-password',
  async (
    { userData }: { userData: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post<SigninResponse>(
        `${API_URL}/auth/reset-password`,
        userData
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.signinLoading = true;
        state.signinError = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.signinLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.signinSuccess = action.payload.success;

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.signinLoading = false;
        state.isAuthenticated = false
        console.log(action);
        state.signinError = action.error.message as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.registerLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.registerSuccess = action.payload.success;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.isAuthenticated = false
        state.registerError = action.error.message as string;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordLoading = true;
        state.forgotPasswordError = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action: PayloadAction<any>) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordSuccess = action.payload.success;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordLoading = false;
        state.forgotPasswordError = action.error.message as string;
      })
      .addCase(resetPassword.pending, (state) => {
        state.resetPasswordLoading = true;
        state.resetPasswordError = null;
      })
      .addCase(resetPassword.fulfilled, (state, action: PayloadAction<any>) => {
        state.resetPasswordLoading = false;
        state.resetPasswordSuccess = action.payload.success;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPasswordLoading = false;
        state.resetPasswordError = action.error.message as string;
      })
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export const authActions = authSlice.actions;
export default authSlice.reducer;
