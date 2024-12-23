
import { Box, Typography, Divider } from '@mui/material';



export const OrderSummary = () => {
    const items = [
        { name: 'Silver High Neck Sweater', quantity: 1, price: 210.00 },
        { name: 'Yellow Casual Sweater', quantity: 1, price: 110.00 },
        { name: 'Denim Blue Jeans', quantity: 1, price: 140.00 }
    ];

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const tax = 40.00;
    const total = subtotal + tax;

    return (
        <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Your Order</Typography>

            {items.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography>
                        {item.quantity} x {item.name}
                    </Typography>
                    <Typography>${item.price.toFixed(2)}</Typography>
                </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Tax:</Typography>
                <Typography>${tax.toFixed(2)}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">${total.toFixed(2)}</Typography>
            </Box>
        </Box>
    );
};