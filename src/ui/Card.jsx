/* eslint-disable react/prop-types */
import { Button, CardActions, CardContent, Typography, Card } from "@mui/material"
import BasicRating from "./Rating"
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
function ProductCard({ product }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return isExpanded ? text : `${text.slice(0, maxLength).trim()}...`;
    };

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
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductCard