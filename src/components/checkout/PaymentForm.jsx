import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    Alert
} from '@mui/material';

export default function PaymentForm({ onSubmit, onBack }) {
    const [formData, setFormData] = useState({
        paymentMethod: 'credit',
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (formData.paymentMethod === 'credit' || formData.paymentMethod === 'debit') {
            // Card name validation
            if (!formData.cardName) {
                newErrors.cardName = 'Card name is required';
            }

            // Card number validation
            if (!formData.cardNumber) {
                newErrors.cardNumber = 'Card number is required';
            } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
                newErrors.cardNumber = 'Please enter a valid 16-digit card number';
            }

            // Expiry date validation
            if (!formData.expDate) {
                newErrors.expDate = 'Expiry date is required';
            } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expDate)) {
                newErrors.expDate = 'Please enter a valid expiry date (MM/YY)';
            } else {
                const [month, year] = formData.expDate.split('/');
                const expiry = new Date(2000 + parseInt(year, 10), parseInt(month, 10) - 1);
                if (expiry < new Date()) {
                    newErrors.expDate = 'Card has expired';
                }
            }

            // CVV validation
            if (!formData.cvv) {
                newErrors.cvv = 'CVV is required';
            } else if (!/^\d{3,4}$/.test(formData.cvv)) {
                newErrors.cvv = 'Please enter a valid CVV';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        let formattedValue = value;

        // Format card number with spaces
        if (name === 'cardNumber') {
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length <= 16) {
                formattedValue = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
            } else {
                return; // Don't update if more than 16 digits
            }
        }

        // Format expiry date
        if (name === 'expDate') {
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length <= 4) {
                if (digitsOnly.length > 2) {
                    formattedValue = `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`;
                } else {
                    formattedValue = digitsOnly;
                }
            } else {
                return; // Don't update if more than 4 digits
            }
        }

        // Format CVV (numbers only)
        if (name === 'cvv') {
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length <= 4) {
                formattedValue = digitsOnly;
            } else {
                return; // Don't update if more than 4 digits
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: formattedValue
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitError('');

        if (!validateForm()) {
            setSubmitError('Please correct the errors before proceeding.');
            return;
        }

        try {
            setIsSubmitting(true);
            await onSubmit(formData);
        } catch (error) {
            setSubmitError('An error occurred while processing payment. Please try again.');
            console.error('Payment submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Payment Method
            </Typography>

            {submitError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {submitError}
                </Alert>
            )}

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select Payment Method</FormLabel>
                        <RadioGroup
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="credit"
                                control={<Radio />}
                                label="Credit Card"
                            />
                            <FormControlLabel
                                value="debit"
                                control={<Radio />}
                                label="Debit Card"
                            />
                            <FormControlLabel
                                value="paypal"
                                control={<Radio />}
                                label="PayPal"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {(formData.paymentMethod === 'credit' || formData.paymentMethod === 'debit') && (
                    <>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cardName"
                                name="cardName"
                                label="Name on card"
                                fullWidth
                                value={formData.cardName}
                                onChange={handleChange}
                                error={!!errors.cardName}
                                helperText={errors.cardName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cardNumber"
                                name="cardNumber"
                                label="Card number"
                                fullWidth
                                value={formData.cardNumber}
                                onChange={handleChange}
                                error={!!errors.cardNumber}
                                helperText={errors.cardNumber}
                                inputProps={{
                                    maxLength: 19
                                }}
                                placeholder="1234 5678 9012 3456"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="expDate"
                                name="expDate"
                                label="Expiry date"
                                fullWidth
                                value={formData.expDate}
                                onChange={handleChange}
                                error={!!errors.expDate}
                                helperText={errors.expDate}
                                placeholder="MM/YY"
                                inputProps={{
                                    maxLength: 5
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cvv"
                                name="cvv"
                                label="CVV"
                                type="password"
                                fullWidth
                                value={formData.cvv}
                                onChange={handleChange}
                                error={!!errors.cvv}
                                helperText={errors.cvv}
                                inputProps={{
                                    maxLength: 4
                                }}
                                placeholder="123"
                            />
                        </Grid>
                    </>
                )}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button 
                    onClick={onBack}
                    disabled={isSubmitting}
                >
                    Back to Shipping
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
            </Box>
        </Box>
    );
}

PaymentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
}; 