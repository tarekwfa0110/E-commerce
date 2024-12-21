import { useQuery } from '@tanstack/react-query';

const ProductList = ({ onAddToCart }) => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h2>Products</h2>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
