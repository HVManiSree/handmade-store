import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

import logo from "../assets/logo upt.png";

function Splash() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, [navigate]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="Aarkriti" className="logo" />
    </div>
  );
}

export default Splash;