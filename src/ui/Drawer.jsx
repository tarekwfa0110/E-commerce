import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function TemporaryDrawer({ children, anchor, content }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                {children}
            </Button>
            <Drawer
                anchor={anchor}
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    {content}
                </Box>
            </Drawer>
        </div>
    );
}

TemporaryDrawer.propTypes = {
    children: PropTypes.node.isRequired, // Must be valid React nodes
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired, // Must be one of the valid anchor values
    content: PropTypes.node.isRequired, // Must be valid React nodes for the drawer content
};
