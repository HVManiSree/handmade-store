import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Splash.css";
import logo from "../../assets/logoo.png";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/mobile/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <img
        src={logo}
        alt="Aarkriti"
        className="splash-logo"
      />

      <h1 className="splash-title">
        Aarkriti
      </h1>

      <p className="splash-tagline">
        Handmade • Customized • Crafted with Love
      </p>

      <div className="loader">
        <p
  style={{
    marginTop: "25px",
    color: "#999",
    fontSize: "14px"
  }}
>
  Loading...
</p>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Splash;