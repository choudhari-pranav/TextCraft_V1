import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoSparkles } from "react-icons/io5";
import { MdHome, MdInfo } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`${styles.navbar} ${props.mode === 'dark' ? styles.navbarDark : ''}`}>
      <div className={styles.navbarContainer}>
        <Link className={styles.brand} to="/">
          <IoSparkles className={styles.brandIcon} />
          {props.title}
        </Link>

        <button className={styles.navToggler} onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <div className={`${styles.navMenu} ${menuOpen ? styles.navMenuMobile : ''}`}>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                <MdHome /> Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`}
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                <MdInfo /> {props.AboutText}
              </Link>
            </li>
          </ul>

          <div className={styles.navRight}>
            <div className={styles.themeToggle} onClick={props.toggleMode}>
              <span className={styles.toggleLabel}>
                {props.mode === 'light' ? (
                  <>
                    <BsSunFill className={styles.toggleIcon} /> Light
                  </>
                ) : (
                  <>
                    <BsMoonStarsFill className={styles.toggleIcon} /> Dark
                  </>
                )}
              </span>
              <div className={`${styles.toggleSwitch} ${props.mode === 'dark' ? styles.toggleSwitchActive : ''}`}>
                <div className={styles.toggleSlider}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  AboutText: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};

Navbar.defaultProps = {
  title: "TextCraft",
  AboutText: "About",
};
