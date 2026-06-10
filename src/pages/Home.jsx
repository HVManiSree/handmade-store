import founderImage from "../assets/founder.png";

function Home() {
  return (
    <div style={{ padding: "20px" }}>

      {/* HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background:
            "linear-gradient(135deg, #ffe6f0, #fff5f8)",
          borderRadius: "20px",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#b76034",
            marginBottom: "10px",
          }}
        >
          Aarkriti
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Handmade • Customized • Crafted with Love
        </p>

        <a
          href="/shop"
          style={{
            background: "#b76034",
            color: "white",
            padding: "12px 25px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </a>
      </div>

      {/* FOUNDER SECTION */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <img
          src={founderImage}
          alt="Founder"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            border: "5px solid white",
          }}
        />

        <h1 style={{ marginTop: "20px" }}>
          Manisree
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Founder & Creative Artist
        </p>

        <p
          style={{
            maxWidth: "600px",
            margin: "10px auto",
            color: "#777",
          }}
        >
          Transforming ideas into personalized works of art.
        </p>
      </div>

      {/* ABOUT SECTION */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto 50px auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          lineHeight: "1.8",
        }}
      >
        <h2>About Aarkriti</h2>

        <p>
          Welcome to Aarkriti, a creative space where
          imagination, craftsmanship, and personalization
          come together.
        </p>

        <p>
          Every product is thoughtfully designed and
          handcrafted with care, turning simple ideas into
          meaningful keepsakes and artistic creations.
        </p>

        <p>
          From hand-painted shirts and tote bags to
          customized frames, keychains, and gifts, each
          creation is made to tell a unique story.
        </p>

        <p>
          Thank you for supporting handmade art and being
          part of this creative journey.
        </p>
      </section>

      {/* FEATURED CATEGORIES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {[
          "🎨 Hand-Painted Shirts",
          "👜 Tote Bags",
          "🖼️ Photo Frames",
          "🔑 Keychains",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div
        style={{
          background: "#fff5f8",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2>Why Choose Aarkriti?</h2>

        <p>✓ Handmade with Care</p>
        <p>✓ Fully Customized Designs</p>
        <p>✓ Premium Quality Materials</p>
        <p>✓ Crafted with Love</p>
      </div>
            {/* TESTIMONIALS */}

      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h2>What Our Customers Say</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Beautiful customization and amazing
              attention to detail. Loved my order!
            </p>
            <strong>- Happy Customer</strong>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              The hand-painted artwork was even
              better than expected.
            </p>
            <strong>- Art Lover</strong>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Unique, creative, and made with
              love. Perfect for gifting.
            </p>
            <strong>- Satisfied Customer</strong>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;