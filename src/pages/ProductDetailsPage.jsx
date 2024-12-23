
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import {  useParams, Link } from "react-router-dom";
import fetchProducts from "../api/fetch";
import Footer from "../components/footer/Footer";


export default function ProductDetails({setCartItems }) {
    const { id } = useParams();
    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const product = products?.find(p => p.id === parseInt(id));
    if (!product) return <div>Product not found</div>;

    const addToCart = () => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className="w-full bg-gray-100 min-h-screen">
            <div className="w-[90%] m-auto pt-8">
                <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 block">
                    ← Back to Home
                </Link>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-3xl font-bold mb-4">${product.price}</p>
                            <button
                                onClick={addToCart}
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

ProductDetails.propTypes = {
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