import React from "react";

const Wave = () => (
  <svg
    style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: "180px", zIndex: 0 }}
    viewBox="0 0 1440 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="footer-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#35FB8E" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#208A65" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    <path>
      <animate
        attributeName="d"
        dur="8s"
        repeatCount="indefinite"
        values="M0,80 Q360,120 720,80 T1440,80 V180 H0 Z;M0,100 Q360,60 720,100 T1440,100 V180 H0 Z;M0,80 Q360,120 720,80 T1440,80 V180 H0 Z"
      />
    </path>
    <path
      d="M0,80 Q360,120 720,80 T1440,80 V180 H0 Z"
      fill="url(#footer-gradient)"
      opacity="0.8"
    />
  </svg>
);

export default Wave; 