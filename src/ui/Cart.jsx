import TemporaryDrawer from "./Drawer";
import React from "react";
import {
    IconButton,
    Typography,
    Button,
    Box,
    Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
}));

const Cart = ({ cartItems, setCartItems }) => {
    const CartItem = ({ item }) => {
        // Add stopPropagation to prevent drawer from closing
        const handleQuantityChange = (e, delta) => {
            e.stopPropagation();
            setCartItems(prevItems => updateQuantity(prevItems, item.id, delta));
        };

        const handleRemove = (e) => {
            e.stopPropagation();
            setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
        };

        return (
            <div className="flex items-center space-x-4 py-6 px-4 border-b border-gray-200 last:border-b-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg bg-gray-100 p-1 object-cover"
                />
                <div className="flex-1 min-w-0">
                    <Typography variant="body1" className="font-semibold truncate">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${item.price} x {item.quantity}
                    </Typography>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outlined"
                        color="inherit"
                        size="small"
                        onClick={(e) => handleQuantityChange(e, 1)}
                        className="min-w-[32px] p-1 rounded-full"
                    >
                        +
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                        variant="outlined"
                        color="inherit"
                        size="small"
                        onClick={(e) => handleQuantityChange(e, -1)}
                        className="min-w-[32px] p-1 rounded-full"
                    >
                        -
                    </Button>
                    <IconButton
                        color="inherit"
                        size="small"
                        onClick={handleRemove}
                        className="ml-2"
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        );
    };

    function updateQuantity(items, id, delta) {
        return items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        );
    }

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <TemporaryDrawer
            anchor="right"
            cartItems={cartItems}
            setCartItems={setCartItems}
            content={
                <div className="flex flex-col h-screen">
                    <div className="p-4 border-b border-gray-200">
                        <Typography variant="h6" className="text-center font-semibold">
                            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                        </Typography>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="flex flex-col items-center p-4 gap-2 border-t border-gray-200 ">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="mb-3 py-3 rounded-lg capitalize"
                        >
                            Checkout Now (${totalAmount.toFixed(2)})
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            className="py-2 rounded-lg capitalize"
                        >
                            View Cart
                        </Button>
                    </div>
                </div>
            }
        >
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItems.reduce((total, item) => total + item.quantity, 0)} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </TemporaryDrawer>
    );
};

export default Cart;