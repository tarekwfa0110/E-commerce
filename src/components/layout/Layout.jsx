import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MainHeader from '../header/MainHeader';
import Footer from '../footer/Footer';
import ScrollToTop from '../common/ScrollToTop';

function Layout({ children }) {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default'
        }}>
            <ScrollToTop />
            
            {/* Header */}
            <MainHeader />

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flex: 1,
                    width: '100%',
                    maxWidth: '1536px', // 2xl breakpoint
                    mx: 'auto',
                    px: { xs: 2, sm: 4, lg: 6 },
                    py: { xs: 2, sm: 3, lg: 4 },
                }}
            >
                {children}
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout; 