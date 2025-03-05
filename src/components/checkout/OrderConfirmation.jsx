import {
    Box,
    Typography,
    Paper,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import PropTypes from 'prop-types';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cartStore';

export default function OrderConfirmation({ shippingData, paymentData }) {
    const navigate = useNavigate();
    const { clearCart } = useCartStore();
    const orderId = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const handleContinueShopping = () => {
        clearCart();
        navigate('/');
    };

    // Handle potential undefined or missing data
    const safeShippingData = shippingData || {};
    const safePaymentData = paymentData || {};

    return (
        <Box sx={{ textAlign: 'center', py: 3 }}>
            <CheckCircleOutlineIcon 
                sx={{ fontSize: 64, color: 'success.main', mb: 2 }} 
            />
            <Typography variant="h5" gutterBottom>
                Thank you for your order!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
                Your order number is {orderId}
            </Typography>
            <Paper sx={{ mt: 4, p: 3, maxWidth: 600, mx: 'auto' }}>
                <Typography variant="h6" gutterBottom>
                    Order Details
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Shipping Address"
                            secondary={`${safeShippingData.firstName || ''} ${safeShippingData.lastName || ''}
                                ${safeShippingData.address1 || ''}
                                ${safeShippingData.city || ''}, ${safeShippingData.state || ''} ${safeShippingData.zip || ''}
                                ${safeShippingData.country || ''}`}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Payment Method"
                            secondary={`${(safePaymentData.paymentMethod || 'Payment').toUpperCase()} ${safePaymentData.cardNumber ? 
                                `- ****${safePaymentData.cardNumber.replace(/\s/g, '').slice(-4)}` : ''}`}
                        />
                    </ListItem>
                </List>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        We'll send you a shipping confirmation email when your order ships.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleContinueShopping}
                        sx={{ mt: 2 }}
                    >
                        Continue Shopping
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

OrderConfirmation.propTypes = {
    shippingData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        address1: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        country: PropTypes.string
    }),
    paymentData: PropTypes.shape({
        paymentMethod: PropTypes.string,
        cardNumber: PropTypes.string
    })
};

OrderConfirmation.defaultProps = {
    shippingData: {},
    paymentData: {}
}; 