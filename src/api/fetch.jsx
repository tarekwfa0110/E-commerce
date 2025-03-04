import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

// API error class
export class APIError extends Error {
    constructor(message, status, code) {
        super(message);
        this.status = status;
        this.code = code;
        this.name = 'APIError';
    }
}

// API client instance
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Product types
export const ProductCategories = {
    ALL: 'all',
    MENS_CLOTHING: "men's clothing",
    WOMENS_CLOTHING: "women's clothing",
    JEWELERY: 'jewelery',
    ELECTRONICS: 'electronics',
};

// API functions
export const api = {
    products: {
        getAll: async () => {
            try {
                const response = await apiClient.get('/products');
                return response.data;
            } catch (error) {
                throw new APIError(
                    error.response?.data?.message || 'Failed to fetch products',
                    error.response?.status,
                    'FETCH_PRODUCTS_ERROR'
                );
            }
        },

        getById: async (id) => {
            try {
                const response = await apiClient.get(`/products/${id}`);
                return response.data;
            } catch (error) {
                throw new APIError(
                    error.response?.data?.message || 'Failed to fetch product',
                    error.response?.status,
                    'FETCH_PRODUCT_ERROR'
                );
            }
        },

        getByCategory: async (category) => {
            try {
                const response = await apiClient.get(`/products/category/${category}`);
                return response.data;
            } catch (error) {
                throw new APIError(
                    error.response?.data?.message || 'Failed to fetch products by category',
                    error.response?.status,
                    'FETCH_CATEGORY_ERROR'
                );
            }
        },
    },
};

// Default export for backward compatibility
export default api.products.getAll;