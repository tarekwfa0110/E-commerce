import ProductCard from "../../ui/Card"
import {  useQueryClient } from '@tanstack/react-query';


// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Main({ buttonIndex, setButtonIndex }) {

    const queryClient = useQueryClient();
    const data = queryClient.getQueryData('products');


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {buttonIndex === 0 && data.map((product) => (
                    <ProductCard product={product} key={product.id} />
                )) }
                {buttonIndex === 1 && data.filter(x => x.category == "men's clothing").map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {buttonIndex === 2 && data.filter(x => x.category == "women's clothing").map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {buttonIndex === 3 && data.filter(x => x.category == "jewelery").map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {buttonIndex === 4 && data.filter(x => x.category == "electronics").map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}

            </div>
        </div>
    );
}
