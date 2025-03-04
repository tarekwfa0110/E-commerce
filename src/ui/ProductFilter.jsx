import FilterButton from "./FilterButton"

const categories = [
    {
        id: 0,
        name: "All Products",
    },
    {
        id: 1,
        name: "Men",
    },
    {
        id: 2,
        name: "Women",
    },
    {
        id: 3,
        name: "Jewelry"
    },
    {
        id: 4,
        name: "Electronics"
    }
];

// eslint-disable-next-line react/prop-types
function ProductFilter({buttonIndex, setButtonIndex}) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
                {/* Title and description section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Selected Products</h1>
                    <p className="text-sm sm:text-base text-gray-600 font-light">All our new arrivals in a exclusive brand selection</p>
                </div>

                {/* Filter buttons section - scrollable on mobile */}
                <div className="overflow-x-auto pb-2">
                    <div className="flex gap-2 sm:gap-4 min-w-max">
                        {categories.map((cat) => (
                            <FilterButton 
                                cat={cat} 
                                key={cat.id} 
                                buttonIndex={buttonIndex} 
                                setButtonIndex={setButtonIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter
