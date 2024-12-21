/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
<<<<<<< HEAD
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer({children, anchor}) {
    const [open, setOpen] = useState(false);
=======


export default function TemporaryDrawer({children, anchor, content}) {
    const [open, setOpen] = useState(true);
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
<<<<<<< HEAD
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
            <List >
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
=======
        <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}  >
            <List >
                {content}
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
            </List>
        </Box>
    );

    return (
<<<<<<< HEAD
        <div>
=======
        <div > 
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
            <Button onClick={toggleDrawer(true)} >
                {children}
            </Button>
            <Drawer
                anchor={anchor} // Set anchor to "right"
                open={open}
                onClose={toggleDrawer(false)}
<<<<<<< HEAD
=======
                
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
