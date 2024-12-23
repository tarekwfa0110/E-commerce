import PropTypes from 'prop-types';
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Cart from "../../ui/Cart";

export default function FixedCartIcon({ cartItems, setCartItems }) {
  return (
    <div className="flex-wrap flex justify-between items-center w-[95%] mx-auto position-relative pt-6">
      <div className="flex items-center justify-center fixed z-50 bg-red-200 top-44 right-0">
        <IconButton aria-label="cart">
          <PersonIcon />
        </IconButton>

        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
}

// Prop validation
FixedCartIcon.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};
