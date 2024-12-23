
import { Box, Typography, Card, CardContent, IconButton, Button } from '@mui/material';




export const DeliveryAddress = () => {
    const addresses  = [
        {
            id: '1',
            type: 'Home',
            address: '375 Subidbazaar, MA 2351',
            street: '435 Bristol, MA 2351',
            phone: '+17804084466'
        },
        {
            id: '2',
            type: 'Office',
            address: '645 Bondorbazaar, MA 2351',
            street: '968 Brockton, MA 2351',
            phone: '+18334271710'
        },
        {
            id: '3',
            type: 'Office 2',
            address: '324 Ambarkhana, MA 2351',
            street: '777 Kazi, MA 2351',
            phone: '+17754739407'
        }
    ];

    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">2. Delivery Address</Typography>
                <Button variant="outlined" color="primary">Add New Address</Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {addresses.map((address) => (
                    <Card key={address.id} sx={{ minWidth: 300, flex: 1 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="subtitle1" fontWeight="bold">{address.type}</Typography>
                                <Box>
                                    <IconButton size="small">

                                    </IconButton>
                                    <IconButton size="small" color="error">

                                    </IconButton>
                                </Box>
                            </Box>
                            <Typography variant="body2">{address.address}</Typography>
                            <Typography variant="body2">{address.street}</Typography>
                            <Typography variant="body2" color="text.secondary">{address.phone}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};