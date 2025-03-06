import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Welcome to my Portfolio
      </a>
      <div className={styles.menu}>
        {/* Menu Icon */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "assets/nav/closeIcon.png"
              : "assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        
        {/* Menu Items */}
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
