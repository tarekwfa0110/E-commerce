import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../api/fetch";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Main from "../components/main/Main";
import ProductFilter from "../ui/ProductFilter";

export default function Home() {
    const [buttonIndex, setButtonIndex] = useState(0);
    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div className="w-full bg-gray-100 pb-10">
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
                        products={products}
                    />
                )}
            </div>
        </div>
    );
}
