import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
<<<<<<< HEAD
import Typography from '@mui/material/Typography';
=======
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)

// eslint-disable-next-line react/prop-types
export default function BasicRating({stars}) {

    return (
        <Box sx={{ '& > legend': { mt: stars } }}>
            <Rating name="read-only" value={stars} readOnly />
        </Box>
    );
}