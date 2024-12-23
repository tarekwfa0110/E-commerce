import { Container, Paper, Button, Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import { DeliveryDateTime } from '../ui/DeliveryDateTim';
import { DeliveryAddress } from '../ui/DeliveryAddress';
import { PaymentDetails } from '../ui/PaymentDetails';
import { OrderSummary } from '../ui/OrderSummary';


const theme = createTheme({
    palette: {
        primary: {
            main: '#d32f2f',
        },
    },
});

function CheckOutPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ mb: 4 }}>Checkout</Typography>
                <Box sx={{ display: 'flex', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                    <Box sx={{ flex: '1 1 60%' }}>
                        <Paper sx={{ p: 3, mb: 3 }}>
                            <DeliveryDateTime />
                            <DeliveryAddress />
                            <PaymentDetails />
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Place Order
                            </Button>
                        </Paper>
                    </Box>
                    <Box sx={{ flex: '1 1 40%' }}>
                        <OrderSummary />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default CheckOutPage;