import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transition);

    return () => window.removeEventListener("scroll", transition);
  }, []);
  return (
    <nav className={`navbar ${show && "nav_black"}`}>
      <div className="nav_content">
        <Link to="/">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
            className="logo"
          />
        </Link>
        <Link to="/profile">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          alt="avatar"
          className="avatar"
        />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
