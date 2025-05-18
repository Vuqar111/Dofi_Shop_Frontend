import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string;
    price: number;
    qty: number;
    color: string;
    image: string
}

interface CartState {
    items: CartItem[];
    listProduct: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
    try {
        const cart = localStorage.getItem("doofycart");
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage", error);
        return [];
    }
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
    try {
        localStorage.setItem("doofycart", JSON.stringify(cart));
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
                state.items[existingProductIndex].qty += 1;
            } else {
                // Add as a new entry
                state.items.push(action.payload);
            }

            saveCartToLocalStorage(state.items);
        },
        removeFromCart: (state, action: PayloadAction<{ id: string; color: string }>) => {
            state.items = state.items.filter(
                (item) => !(item.id === action.payload.id && item.color === action.payload.color)
            );
        
            saveCartToLocalStorage(state.items);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; color: string; qty: number }>) => {
            const product = state.items.find(
                (item) => item.id === action.payload.id && item.color === action.payload.color
            );

            if (product) {
                product.qty = action.payload.qty;
            }

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

export const { addToCart, removeFromCart, clearCart, updateCart,updateQuantity, listProduct } = cartSlice.actions;
export default cartSlice.reducer;