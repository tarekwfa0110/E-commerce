import PropTypes from "prop-types";
import Header2 from "./FixedCartIcon";
import Header3 from "./Header3";

function MainHeader({ cartItems, setCartItems }) {
    return (
        <>
            <Header2 cartItems={cartItems} setCartItems={setCartItems} />
            <Header3 />
        </>
    );
}

MainHeader.propTypes = {
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

export default MainHeader;
