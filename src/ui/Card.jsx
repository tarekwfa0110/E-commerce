import PropTypes from 'prop-types';
import { Button, CardActions, CardContent, Typography, Card } from "@mui/material";
import BasicRating from "./Rating";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

function ProductCard({ product }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const addItem = useCartStore(state => state.addItem);

    const truncateText = (text, maxLength = 100) => {
        return text.length <= maxLength ? text : isExpanded ? text : `${text.slice(0, maxLength).trim()}...`;
    };

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: 1,
        });
    };

    return (
        <Card
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                borderRadius: { xs: 1, sm: 2 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: { sm: 'translateY(-4px)' },
                    boxShadow: { sm: '0 4px 12px rgba(0,0,0,0.1)' }
                }
            }}
        >
            <Link
                to={`/products/${product.id}`}
                className="w-full pt-2 sm:pt-4 px-2 sm:px-4 flex items-center justify-center"
            >
                <div className="relative w-full aspect-square">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </Link>

            <CardContent 
                sx={{
                    flexGrow: 1,
                    padding: { xs: 1.5, sm: 2 },
                    '&:last-child': { paddingBottom: { xs: 1.5, sm: 2 } }
                }}
            >
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 600,
                        lineHeight: 1.2,
                        height: '2.4em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        mb: 1
                    }}
                >
                    {product.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        minHeight: isExpanded ? 'auto' : '4.5em'
                    }}
                >
                    {truncateText(product.description)}
                    {product.description.length > 100 && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsExpanded(!isExpanded);
                            }}
                            className="text-blue-500 hover:text-blue-600 text-xs sm:text-sm mt-1 flex items-center gap-1"
                        >
                            {isExpanded ? (
                                <>Show less <ExpandLess fontSize="small" /></>
                            ) : (
                                <>Show more <ExpandMore fontSize="small" /></>
                            )}
                        </button>
                    )}
                </Typography>
            </CardContent>

            <CardActions 
                sx={{
                    flexDirection: 'column',
                    gap: 1.5,
                    padding: { xs: 1.5, sm: 2 },
                    paddingTop: 0
                }}
            >
                <div className="w-full flex justify-between items-center">
                    <BasicRating stars={product.rating.rate} />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1rem', sm: '1.25rem' }
                        }}
                    >
                        ${product.price.toFixed(2)}
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 1.5,
                        padding: { xs: '6px 12px', sm: '8px 16px' },
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default ProductCard;