import { useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

function Shop() {
  const { products } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
          marginBottom: "20px",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <option value="all">All Categories</option>
        <option value="shirt">Shirts</option>
        <option value="frame">Photo Frames</option>
        <option value="keychain">Key Chains</option>
        <option value="slate">Slate</option>
      </select>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h3>No products found.</h3>
        )}
      </div>
    </div>
  );
}

export default Shop;