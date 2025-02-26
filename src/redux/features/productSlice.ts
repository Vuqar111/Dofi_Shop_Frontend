import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { ProductState } from '../../types/slices/productSlice';

const initialState: ProductState = {
  products: null,
  loading: false,
  error: null,
  product: null,
  productLoading: false,
  productError: null,
};

export const productList = createAsyncThunk(
  'products/productList',
  async (
    {
      name,
      category,
      createdAt,
    }: {
      name: string;
      category: string;
      createdAt: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `${API_URL}/products?name=${name}&category=${category}&createdAt=${createdAt}`,
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







export const productDetails = createAsyncThunk(
  'products/productDetails',
  async ({ slug }: { slug: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/products/${slug}`, {

      });
      return response.data;
    } catch (error: any) {
      console.log(rejectWithValue(error.response.data));
    }
  }
);



// Create the auth slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productList.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(productDetails.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(
        productDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.productLoading = false;
          state.product = action.payload;
        }
      )
      .addCase(productDetails.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = action.payload as string;
      })
  },
});

// Export actions and reducer
export const productactions = productSlice.actions;
export default productSlice.reducer;
