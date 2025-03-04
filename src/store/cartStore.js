import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            totalAmount: 0,

            // Add item to cart
            addItem: (product, quantity = 1) => {
                set((state) => {
                    const existingItem = state.items.find((item) => item.id === product.id);
                    const updatedItems = existingItem
                        ? state.items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        )
                        : [...state.items, { ...product, quantity }];

                    return {
                        items: updatedItems,
                        totalItems: get().calculateTotalItems(updatedItems),
                        totalAmount: get().calculateTotalAmount(updatedItems),
                    };
                });
            },

            // Remove item from cart
            removeItem: (productId) => {
                set((state) => {
                    const updatedItems = state.items.filter((item) => item.id !== productId);
                    return {
                        items: updatedItems,
                        totalItems: get().calculateTotalItems(updatedItems),
                        totalAmount: get().calculateTotalAmount(updatedItems),
                    };
                });
            },

            // Update item quantity
            updateQuantity: (productId, quantity) => {
                set((state) => {
                    const updatedItems = state.items.map((item) =>
                        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
                    ).filter((item) => item.quantity > 0);

                    return {
                        items: updatedItems,
                        totalItems: get().calculateTotalItems(updatedItems),
                        totalAmount: get().calculateTotalAmount(updatedItems),
                    };
                });
            },

            // Clear cart
            clearCart: () => {
                set({ items: [], totalItems: 0, totalAmount: 0 });
            },

            // Helper functions
            calculateTotalItems: (items) => {
                return items.reduce((total, item) => total + item.quantity, 0);
            },

            calculateTotalAmount: (items) => {
                return items.reduce((total, item) => total + item.price * item.quantity, 0);
            },
        }),
        {
            name: 'cart-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useCartStore; 