import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
];

export default function LanguageSelector() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        handleClose();
        // Here you would typically handle language change in your app
    };

    return (
        <div>
            <Button
                color="inherit"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={<LanguageIcon />}
                sx={{
                    textTransform: 'none',
                    fontSize: '0.875rem',
                }}
            >
                {selectedLanguage.code.toUpperCase()}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'language-button',
                }}
            >
                {languages.map((language) => (
                    <MenuItem
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        selected={language.code === selectedLanguage.code}
                    >
                        {language.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
} 