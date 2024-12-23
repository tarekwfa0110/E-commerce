
import { Box, Typography, TextField, Checkbox, FormControlLabel, Card, CardContent } from '@mui/material';

export const PaymentDetails = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>3. Payment Details</Typography>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>Enter Card Information</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <TextField label="Name" fullWidth sx={{ flex: '1 1 100%' }} />
                    <TextField label="Card Number" fullWidth sx={{ flex: '1 1 100%' }} />
                    <TextField label="Expiry" sx={{ flex: 1 }} />
                    <TextField label="CVC" sx={{ flex: 1 }} />
                </Box>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Save this card"
                    sx={{ mt: 2 }}
                />
            </Box>

            <Typography variant="subtitle1" sx={{ mb: 2 }}>Saved Cards</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {['AMEX', 'MASTERCARD', 'VISA'].map((card, index) => (
                    <Card key={card} sx={{ minWidth: 200, flex: 1 }}>
                        <CardContent>
                            <Typography variant="subtitle2">{card}</Typography>
                            <Typography variant="body2">**** **** **** {4765 + index}</Typography>
                            <Typography variant="body2" color="text.secondary">Jaslynn Land</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};