import FilterButton from "./FilterButton"

const categories = [
    {
        id: 1,
        name: "All Products",
    },
    {
        id: 2,
        name: "MEN",
    },
    {
        id: 3,
        name: "Women",
    },
    {
        id: 4,
        name: "Jewelery"
    },
    {
        id: 5,
        name: "Electronics"
    }
];

// eslint-disable-next-line react/prop-types
function ProductFilter({buttonIndex, setButtonIndex}) {

    return (
        <div className="flex items-center justify-center gap-36">
            <div>
                <h1 className="text-4xl mb-4">Selected Products</h1>
                <p className="font-light">All our new arrivals in a exclusive brand selection</p>
            </div>

            <div className="flex justify-between items-center gap-4">
                {categories.map((cat) => <FilterButton cat={cat} key={cat.id} buttonIndex={buttonIndex} setButtonIndex={setButtonIndex}/>)}
            </div>
        </div>
    )
}

export default ProductFilter
