import React from "react";
import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={styles.NotificationBox}>
      <p className={styles.NotificationMessage}>Contact already exist.</p>
    </div>
  );
};

export default Notification;
