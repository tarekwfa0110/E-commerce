import ProductCard from "../../ui/Card"
import { useQuery } from '@tanstack/react-query';

export default function Main({ buttonIndex }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {getFilteredProducts().map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
