import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../ui/Card";
import fetchProducts from "../../api/fetch";

export default function Main({ buttonIndex, cartItems, setCartItems }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const getFilteredProducts = () => {
        switch (buttonIndex) {
            case 0:
                return data;
            case 1:
                return data.filter((x) => x.category === "men's clothing");
            case 2:
                return data.filter((x) => x.category === "women's clothing");
            case 3:
                return data.filter((x) => x.category === "jewelery");
            case 4:
                return data.filter((x) => x.category === "electronics");
            default:
                return data;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {getFilteredProducts().map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                ))}
            </div>
        </div>
    );
}

Main.propTypes = {
    buttonIndex: PropTypes.number.isRequired,
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
