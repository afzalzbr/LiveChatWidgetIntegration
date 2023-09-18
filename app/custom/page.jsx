"use client";

import React, { useState } from "react";
import CustomChatWidget from "@/components/CustomChatWidget";
import TwoInputForm from "@/components/TwoInputForm";
import styles from "./page.module.css";

const Custom = () => {
  const [showChat, setShowChat] = useState(false);
  const [data, setData] = useState({}); // [licenseId, clientId]
  const handleSubmit = (licenseId, clientId) => {
    if (licenseId && clientId) {
      setData({ licenseId, clientId });
    }
    setShowChat(true);
  };

  const handleClear = () => {
    setShowChat(false);
    setData({});
  };

  return (
    <div className={styles.container}>
      <TwoInputForm onSubmit={handleSubmit} onClear={handleClear} />
      {showChat && <div className={styles.div2} />}
      {showChat && (
        <CustomChatWidget clientId={data.clientId} licenseId={data.licenseId} />
      )}
    </div>
  );
};

export default Custom;
