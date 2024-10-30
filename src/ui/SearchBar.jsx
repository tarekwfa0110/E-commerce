import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, Select } from '@mui/material';

const Search = styled('div')(() => ({
    borderRadius: "20px",
    backgroundColor: '#fff', // White background
    border: '1px solid #ccc', // Light gray border
    display: 'flex',
    alignItems: 'center',

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black' ,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000', // Black text color
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const CategorySelect = styled(Select)(() => ({
    
    border: 'none',
    color: '#000',
    borderRadius: `20px`,

}));

export default function SearchAppBar() {
    const [category, setCategory] = React.useState('');
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <CategorySelect
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'categories' }}
                            defaultValue=""
                        >
                            <MenuItem value="" >
                                All Categories
                            </MenuItem>
                            <MenuItem value="electronics">Electronics</MenuItem>
                            <MenuItem value="fashion">Fashion</MenuItem>
                            <MenuItem value="home">Home</MenuItem>
                        </CategorySelect>
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
