import React from 'react';

const Logo = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4b8" />
        <stop offset="100%" stopColor="#009688" />
      </linearGradient>
    </defs>
    <polygon
      points="50,3 93,26 93,74 50,97 7,74 7,26"
      fill="url(#logoGradient)"
    />
  </svg>
);

export default Logo;