import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
        // You can also log the error to an error reporting service here
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                            textAlign: 'center',
                            gap: 3,
                        }}
                    >
                        <ErrorOutlineIcon sx={{ fontSize: 64, color: 'error.main' }} />
                        <Typography variant="h4" component="h1" gutterBottom>
                            Oops! Something went wrong
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleReset}
                            size="large"
                        >
                            Return to Home
                        </Button>
                        {process.env.NODE_ENV === 'development' && (
                            <Box sx={{ mt: 4, textAlign: 'left' }}>
                                <Typography variant="h6" gutterBottom>
                                    Error Details:
                                </Typography>
                                <pre style={{ 
                                    overflow: 'auto', 
                                    padding: '1rem',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '4px'
                                }}>
                                    {this.state.error?.toString()}
                                    {'\n'}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </Box>
                        )}
                    </Box>
                </Container>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary; 