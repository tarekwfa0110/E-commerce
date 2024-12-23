import { useState } from "react";
import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header1 from "./components/header/Header1";
import FixedCartIcon from "./components/header/FixedCartIcon";


const queryClient = new QueryClient();
function App({ cartItems, setCartItems }) {
  return (
    <>
      <Header1 />
      <FixedCartIcon cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </>
  );
}

App.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
};

// App Wrapper Component
const AppWrapper = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 3,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      title: "Mens Cotton Jacket",
      price: 55.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      quantity: 1,
    },
  ]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App cartItems={cartItems} setCartItems={setCartItems} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;