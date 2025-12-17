import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Github, MessageCircle } from "lucide-react";

const Section = styled.section`
  padding: 120px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 80px 1.5rem;
  }

  @media (max-width: 360px) {
    padding: 60px 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.accent.green};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;

  &::before {
    content: "> ";
    color: ${({ theme }) => theme.colors.accent.green};
    margin-right: 0.5rem;
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan}
    );
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60,
      0 0 20px ${({ theme }) => theme.colors.accent.green}40;
    animation: pulse-line 2s ease-in-out infinite;
  }

  @keyframes pulse-line {
    0%,
    100% {
      width: 60px;
      opacity: 1;
    }
    50% {
      width: 100px;
      opacity: 0.7;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "// ";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent.green}60;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 1025px) {
    gap: 2.5rem;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.6)" : "rgba(255, 255, 255, 0.6)"};
  border: 2px solid ${({ theme }) => theme.colors.accent.green}30;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (min-width: 1025px) {
    padding: 2.5rem 3rem;
    gap: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent.green}10,
      ${({ theme }) => theme.colors.accent.cyan}10
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.green}80;
    box-shadow: 0 8px 32px ${({ theme }) => theme.colors.accent.green}40,
      inset 0 0 24px ${({ theme }) => theme.colors.accent.green}15;
    transform: translateY(-4px) scale(1.02);
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(13, 17, 23, 0.85)" : "rgba(255, 255, 255, 0.85)"};

    &::before {
      opacity: 1;
    }

    &::after {
      transform: scaleX(1);
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.accent.green};
    flex-shrink: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accent.green}50);
    position: relative;
    z-index: 1;

    @media (min-width: 1025px) {
      width: 32px;
      height: 32px;
    }
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.accent.cyan};
    filter: drop-shadow(0 0 16px ${({ theme }) => theme.colors.accent.cyan}70);
    transform: scale(1.15) rotate(5deg);
  }
`;

const LinkText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
  z-index: 1;
`;

const LinkLabel = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;

  @media (min-width: 1025px) {
    font-size: 1.3rem;
  }

  ${SocialLink}:hover & {
    color: ${({ theme }) => theme.colors.accent.cyan};
  }
`;

const LinkValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.3s ease;

  @media (min-width: 1025px) {
    font-size: 1.05rem;
  }

  ${SocialLink}:hover & {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "onlihash@gmail.com",
    href: "onlihash@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/vitos-sk",
    href: "https://github.com/vitos-sk",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@vitalii",
    href: "https://t.me/vs_cot",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
      >
        <SectionTitle variants={itemVariants}>Kontakt aufnehmen</SectionTitle>
        <Subtitle variants={itemVariants}>
          Haben Sie ein Projekt im Kopf oder möchten Sie zusammenarbeiten? Kontaktieren
          Sie mich gerne!
        </Subtitle>

        <Content variants={itemVariants}>
          <SocialLinks>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <SocialLink
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={24} />
                  <LinkText>
                    <LinkLabel>{link.label}</LinkLabel>
                    <LinkValue>{link.value}</LinkValue>
                  </LinkText>
                </SocialLink>
              );
            })}
          </SocialLinks>
        </Content>
      </motion.div>
    </Section>
  );
}
