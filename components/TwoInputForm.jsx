"use client";

import React, { useState } from "react";
import styles from "./TwoInputFormStyles.module.css"; // Import the CSS Module

const TwoInputForm = ({ onSubmit, onClear }) => {
  const [licenseId, setLicenseId] = useState(null); // 16142280
  const [clientId, setClientId] = useState(""); //cb29ee529b302062032f83fa653c33e0
  const [isDisabled, setIsDisable] = useState(false);

  const handleLicenseIdChange = (e) => {
    setLicenseId(e.target.value);
  };

  const handleClientIdChange = (e) => {
    setClientId(e.target.value);
  };

  const handleSubmit = () => {
    if (!licenseId || !clientId) {
      return;
    }
    if (isDisabled) {
      handleClear();
      return;
    }

    if (onSubmit) {
      onSubmit(licenseId, clientId);
    }

    // You can also reset the input fields if needed
    setIsDisable(true);
  };

  const handleClear = () => {
    setClientId("");
    setLicenseId("");
    setIsDisable(false);
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className={styles["two-input-form"]}>
      {/* Apply the CSS Module class */}
      <label className={styles["input-label"]}>
        {/* Apply the CSS Module class */}
        License Id:
        <input
          type="text"
          className={styles["input-field"]} //* Apply the CSS Module class */
          value={licenseId}
          onChange={handleLicenseIdChange}
          disabled={isDisabled}
        />
      </label>
      <br />
      <label className={styles["input-label"]}>
        {/* Apply the CSS Module class */}
        Client Id:
        <input
          type="text"
          className={styles["input-field"]} //* Apply the CSS Module class */
          value={clientId}
          onChange={handleClientIdChange}
          disabled={isDisabled}
        />
      </label>
      <br />
      <button
        className={`${styles["submit-button"]} ${
          !licenseId || !clientId ? styles.disabled : ""
        }`}
        onClick={handleSubmit}
      >
        {/* Apply the CSS Module class */}
        {isDisabled ? "Clear" : "Submit"}
      </button>
    </div>
  );
};

export default TwoInputForm;
