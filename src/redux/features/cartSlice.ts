import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    color: string;
}

interface CartState {
    items: CartItem[];
    listProduct: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
    try {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage", error);
        return [];
    }
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart to localStorage", error);
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromLocalStorage(),
        listProduct: []
    } as CartState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProductIndex = state.items.findIndex(
                (item) => item.id === action.payload.id && item.color === action.payload.color
            );

            if (existingProductIndex !== -1) {
                // Increase quantity if the product with the same color exists
                state.items[existingProductIndex].quantity += 1;
            } else {
                // Add as a new entry
                state.items.push(action.payload);
            }

            saveCartToLocalStorage(state.items);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item: CartItem) => item.id !== action.payload);
            saveCartToLocalStorage(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            saveCartToLocalStorage(state.items);
        },
        updateCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
            saveCartToLocalStorage(state.items);
        },
        listProduct: (state, action: PayloadAction<CartItem[]>) => {
            state.listProduct = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, clearCart, updateCart, listProduct } = cartSlice.actions;
export default cartSlice.reducer;