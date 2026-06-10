import founderImage from "../assets/founder.png";

function Home() {
  return (
    <div style={{ padding: "20px" }}>

      {/* Founder Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
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
          }}
        >
          Founder of Aarkriti
        </p>
      </div>

      {/* About Section */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          lineHeight: "1.8",
        }}
      >
        <h2>About Aarkriti</h2>

        <p>
          Welcome to Aarkriti, a creative space where art,
          imagination, and craftsmanship come together.
        </p>

        <p>
          Hi, I'm Manisree, the creator behind Aarkriti.
          Every product you see here is designed with care,
          creativity, and attention to detail.
        </p>

        <p>
          From hand-painted shirts and tote bags to
          customized frames, keychains, and personalized
          gifts, each creation is made to tell a unique
          story.
        </p>

        <p>
          My goal is to transform simple ideas into
          meaningful handmade creations that bring joy,
          preserve memories, and make every occasion
          special.
        </p>

        <p>
          Thank you for supporting handmade art and being
          part of this creative journey.
        </p>
      </section>

    </div>
  );
}

export default Home;