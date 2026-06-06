function Home() {
  return (
    <>
      <section className="hero">
        <h1>Unique Handmade Creations</h1>

        <p>
          Hand-painted shirts, tote bags,
          keychains and custom gifts.
        </p>

        <button>Shop Now</button>
      </section>

      <section className="categories">
        <h2>Categories</h2>

        <div className="category-grid">
          <div className="category-card">👕 Shirts</div>
          <div className="category-card">👜 Tote Bags</div>
          <div className="category-card">🖼️ Photo Frames</div>
          <div className="category-card">🔑 Key Chains</div>
        </div>
      </section>

      <h2 style={{ textAlign: "center" }}>
        Featured Products
      </h2>
    </>
  );
}

export default Home;