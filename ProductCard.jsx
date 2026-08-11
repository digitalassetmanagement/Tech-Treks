function ProductCard({ product }) {
  return (
    <div className="card">
      <h2>{product.name}</h2>

      <p>
        <strong>Category :</strong> {product.category}
      </p>

      <p>
        <strong>Price :</strong> ₹{product.price}
      </p>

      <p>
        <strong>Status :</strong>

        <span
          className={
            product.status === "Available" ? "available" : "unavailable"
          }
        >
          {" "}
          {product.status}
        </span>
      </p>
    </div>
  );
}

export default ProductCard;
