import ProductCard from "./ProductCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import EmptyState from "./EmptyState";
import useProducts from "../hooks/useProducts";

function ProductList({ apiMode }) {
  const { products, loading, error, retry } = useProducts(apiMode);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={retry} />;
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
