import React, { useState, useEffect, useRef } from "react";
import styles from "./Alert.module.css";
import {
  MdCheckCircle,
  MdError,
  MdWarning,
  MdInfo,
  MdClose
} from "react-icons/md";

function Alert(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const alertIdRef = useRef(null);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <MdCheckCircle />;
      case 'danger':
        return <MdError />;
      case 'warning':
        return <MdWarning />;
      case 'info':
        return <MdInfo />;
      default:
        return <MdInfo />;
    }
  };

  const getAlertClass = (type) => {
    switch (type) {
      case 'success':
        return styles.alertSuccess;
      case 'danger':
        return styles.alertDanger;
      case 'warning':
        return styles.alertWarning;
      case 'info':
        return styles.alertInfo;
      default:
        return styles.alertInfo;
    }
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };

  useEffect(() => {
    if (props.alert) {
      // Create unique ID for this alert based on message and timestamp
      const alertId = `${props.alert.msg}-${Date.now()}`;

      // Only reset timer if this is a NEW alert (not a re-render)
      if (alertIdRef.current !== alertId) {
        alertIdRef.current = alertId;
        setIsVisible(true);
        setIsExiting(false);

        // Auto dismiss after 5 seconds
        const timer = setTimeout(() => {
          handleClose();
        }, 5000);

        return () => clearTimeout(timer);
      }
    }
  }, [props.alert]);

  if (!props.alert || !isVisible) {
    return <div style={{ height: '0px' }}></div>;
  }

  return (
    <div className={styles.alertContainer}>
      <div
        className={`${styles.alert} ${getAlertClass(props.alert.type)} ${isExiting ? styles.alertExit : ''}`}
        role="alert"
      >
        <div className={styles.alertIcon}>
          {getIcon(props.alert.type)}
        </div>

        <div className={styles.alertContent}>
          <strong className={styles.alertTitle}>
            {capitalize(props.alert.type)}
          </strong>
          <p className={styles.alertMessage}>{props.alert.msg}</p>
        </div>

        <button
          className={styles.alertClose}
          onClick={handleClose}
          aria-label="Close alert"
        >
          <MdClose />
        </button>

        <div className={styles.progressBar}></div>
      </div>
    </div>
  );
}

export default Alert;
