/* eslint-disable react/prop-types */
import { Button, CardActions, CardContent, Typography, Card } from "@mui/material"
import BasicRating from "./Rating"
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
<<<<<<< HEAD
function ProductCard({ product }) {
=======
function ProductCard({ product, cartItems, setCartItems }) {
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return isExpanded ? text : `${text.slice(0, maxLength).trim()}...`;
    };

<<<<<<< HEAD
=======
    const handleAddToCart = () => {
        setCartItems(cartItems => {
            const existingItem = cartItems.find((x) => x.id === product.id);

            if (existingItem) {
                return cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...cartItems, {
                id: product.id,
                image: product.image,
                title: product.title, 
                price: product.price,
                quantity: 1
            }];
        });


    }

>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
    return (
        <Card sx={{ maxWidth: 345 }}
            key={product.id}
            className="flex flex-col justify-between items-center"
        >
            <img
                width={200}
                height={100}
                alt="green iguana"
                src={product.image}
                className="m-auto"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>{truncateText(product.description)}</p>
                    {product.description.length > 100 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-blue-500 hover:text-blue-600 text-sm mt-1 flex items-center gap-1"
                        >
                            {isExpanded ? (
                                <>
                                    <p>Show less</p>
                                    <ExpandLess />
                                </>
                            ) : (
                                <>
                                    <p>Show more</p>
                                    <ExpandMore />
                                </>
                            )}
                        </button>
                    )}
                </Typography>
            </CardContent>
            <CardActions className='flex flex-col justify-between gap-4'>
                <BasicRating stars={product.rating.rate} />
<<<<<<< HEAD
                <Button size="small">Add to Cart</Button>
=======
                <p className="bg-gray-200 p-4 rounded-xl">${product.price}</p>
                <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
            </CardActions>
        </Card>
    )
}
export default ProductCard