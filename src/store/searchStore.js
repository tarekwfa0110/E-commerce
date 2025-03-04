import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const MAX_HISTORY = 5;
const POPULAR_SEARCHES = [
    "electronics",
    "men's fashion",
    "women's clothing",
    "jewelry",
    "new arrivals",
    "sale",
    "trending"
];

const useSearchStore = create(
    persist(
        (set, get) => ({
            searchQuery: '',
            searchHistory: [],
            recentSearches: POPULAR_SEARCHES,

            setSearchQuery: (query) => set({ searchQuery: query }),

            addToHistory: (term) => set((state) => {
                const newHistory = [
                    term,
                    ...state.searchHistory.filter(t => t !== term)
                ].slice(0, MAX_HISTORY);
                
                return { searchHistory: newHistory };
            }),

            clearHistory: () => set({ searchHistory: [] }),
        }),
        {
            name: 'search-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useSearchStore; 