import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-overflow-scrolling: touch;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    transition: background-color 0.4s ease, color 0.4s ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    background-image: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        ${({ theme }) =>
          theme.name === "dark" ? "rgba(0, 255, 65, 0.03)" : "rgba(0, 0, 0, 0.02)"} 2px,
        ${({ theme }) =>
          theme.name === "dark" ? "rgba(0, 255, 65, 0.03)" : "rgba(0, 0, 0, 0.02)"} 4px
      );
    background-size: 100% 4px;
    animation: scanline 8s linear infinite;
  }

  @keyframes scanline {
    0% { background-position: 0 0; }
    100% { background-position: 0 100vh; }
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, ${({ theme }) =>
        theme.colors.accent.green}08 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${({ theme }) =>
        theme.colors.accent.cyan}06 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, ${({ theme }) =>
        theme.colors.accent.amber}05 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
    animation: pulse 15s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }



  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  main {
    position: relative;
    z-index: 10;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent.green};
    color: ${({ theme }) => theme.colors.background};
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.accent.green}60;
  }

  /* Scrollbar - Console style */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(245, 245, 245, 0.8)"};
    border-left: 1px solid ${({ theme }) => theme.colors.accent.green}20;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent.green}60,
      ${({ theme }) => theme.colors.accent.cyan}60
    );
    border-radius: 0;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
    
    &:hover {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.accent.green},
        ${({ theme }) => theme.colors.accent.cyan}
      );
      box-shadow: 
        0 0 10px ${({ theme }) => theme.colors.accent.green}60,
        inset 0 0 10px ${({ theme }) => theme.colors.accent.green}30;
    }
  }

  /* Global glow utilities */
  .glow-green {
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent.green}40,
                0 0 30px ${({ theme }) => theme.colors.accent.green}20;
  }

  .glow-amber {
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent.amber}40,
                0 0 30px ${({ theme }) => theme.colors.accent.amber}20;
  }

  .glow-cyan {
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent.cyan}40,
                0 0 30px ${({ theme }) => theme.colors.accent.cyan}20;
  }

  /* Smooth transitions for theme changes */
  * {
    transition-property: background-color, border-color, color, opacity, box-shadow, transform, filter;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Code-like styling helpers */
  code, pre {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  /* Console cursor effect */
  .console-cursor::after {
    content: "▋";
    color: ${({ theme }) => theme.colors.accent.green};
    animation: blink 1s infinite;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Terminal window effect */
  .terminal-window {
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(245, 245, 245, 0.8)"};
    border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
    border-radius: 8px;
    box-shadow: 
      0 0 20px ${({ theme }) => theme.colors.accent.green}20,
      inset 0 0 20px ${({ theme }) => theme.colors.accent.green}05;
    backdrop-filter: blur(10px);
  }

  /* Glitch effect */
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

  .glitch:hover {
    animation: glitch 0.3s infinite;
    text-shadow: 
      2px 0 ${({ theme }) => theme.colors.accent.cyan},
      -2px 0 ${({ theme }) => theme.colors.accent.amber};
  }

  /* Neon glow text */
  .neon-text {
    text-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor,
      0 0 20px currentColor;
  }

  /* Matrix rain effect (subtle) */
  @keyframes matrix {
    0% { transform: translateY(-100vh); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }

  /* Performance optimizations */
  * {
    will-change: auto;
  }


  /* Focus styles with glow */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.green};
    outline-offset: 4px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}40;
    border-radius: 4px;
  }
`;
