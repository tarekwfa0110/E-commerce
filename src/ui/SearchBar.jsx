import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { 
    InputBase, 
    IconButton, 
    Paper,
    Popper,
    List,
    ListItem,
    ListItemText,
    Typography,
    Chip,
    Box,
    Fade
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../store/searchStore';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: theme.spacing(2),
        width: '100%',
    },
}));

const MAX_HISTORY = 5;
const MIN_SEARCH_LENGTH = 2;

export default function SearchBar() {
    const navigate = useNavigate();
    const { setSearchQuery, addToHistory, searchHistory, recentSearches } = useSearchStore();
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Update search results in real-time as user types
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (localSearchTerm.length >= MIN_SEARCH_LENGTH) {
                setSearchQuery(localSearchTerm);
            } else if (localSearchTerm.length === 0) {
                setSearchQuery('');
            }
        }, 300); // 300ms delay for debouncing

        return () => clearTimeout(delayDebounceFn);
    }, [localSearchTerm, setSearchQuery]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setLocalSearchTerm(value);
        setShowSuggestions(value.length >= MIN_SEARCH_LENGTH);
        setAnchorEl(event.currentTarget);
    };

    const handleClearSearch = () => {
        setLocalSearchTerm('');
        setSearchQuery('');
        setShowSuggestions(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (localSearchTerm.trim()) {
            setSearchQuery(localSearchTerm);
            addToHistory(localSearchTerm);
            navigate('/');
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (term) => {
        setLocalSearchTerm(term);
        setSearchQuery(term);
        addToHistory(term);
        setShowSuggestions(false);
        navigate('/');
    };

    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: '8px',
                    px: 2,
                    py: 0.5,
                }}
            >
                <StyledInputBase
                    value={localSearchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    inputProps={{ 'aria-label': 'search products' }}
                />
                {localSearchTerm && (
                    <IconButton
                        size="small"
                        aria-label="clear"
                        onClick={handleClearSearch}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <Popper
                open={showSuggestions && (searchHistory.length > 0 || recentSearches.length > 0)}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
                style={{ width: anchorEl?.offsetWidth, zIndex: 1300 }}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper 
                            elevation={3}
                            sx={{ 
                                mt: 1, 
                                maxHeight: '400px',
                                overflow: 'auto'
                            }}
                        >
                            {searchHistory.length > 0 && (
                                <>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}
                                        color="text.secondary"
                                    >
                                        <HistoryIcon fontSize="small" /> Recent Searches
                                    </Typography>
                                    <List dense>
                                        {searchHistory.map((term, index) => (
                                            <ListItem
                                                key={index}
                                                button
                                                onClick={() => handleSuggestionClick(term)}
                                            >
                                                <ListItemText primary={term} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </>
                            )}

                            {recentSearches.length > 0 && (
                                <>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}
                                        color="text.secondary"
                                    >
                                        <TrendingUpIcon fontSize="small" /> Popular Searches
                                    </Typography>
                                    <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {recentSearches.map((term, index) => (
                                            <Chip
                                                key={index}
                                                label={term}
                                                onClick={() => handleSuggestionClick(term)}
                                                size="small"
                                            />
                                        ))}
                                    </Box>
                                </>
                            )}
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
}
