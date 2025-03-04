import { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ProductCategories } from '../api/fetch';
import CategoryIcon from '@mui/icons-material/Category';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import DevicesIcon from '@mui/icons-material/Devices';

const categoryIcons = {
    [ProductCategories.ALL]: <CategoryIcon />,
    [ProductCategories.MENS_CLOTHING]: <CheckroomIcon />,
    [ProductCategories.WOMENS_CLOTHING]: <CheckroomIcon />,
    [ProductCategories.JEWELERY]: <DiamondIcon />,
    [ProductCategories.ELECTRONICS]: <DevicesIcon />,
};

const categories = [
    { id: 'all', name: 'All Categories', value: ProductCategories.ALL },
    { id: 'men', name: "Men's Clothing", value: ProductCategories.MENS_CLOTHING },
    { id: 'women', name: "Women's Clothing", value: ProductCategories.WOMENS_CLOTHING },
    { id: 'jewelery', name: 'Jewelery', value: ProductCategories.JEWELERY },
    { id: 'electronics', name: 'Electronics', value: ProductCategories.ELECTRONICS },
];

export default function CategoryMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        handleClose();
        // Here you would typically handle category selection in your app
    };

    return (
        <div>
            <Button
                id="category-button"
                aria-controls={Boolean(anchorEl) ? 'category-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<WindowIcon />}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    fontWeight: 500,
                }}
            >
                Categories
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'category-button',
                }}
            >
                {categories.map((category) => (
                    <MenuItem
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                        selected={category.id === selectedCategory.id}
                        sx={{ minWidth: 200 }}
                    >
                        <ListItemIcon>
                            {categoryIcons[category.value]}
                        </ListItemIcon>
                        <ListItemText>{category.name}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
} 