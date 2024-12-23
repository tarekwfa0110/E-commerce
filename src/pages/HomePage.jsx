import { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../api/fetch";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Main from "../components/main/Main";
import ProductFilter from  "../ui/ProductFilter";
import Footer from "../components/footer/Footer";
import MainHeader from "../components/header/MainHeader";

export default function Home({ cartItems, setCartItems }) {
    const [buttonIndex, setButtonIndex] = useState(0);
    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div className="w-full bg-gray-100 pb-10">
            <MainHeader cartItems={cartItems} setCartItems={setCartItems} />
            <div className="w-[90%] m-auto">
                <Hero />
                <Features />
                <ProductFilter buttonIndex={buttonIndex} setButtonIndex={setButtonIndex} />
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Main
                        buttonIndex={buttonIndex}
                        setButtonIndex={setButtonIndex}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        products={products}
                    />
                )}
                <Footer />
            </div>
        </div>
    );
}

Home.propTypes = {
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
