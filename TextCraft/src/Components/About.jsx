import React from "react";
import styles from "./About.module.css";
import { MdAnalytics, MdMoneyOff, MdDevices } from "react-icons/md";

export default function About({ mode }) {
  const isDark = mode === "dark";

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.titleWrapper}>
        <h1 className={`${styles.title} ${isDark ? styles.titleDark : ''}`}>
          About TextCraft
        </h1>
        <p className={`${styles.subtitle} ${isDark ? styles.subtitleDark : ''}`}>
          Your ultimate companion for text manipulation and analysis.
          Simple, fast, and powerful tools right in your browser.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {/* Feature 1 */}
        <div className={`${styles.featureCard} ${isDark ? styles.featureCardDark : ''}`}>
          <div className={`${styles.iconWrapper} ${styles.iconAnalyze}`}>
            <MdAnalytics />
          </div>
          <h2 className={`${styles.featureTitle} ${isDark ? styles.featureTitleDark : ''}`}>
            Analyze Your Text
          </h2>
          <p className={`${styles.featureDescription} ${isDark ? styles.featureDescriptionDark : ''}`}>
            TextCraft gives you a way to analyze your text quickly and efficiently.
            Get instant insights on word count, character count, and estimated reading time
            to optimize your content.
          </p>
        </div>

        {/* Feature 2 */}
        <div className={`${styles.featureCard} ${isDark ? styles.featureCardDark : ''}`}>
          <div className={`${styles.iconWrapper} ${styles.iconFree}`}>
            <MdMoneyOff />
          </div>
          <h2 className={`${styles.featureTitle} ${isDark ? styles.featureTitleDark : ''}`}>
            Free to Use
          </h2>
          <p className={`${styles.featureDescription} ${isDark ? styles.featureDescriptionDark : ''}`}>
            TextCraft is a completely free character counter tool that provides instant
            statistics. No hidden costs or subscriptions - just powerful tools available
            whenever you need them.
          </p>
        </div>

        {/* Feature 3 */}
        <div className={`${styles.featureCard} ${isDark ? styles.featureCardDark : ''}`}>
          <div className={`${styles.iconWrapper} ${styles.iconBrowser}`}>
            <MdDevices />
          </div>
          <h2 className={`${styles.featureTitle} ${isDark ? styles.featureTitleDark : ''}`}>
            Browser Compatible
          </h2>
          <p className={`${styles.featureDescription} ${isDark ? styles.featureDescriptionDark : ''}`}>
            This software works seamlessly in any web browser such as Chrome, Firefox,
            Safari, and Opera. Perfect for counting characters for Facebook, blogs,
            books, Excel documents, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
