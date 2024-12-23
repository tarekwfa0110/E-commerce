import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


// eslint-disable-next-line react/prop-types
export default function BasicRating({stars}) {

    return (
        <Box sx={{ '& > legend': { mt: stars } }}>
            <Rating name="read-only" value={stars} readOnly />
        </Box>
    );
}