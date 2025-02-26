export interface OrderState {
    orders: any;
    loading: boolean;
    error: string | null;
    createOrderSuccess: any;
    createOrderLoading: boolean;
    createOrderError: string | null;
    fetchOrderDetails: any;
    fetchOrderDetailsLoading: boolean;
    fetchOrderDetailsError: string | null;
    changeOrderStatusSuccess: any;
    changeOrderStatusLoading: boolean;
    changeOrderStatusError: string | null;
  }