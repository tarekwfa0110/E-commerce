import PropTypes from 'prop-types';
import { Button, CardActions, CardContent, Typography, Card } from "@mui/material";
import BasicRating from "./Rating";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from 'react-router';

function ProductCard({ product, setCartItems }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateText = (text, maxLength = 100) => {
        return text.length <= maxLength ? text : isExpanded ? text : `${text.slice(0, maxLength).trim()}...`;
    };

    const handleAddToCart = () => {
        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevCartItems,
                {
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                },
            ];
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
                borderRadius: 2,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
            }}
        >
            <Link
                to={`/products/${product.id}`}
                className="w-full pt-4 px-4 flex items-center justify-center"
                style={{ aspectRatio: '1/1' }}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out hover:border-2 hover:border-black hover:shadow-lg"
                />
            </Link>

            <CardContent className="flex-grow flex flex-col gap-2">
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        height: '2.4em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {product.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ minHeight: isExpanded ? 'auto' : '4.5em' }}
                >
                    {truncateText(product.description)}
                    {product.description.length > 100 && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsExpanded(!isExpanded);
                            }}
                            className="text-blue-500 hover:text-blue-600 text-sm mt-1 flex items-center gap-1"
                        >
                            {isExpanded ? (
                                <>Show less <ExpandLess /></>
                            ) : (
                                <>Show more <ExpandMore /></>
                            )}
                        </button>
                    )}
                </Typography>
            </CardContent>

            <CardActions className="flex flex-col gap-3 p-4 pt-0">
                <div className="w-full flex justify-between items-center">
                    <BasicRating stars={product.rating.rate} />
                    <Typography
                        variant="h6"
                        className="font-semibold text-lg"
                    >
                        ${product.price.toFixed(2)}
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleAddToCart}
                    sx={{
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 1.5
                    }}
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
    setCartItems: PropTypes.func.isRequired,
};

export default ProductCard;