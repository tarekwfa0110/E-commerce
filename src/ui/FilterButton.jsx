/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function FilterButton({ cat = { name: '',} , buttonIndex, setButtonIndex}) {
    return (
        <button 
            className={`
                whitespace-nowrap
                px-4 sm:px-6 lg:px-8 
                py-2 sm:py-3 lg:py-4
                text-sm sm:text-base
                border border-gray-300 
                rounded-lg sm:rounded-xl
                transition-all duration-200
                ${buttonIndex === cat.id - 1 
                    ? "bg-red-50 text-red-500 border-red-200 font-semibold" 
                    : "hover:bg-gray-50 hover:border-gray-400"
                }
            `}
            onClick={() => setButtonIndex(cat.id - 1)}
        >
            {cat.name}
        </button>
    )
}

FilterButton.propTypes = {
    cat: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool
    }).isRequired
};

export default FilterButton;