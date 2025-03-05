import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
    Container, 
    Stepper, 
    Step, 
    StepLabel, 
    Paper, 
    Typography,
    Box,
    Alert,
    CircularProgress
} from '@mui/material';
import useCartStore from '../store/cartStore';
import CartReview from '../components/checkout/CartReview';
import ShippingForm from '../components/checkout/ShippingForm';
import PaymentForm from '../components/checkout/PaymentForm';
import OrderConfirmation from '../components/checkout/OrderConfirmation';

const steps = ['Cart Review', 'Shipping', 'Payment', 'Confirmation'];

export default function CheckoutPage() {
    const navigate = useNavigate();
    const { items, calculateTotalAmount } = useCartStore();
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [paymentData, setPaymentData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Calculate total for validation
    const total = calculateTotalAmount(items);

    // Redirect if cart is empty
    useEffect(() => {
        if (items.length === 0 && activeStep !== 3) {
            navigate('/');
        }
    }, [items, activeStep, navigate]);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
        setError('');
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
        setError('');
    };

    const handleShippingSubmit = async (data) => {
        try {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setShippingData(data);
            handleNext();
        } catch (error) {
            console.error('Shipping error:', error);
            setError('Failed to save shipping information. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePaymentSubmit = async (data) => {
        try {
            setIsLoading(true);
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 1000));
            setPaymentData(data);
            handleNext();
        } catch (error) {
            console.error('Payment error:', error);
            setError('Payment processing failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <CartReview onNext={handleNext} />;
            case 1:
                return <ShippingForm 
                    onSubmit={handleShippingSubmit} 
                    onBack={handleBack}
                />;
            case 2:
                return <PaymentForm 
                    onSubmit={handlePaymentSubmit} 
                    onBack={handleBack}
                />;
            case 3:
                return <OrderConfirmation 
                    shippingData={shippingData}
                    paymentData={paymentData}
                />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Paper 
                variant="outlined" 
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
                <Typography component="h1" variant="h4" align="center" sx={{ mb: 4 }}>
                    Checkout
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <Stepper 
                    activeStep={activeStep} 
                    sx={{ 
                        mb: 5,
                        flexWrap: { xs: 'wrap', sm: 'nowrap' }
                    }}
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                
                {isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box>
                        {getStepContent(activeStep)}
                    </Box>
                )}
            </Paper>
        </Container>
    );
} 