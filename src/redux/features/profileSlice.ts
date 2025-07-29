import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { ProfileState } from '../../types/slices/profileSlice';

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
  updateProfileSuccess: null,
  updateProfileLoading: false,
  updateProfileError: null,
  updateProfilePasswordSuccess: null,
  updateProfilePasswordLoading: false,
  updateProfilePasswordError: null,
};

export const profileDetails = createAsyncThunk(
  `/profile/details`,
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      }
  }
);

export const updateProfile = createAsyncThunk(
  `/profile/update`,
  async ({ updatedProfile }: { updatedProfile: any }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${API_URL}/profile/update`, updatedProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('token', response.data.access_token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || 'Failed to update profile'
      );
    }
  }
);

export const updateProfilePassword = createAsyncThunk(
  'profile/profileUpdatePassword',
  async (
    { updatedProfilePassword }: { updatedProfilePassword: any },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${API_URL}/profile/change-password`,
        updatedProfilePassword,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || 'Failed to change password'
      );
    }
  }
);

// Create the auth slice
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        profileDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.profile = action.payload;
        }
      )
      .addCase(profileDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProfile.pending, (state) => {
        state.updateProfileLoading = true;
        state.updateProfileError = null;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<any>) => {
        state.updateProfileLoading = false;
        state.updateProfileSuccess = action.payload.success;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updateProfileLoading = false;
        state.updateProfileError = action.payload as string;
      })
      .addCase(updateProfilePassword.pending, (state) => {
        state.updateProfilePasswordLoading = true;
        state.updateProfilePasswordError = null;
      })
      .addCase(
        updateProfilePassword.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.updateProfilePasswordLoading = false;
          state.updateProfilePasswordSuccess = action.payload.success;
        }
      )
      .addCase(updateProfilePassword.rejected, (state, action) => {
        state.updateProfilePasswordLoading = false;
        state.updateProfilePasswordError = action.payload as string;
      });
  },
});

// Export actions and reducer
export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
 