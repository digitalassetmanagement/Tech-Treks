import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
function useProducts(apiMode = "success") {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts(apiMode);

      setProducts(data);
    } catch (err) {
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [apiMode]);

  return {
    products,
    loading,
    error,
    retry: loadProducts,
  };
}

export default useProducts;
