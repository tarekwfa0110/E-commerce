import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
    Box, 
    Grid, 
    TextField, 
    Button, 
    Typography,
    FormControlLabel,
    Checkbox,
    Alert 
} from '@mui/material';

export default function ShippingForm({ onSubmit, onBack }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        email: '',
        saveAddress: false
    });

    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        // Required field validation
        const requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state', 'zip', 'country', 'phone', 'email'];
        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required';
            }
        });

        // Email validation
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation - allow various formats but require at least 10 digits
        if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Zip code validation - allow international formats
        if (formData.zip && !/^[\d\s-]{4,10}$/.test(formData.zip)) {
            newErrors.zip = 'Please enter a valid postal code';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'saveAddress' ? checked : value
        }));
        // Clear error when user starts typing
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
            setSubmitError('An error occurred while saving shipping information. Please try again.');
            console.error('Shipping form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Shipping Address
            </Typography>

            {submitError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {submitError}
                </Alert>
            )}

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        value={formData.address1}
                        onChange={handleChange}
                        error={!!errors.address1}
                        helperText={errors.address1}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        value={formData.address2}
                        onChange={handleChange}
                        error={!!errors.address2}
                        helperText={errors.address2}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        value={formData.city}
                        onChange={handleChange}
                        error={!!errors.city}
                        helperText={errors.city}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        value={formData.state}
                        onChange={handleChange}
                        error={!!errors.state}
                        helperText={errors.state}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        value={formData.zip}
                        onChange={handleChange}
                        error={!!errors.zip}
                        helperText={errors.zip}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        value={formData.country}
                        onChange={handleChange}
                        error={!!errors.country}
                        helperText={errors.country}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="saveAddress"
                                color="primary"
                                checked={formData.saveAddress}
                                onChange={handleChange}
                            />
                        }
                        label="Save this address for future orders"
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button 
                    onClick={onBack}
                    disabled={isSubmitting}
                >
                    Back to Cart
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Continue to Payment'}
                </Button>
            </Box>
        </Box>
    );
}

ShippingForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
}; 