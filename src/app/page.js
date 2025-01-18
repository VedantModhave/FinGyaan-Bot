"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import ChatComponent from "./components/ChatComponent";
import styles from './page.module.css';

export default function Home() {
  const [showText, setShowText] = useState(false);
  const fullWelcomeText = "Welcome to "; // Static part of the welcome text
  const animatedText = "FinBot"; // The animated part
  const descriptionText = "Your personal financial advisor, here to assist you."; // Short description

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Show text after a delay
    }, 500); // Delay before showing text

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      <div className="text-container">
        <h1 className={`welcome-message ${showText ? 'fade-in' : ''}`} style={{ fontSize: 'var(--base-font-size-large)' }}>
          <span style={{ color: 'white' }}>{fullWelcomeText}</span>
          <span className="gradient-text">{animatedText}</span> {/* Animated gradient text */}
        </h1>
        {showText && (
          <p className={`description ${showText ? 'fade-in' : ''}`}>{descriptionText}</p> // Short description with fade-in
        )}
      </div>
      <ChatComponent />
    </div>
  );
}