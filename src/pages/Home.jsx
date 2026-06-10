function Home() {
  return (
    <div>
      <h1>Welcome to Aarkriti</h1>

      <p>
        Handmade • Customized • Made with Love
      </p>

      {/* ABOUT SECTION */}

      <section
        style={{
          maxWidth: "900px",
          margin: "50px auto",
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
          Thank you for supporting handmade art and being
          part of this creative journey.
        </p>
      </section>
    </div>
  );
}

export default Home;