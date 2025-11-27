import React, { useState } from "react";
import styles from "./TextForm.module.css";
import { HiOutlineArrowUp, HiOutlineArrowDown } from "react-icons/hi";
import { MdContentCopy, MdDeleteOutline } from "react-icons/md";
import { TbSparkles } from "react-icons/tb";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdPreview } from "react-icons/md";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");

  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;
  const charCount = text.replace(/\s+/g, '').length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className={`${styles.textFormContainer} ${props.mode === "dark" ? styles.darkMode : ""}`}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>{props.heading}</h1>

        <div className={styles.textareaWrapper}>
          <textarea
            className={styles.textarea}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            placeholder="Enter your text here to transform it..."
          ></textarea>
        </div>

        <div className={styles.buttonGroup}>
          <button
            disabled={text.length === 0}
            className={styles.button}
            onClick={handleUpClick}
          >
            <HiOutlineArrowUp /> UPPERCASE
          </button>
          <button
            disabled={text.length === 0}
            className={styles.button}
            onClick={handleLowClick}
          >
            <HiOutlineArrowDown /> lowercase
          </button>
          <button
            disabled={text.length === 0}
            className={styles.button}
            onClick={handleClearClick}
          >
            <MdDeleteOutline /> Clear
          </button>
          <button
            disabled={text.length === 0}
            className={styles.button}
            onClick={handleExtraSpaces}
          >
            <TbSparkles /> Remove Spaces
          </button>
          <button
            disabled={text.length === 0}
            className={styles.button}
            onClick={handleCopy}
          >
            <MdContentCopy /> Copy
          </button>
        </div>
      </div>

      <div className={styles.summaryCard}>
        <h4 className={styles.summaryTitle}><IoStatsChartOutline /> Text Statistics</h4>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>Characters:</span>
          <span className={styles.statValue}>{charCount}</span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>Words:</span>
          <span className={styles.statValue}>{wordCount}</span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>Reading Time:</span>
          <span className={styles.statValue}>{readingTime} minutes</span>
        </div>

        <div className={styles.previewSection}>
          <h3 className={styles.previewTitle}><MdPreview /> Preview</h3>
          {text.length > 0 ? (
            <div className={styles.previewText}>{text}</div>
          ) : (
            <div className={styles.emptyPreview}>Nothing to preview yet...</div>
          )}
        </div>
      </div>
    </div>
  );
}
