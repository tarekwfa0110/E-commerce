import { Box, CircularProgress, Container } from '@mui/material';

function LoadingScreen() {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                }}
            >
                <CircularProgress size={40} thickness={4} />
            </Box>
        </Container>
    );
}

export default LoadingScreen; 