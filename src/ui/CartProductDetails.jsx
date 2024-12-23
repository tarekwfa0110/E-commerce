import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
  const response = await fetch('/api/products'); 
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const ProductDetails = ({ productId }) => {

  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const product = products?.find((p) => p.id === productId);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h3>Product Details</h3>
      <p>Title: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};


ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ProductDetails;
