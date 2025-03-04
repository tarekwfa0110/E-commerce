import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../ui/Card";
import fetchProducts from "../../api/fetch";
import useSearchStore from "../../store/searchStore";

export default function Main({ buttonIndex }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
    const searchQuery = useSearchStore((state) => state.searchQuery);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const getFilteredProducts = () => {
        let filteredProducts = data;

        // Filter by category
        switch (buttonIndex) {
            case 1:
                filteredProducts = data.filter((x) => x.category === "men's clothing");
                break;
            case 2:
                filteredProducts = data.filter((x) => x.category === "women's clothing");
                break;
            case 3:
                filteredProducts = data.filter((x) => x.category === "jewelery");
                break;
            case 4:
                filteredProducts = data.filter((x) => x.category === "electronics");
                break;
            default:
                break;
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredProducts = filteredProducts.filter((product) =>
                product.title.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredProducts();

    if (filteredProducts.length === 0) {
        return (
            <div className="text-center py-8">
                <h2 className="text-xl font-semibold mb-2">No products found</h2>
                <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

Main.propTypes = {
    buttonIndex: PropTypes.number.isRequired,
};
