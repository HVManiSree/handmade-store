import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;