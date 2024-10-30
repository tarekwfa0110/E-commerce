import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
    "en", 
    "ar",
    "fr"
];

export default function SimpleListMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="">
            <List
                component="nav"
                aria-label="Language selection"
            >
                <ListItemButton
                    id="language-button"
                    aria-haspopup="listbox"
                    aria-controls="language-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        primary={options[selectedIndex]}
                        sx={{ color: 'white' }}  // Selected language in white
                    />
                </ListItemButton>
            </List>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'language-button',
                    role: 'listbox',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{ 
                            color: 'inherit'  // Keep dropdown items in default color
                        }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
