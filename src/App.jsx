import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import ErrorBoundary from './components/common/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Configure React Query
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Layout>
                            <Suspense fallback={<LoadingScreen />}>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/products/:id" element={<ProductDetailsPage />} />
                                    <Route path="/checkout" element={<CheckoutPage />} />
                                    <Route path="*" element={<NotFoundPage />} />
                                </Routes>
                            </Suspense>
                        </Layout>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </ThemeProvider>
                </QueryClientProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;