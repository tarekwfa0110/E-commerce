import PropTypes from "prop-types";
import TemporaryDrawer from "./Drawer";
import {
    IconButton,
    Typography,
    Button,
    Box,
    Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
}));

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
    const CartItem = ({ item }) => {
        const handleQuantityChange = (e, delta) => {
            e.stopPropagation();
            onUpdateQuantity(item.id, item.quantity + delta);
        };

        const handleRemove = (e) => {
            e.stopPropagation();
            onRemoveItem(item.id);
        };

        return (
            <Box sx={{ 
                p: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:last-child': {
                    borderBottom: 'none'
                }
            }}>
                <div className="flex gap-4">
                    <div className="relative w-20 h-20">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full rounded-lg object-contain bg-gray-50 p-2"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <Typography 
                            variant="subtitle1" 
                            sx={{ 
                                fontWeight: 600,
                                mb: 0.5,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            ${item.price.toFixed(2)}
                        </Typography>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <IconButton
                                    size="small"
                                    onClick={(e) => handleQuantityChange(e, -1)}
                                    disabled={item.quantity <= 1}
                                    sx={{ 
                                        border: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <Typography sx={{ minWidth: '24px', textAlign: 'center' }}>
                                    {item.quantity}
                                </Typography>
                                <IconButton
                                    size="small"
                                    onClick={(e) => handleQuantityChange(e, 1)}
                                    sx={{ 
                                        border: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </div>
                            <Typography variant="subtitle2" color="primary" fontWeight={600}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                            <IconButton
                                size="small"
                                onClick={handleRemove}
                                sx={{ color: 'error.main' }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Box>
        );
    };

    CartItem.propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        }).isRequired,
    };

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <TemporaryDrawer
            anchor="right"
            content={
                <Box sx={{ 
                    width: { xs: '100vw', sm: 400 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {/* Cart Header */}
                    <Box sx={{ 
                        p: 2, 
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                    }}>
                        <Typography variant="h6" component="h2">
                            Shopping Cart ({totalItems} items)
                        </Typography>
                    </Box>

                    {/* Cart Items */}
                    <Box sx={{ 
                        flex: 1,
                        overflowY: 'auto',
                        bgcolor: 'background.default'
                    }}>
                        {cartItems.length === 0 ? (
                            <Box sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 4,
                                gap: 2
                            }}>
                                <ShoppingCartIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
                                <Typography variant="h6" color="text.secondary">
                                    Your cart is empty
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                    Looks like you haven't added any items to your cart yet
                                </Typography>
                            </Box>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        )}
                    </Box>

                    {/* Cart Footer */}
                    {cartItems.length > 0 && (
                        <Box sx={{ 
                            p: 2,
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                        }}>
                            <Box sx={{ mb: 2 }}>
                                <div className="flex justify-between mb-2">
                                    <Typography color="text.secondary">Subtotal:</Typography>
                                    <Typography fontWeight={600}>${totalAmount.toFixed(2)}</Typography>
                                </div>
                                <div className="flex justify-between">
                                    <Typography color="text.secondary">Shipping:</Typography>
                                    <Typography color="success.main">Free</Typography>
                                </div>
                                <Divider sx={{ my: 2 }} />
                                <div className="flex justify-between">
                                    <Typography variant="h6">Total:</Typography>
                                    <Typography variant="h6" color="primary.main">
                                        ${totalAmount.toFixed(2)}
                                    </Typography>
                                </div>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                sx={{ mb: 1 }}
                            >
                                Checkout Now
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                fullWidth
                            >
                                View Cart
                            </Button>
                        </Box>
                    )}
                </Box>
            }
        >
            <IconButton aria-label="cart">
                <StyledBadge 
                    badgeContent={totalItems}
                    color="secondary"
                >
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </TemporaryDrawer>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
