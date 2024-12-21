import ProductCard from "../../ui/Card"
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';

export default function Main({ buttonIndex }) {
=======
import {  useQuery } from '@tanstack/react-query';
import fetchProducts from "../../api/fetch"

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Main({ buttonIndex, setButtonIndex, cartItems, setCartItems }) {
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

<<<<<<< HEAD
    const getFilteredProducts = () => {
        switch (buttonIndex) {
            case 0:
                return data;
            case 1:
                return data.filter(x => x.category === "men's clothing");
            case 2:
                return data.filter(x => x.category === "women's clothing");
            case 3:
                return data.filter(x => x.category === "jewelery");
            case 4:
                return data.filter(x => x.category === "electronics");
            default:
                return data;
        }
    };
=======
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
                {getFilteredProducts().map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
=======
                {buttonIndex === 0 && data.map((product) => (
                    <ProductCard cartItems={cartItems} setCartItems = {setCartItems} product={product} key={product.id}  />
                )) }
                {buttonIndex === 1 && data.filter(x => x.category == "women's clothing").map((product) => (
                    <ProductCard cartItems={cartItems} setCartItems = {setCartItems} product={product} key={product.id} />
                ))}
                {buttonIndex === 2 && data.filter(x => x.category == "men's clothing").map((product) => (
                    <ProductCard cartItems={cartItems} setCartItems = {setCartItems} product={product} key={product.id} />
                ))}
                {buttonIndex === 3 && data.filter(x => x.category == "jewelery").map((product) => (
                    <ProductCard cartItems={cartItems} setCartItems = {setCartItems} product={product} key={product.id} />
                ))}
                {buttonIndex === 4 && data.filter(x => x.category == "electronics").map((product) => (
                    <ProductCard cartItems={cartItems} setCartItems = {setCartItems} product={product} key={product.id} />
                ))}

>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
            </div>
        </div>
    );
}
