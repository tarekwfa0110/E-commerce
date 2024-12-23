import React from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';

export const DeliveryDateTime = () => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                1. Delivery Date and Time
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl fullWidth>
                    <Select
                        value={date}
                        onChange={handleDateChange}
                        displayEmpty
                        placeholder="Delivery Date"
                    >
                        <MenuItem value="">Select Date</MenuItem>
                        <MenuItem value="today">Today</MenuItem>
                        <MenuItem value="tomorrow">Tomorrow</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <Select
                        value={time}
                        onChange={handleTimeChange}
                        displayEmpty
                        placeholder="Delivery Time"
                    >
                        <MenuItem value="">Select Time</MenuItem>
                        <MenuItem value="morning">9:00 AM - 12:00 PM</MenuItem>
                        <MenuItem value="afternoon">2:00 PM - 5:00 PM</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};