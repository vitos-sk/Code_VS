import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Terminal, ArrowDown, Code2, Server, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 100px 1.5rem;
    min-height: 90vh;
  }

  @media (max-width: 360px) {
    padding: 80px 1rem;
  }
`;

const TerminalPrompt = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const PromptText = styled.span`
  color: ${({ theme }) => theme.colors.accent.green};
  transition: color 0.3s ease;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;
  position: relative;

  &::after {
    content: "▋";
    animation: ${blink} 1s infinite;
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.accent.green};
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.accent.green} 50%,
    ${({ theme }) => theme.colors.textSecondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
  filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.accent.green}40);

  @keyframes gradient-shift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent.green};
  -webkit-text-fill-color: ${({ theme }) => theme.colors.accent.green};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.accent.green}50,
    0 0 8px ${({ theme }) => theme.colors.accent.green}40,
    0 0 12px ${({ theme }) => theme.colors.accent.green}30;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.accent.green}08;
    filter: blur(15px);
    z-index: -1;
    animation: pulse-glow 2s ease-in-out infinite;
  }

  @keyframes pulse-glow {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  line-height: 1.8;
  margin-bottom: 3rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid ${({ theme }) => theme.colors.accent.green}40;

  &::before {
    content: "> ";
    color: ${({ theme }) => theme.colors.accent.green};
    position: absolute;
    left: 0;
    animation: ${blink} 1s infinite;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding-left: 0.75rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent.green};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;
  }

  @media (max-width: 768px) {
    bottom: 2rem;
  }
`;

const IconBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.6)" : "rgba(255, 255, 255, 0.6)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  border-radius: 6px;
  margin-left: 1rem;
  backdrop-filter: blur(10px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accent.green};
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.accent.green}60;

  svg {
    color: ${({ theme }) => theme.colors.accent.green};
    filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.accent.green}60);
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

const DecorativeIcons = styled(motion.div)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0.3;
  z-index: -1;

  @media (max-width: 1024px) {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent.green};
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.accent.green}40);
    transition: all 0.3s ease;
  }
`;

const floating = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const FloatingIcon = styled(motion.div)`
  animation: ${floating} 3s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || 0}s;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const scrollVariants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const typingText =
  "Vitalii.  Fullstack-Entwickler. Moderne Weblösungen mit Fokus auf Performance. verwandle Ideen in optimierte, benutzerfreundliche und skalierbare Oberflächen. Mein Standort: Freiburg, Deutschland.";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < typingText.length) {
        setDisplayedText(typingText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <Section id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%" }}
      >
        <TerminalPrompt variants={itemVariants}>
          <Terminal size={18} />
          <span>
            <PromptText>vs@portfolio</PromptText>:~${" "}
            <span className="console-cursor"></span>
          </span>
        </TerminalPrompt>

        <Title variants={itemVariants}>
          Hallo, ich bin <Highlight>Vitalii</Highlight>
          <br />
          Fullstack-Entwickler
        </Title>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <IconBadge whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Code2 size={20} />
            <span>Frontend</span>
          </IconBadge>
          <IconBadge whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Server size={20} />
            <span>Backend</span>
          </IconBadge>
        </motion.div>

        <Subtitle variants={itemVariants}>
          {displayedText}
          {isTyping && <span className="console-cursor"></span>}
        </Subtitle>
      </motion.div>

      <ScrollIndicator variants={scrollVariants} animate="animate">
        <ArrowDown size={20} />
        <span>scrollen</span>
      </ScrollIndicator>

      <DecorativeIcons
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FloatingIcon delay={0}>
          <Code2 size={40} />
        </FloatingIcon>
        <FloatingIcon delay={0.5}>
          <Server size={40} />
        </FloatingIcon>
        <FloatingIcon delay={1}>
          <Sparkles size={40} />
        </FloatingIcon>
      </DecorativeIcons>
    </Section>
  );
}
