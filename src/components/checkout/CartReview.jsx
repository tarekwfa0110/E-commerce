import { 
    Box, 
    Typography, 
    Button, 
    List, 
    ListItem, 
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider 
} from '@mui/material';
import PropTypes from 'prop-types';
import useCartStore from '../../store/cartStore';
import { Link } from 'react-router-dom';

export default function CartReview({ onNext }) {
    const { items, calculateTotalAmount } = useCartStore();
    const total = calculateTotalAmount(items);

    if (items.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Your cart is empty
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    component={Link}
                    to="/"
                    sx={{ mt: 2 }}
                >
                    Continue Shopping
                </Button>
            </Box>
        );
    }

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>
            <List disablePadding>
                {items.map((item) => (
                    <ListItem key={item.id} sx={{ py: 2 }}>
                        <ListItemAvatar>
                            <Avatar 
                                variant="square" 
                                src={item.image}
                                alt={item.title}
                                sx={{ width: 72, height: 72, mr: 2 }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.title}
                            secondary={`Quantity: ${item.quantity}`}
                        />
                        <Typography variant="body1">
                            ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                    </ListItem>
                ))}
                <Divider sx={{ my: 2 }} />
                <ListItem sx={{ py: 2 }}>
                    <ListItemText primary="Subtotal" />
                    <Typography variant="subtitle1">
                        ${total.toFixed(2)}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                    <ListItemText primary="Shipping" />
                    <Typography variant="subtitle1">
                        ${(total > 100 ? 0 : 10).toFixed(2)}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="h6">
                        ${(total + (total > 100 ? 0 : 10)).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button
                    variant="contained"
                    onClick={onNext}
                    disabled={items.length === 0}
                >
                    Proceed to Shipping
                </Button>
            </Box>
        </Box>
    );
}

CartReview.propTypes = {
    onNext: PropTypes.func.isRequired
}; 