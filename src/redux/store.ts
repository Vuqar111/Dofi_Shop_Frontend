// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import productsReducer from './features/productSlice';
import ordersReducer from "./features/orderSlice";
import profileReducer from './features/profileSlice';
const store = configureStore({  
    reducer: {
      auth: authReducer,
      profile: profileReducer,
      products: productsReducer,
      orders: ordersReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;