import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    textAlign: 'center',
                    gap: 3,
                }}
            >
                <ErrorOutlineIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
                <Typography variant="h3" component="h1">
                    404
                </Typography>
                <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/')}
                    size="large"
                >
                    Return to Home
                </Button>
            </Box>
        </Container>
    );
}

export default NotFoundPage; 