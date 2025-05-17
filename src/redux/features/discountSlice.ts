import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { DiscountState } from '../../types/slices/discountSlice';

const initialState: DiscountState = {
  discount: null,
  loading: false,
  error: null,
};
export const checkDiscount = createAsyncThunk(
  'discount/checkStatus',
  async (
    {
        code
    }: {code: string},
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `https://doofy-server.vercel.app/api/discounts/check/${code}`,
        {
         
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      // Return the error message to the rejected action
      return rejectWithValue(error.message);
    }
  }
);

// Create the auth slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkDiscount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkDiscount.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.discount = action.payload;
      })
      .addCase(checkDiscount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

// Export actions and reducer
export const orderactions = orderSlice.actions;
export default orderSlice.reducer;
