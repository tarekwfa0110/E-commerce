import { useQuery } from '@tanstack/react-query';

const ProductDetails = ({ productId }) => {
  // This will use the cached data if available
  const { data: products } = useQuery({
    queryKey: ["products"],
  });

  const product = products?.find(p => p.id === productId);

  if (!product) return null;

  return (
    <div>
      <h3>Product Details</h3>
      <p>Title: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;