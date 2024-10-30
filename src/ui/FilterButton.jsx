/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function FilterButton({ cat = { name: '',} , buttonIndex, setButtonIndex}) {
    return (
        <button 
            className={`border border-black px-8 py-6 ${buttonIndex === cat.id - 1 ? "bg-red-100 text-red-500 border border-red-300 font-semibold " : ""} rounded-2xl`}
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