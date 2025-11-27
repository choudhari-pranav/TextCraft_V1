import React from "react";
import styles from "./Footer.module.css";
import { IoSparkles } from "react-icons/io5";
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MdHome, MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer({ mode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.footer} ${mode === 'dark' ? styles.footerDark : ''}`}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>
            <IoSparkles className={styles.footerTitleIcon} />
            TextCraft
          </h3>
          <p className={styles.footerDescription}>
            Transform your text with powerful tools. Convert case, remove extra spaces,
            and analyze your content with ease. Your all-in-one text utility platform.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/" className={styles.footerLink}>
                <MdHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.footerLink}>
                <MdInfo /> About
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Connect With Me</h3>
          <div className={styles.socialLinks}>
            <span
              className={`${styles.socialIcon} ${styles.socialIconDisabled}`}
              aria-label="GitHub"
              title="Link coming soon"
            >
              <FaGithub />
            </span>
            <span
              className={`${styles.socialIcon} ${styles.socialIconDisabled}`}
              aria-label="LinkedIn"
              title="Link coming soon"
            >
              <FaLinkedin />
            </span>
            <span
              className={`${styles.socialIcon} ${styles.socialIconDisabled}`}
              aria-label="Twitter"
              title="Link coming soon"
            >
              <FaTwitter />
            </span>
            <span
              className={`${styles.socialIcon} ${styles.socialIconDisabled}`}
              aria-label="Email"
              title="Link coming soon"
            >
              <FaEnvelope />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} TextCraft
            <FaHeart className={styles.heartIcon} />
          </p>
          <small className={styles.madeBy}>
            Crafted with passion by <span className={styles.authorName}>Pranav</span>
          </small>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <FaArrowUp className={styles.backToTopIcon} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
