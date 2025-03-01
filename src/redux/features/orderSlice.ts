import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { OrderState } from '../../types/slices/orderSlice';

const initialState: OrderState = {
  orders: null,
  loading: false,
  error: null,
  fetchOrderDetails: null,
  fetchOrderDetailsLoading: false,
  fetchOrderDetailsError: null,
  createOrderSuccess: null,
  createOrderLoading: false,
  createOrderError: null,
  changeOrderStatusSuccess: null,
  changeOrderStatusLoading: false,
  changeOrderStatusError: null,
};
export const orderList = createAsyncThunk(
  'orders/orderList',
  async (
    {
    }: {},
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `${API_URL}/orders/seed`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

export const orderCreate = createAsyncThunk(
  'orders/orderCreate',
  async (
    { createdOrder, }: { createdOrder: any },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_URL}/orders`,
        createdOrder,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("cart");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || 'Failed to create order'
      );
    }
  }
);

export const orderDetails = createAsyncThunk(
  'orders/orderDetails',
  async ({ orderId }: { orderId: string }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/orders/seed/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);


export const orderChangeStatus = createAsyncThunk(
  'order/orderChangeStatus',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${API_URL}/orders/${id}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.log(rejectWithValue(error.response.data));
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
      .addCase(orderList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(orderList.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(orderList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(orderDetails.pending, (state) => {
        state.fetchOrderDetailsLoading = true;
        state.fetchOrderDetailsError = null;
      })
      .addCase(orderDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.fetchOrderDetailsLoading = false;
        state.fetchOrderDetails = action.payload;
      })
      .addCase(orderDetails.rejected, (state, action) => {
        state.fetchOrderDetailsLoading = false;
        state.fetchOrderDetailsError = action.payload as string;
      })
      .addCase(orderCreate.pending, (state) => {
        state.createOrderLoading = true;
        state.createOrderError = null;
      })
      .addCase(orderCreate.fulfilled, (state, action: PayloadAction<any>) => {
        state.createOrderLoading = false;
        state.createOrderSuccess = action.payload.success;
      })
      .addCase(orderCreate.rejected, (state, action) => {
        state.createOrderLoading = false;
        state.createOrderError = action.payload as string;
      })
      .addCase(orderChangeStatus.pending, (state) => {
        state.changeOrderStatusLoading = true;
        state.changeOrderStatusError = null;
      })
      .addCase(orderChangeStatus.fulfilled, (state, action: PayloadAction<any>) => {
        state.changeOrderStatusLoading = false;
        state.changeOrderStatusSuccess = action.payload.success;
      })
      .addCase(orderChangeStatus.rejected, (state, action) => {
        state.changeOrderStatusLoading = false;
        state.changeOrderStatusError = action.payload as string;
      });
  },
});

// Export actions and reducer
export const orderactions = orderSlice.actions;
export default orderSlice.reducer;
