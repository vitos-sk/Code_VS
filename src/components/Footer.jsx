import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Wrapper = styled.footer`
  position: relative;
  z-index: 10;
  padding: 60px 2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  margin-top: 80px;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.5)" : "rgba(245, 245, 245, 0.5)"};
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan},
      ${({ theme }) => theme.colors.accent.green},
      transparent
    );
    animation: gradient-flow 3s linear infinite;
  }

  @keyframes gradient-flow {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 1.5rem;
    margin-top: 60px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  color: ${({ theme }) => theme.colors.accent.green};
  transition: all 0.3s ease;
  text-decoration: none;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent.green}20,
      ${({ theme }) => theme.colors.accent.cyan}20
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.green};
    color: ${({ theme }) => theme.colors.accent.cyan};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent.green}60,
      inset 0 0 15px ${({ theme }) => theme.colors.accent.green}20;
    transform: translateY(-3px) scale(1.1);

    &::before {
      opacity: 1;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
`;

const HeartIcon = styled(Heart)`
  color: ${({ theme }) => theme.colors.accent.amber};
  fill: ${({ theme }) => theme.colors.accent.amber};
  transition: all 0.3s ease;
`;

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/vitos-sk",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "onlihash@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Content>
        <SocialLinks>
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <SocialLink
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </SocialLink>
            );
          })}
        </SocialLinks>

        <Copyright>
          © {currentYear} Vitaliy. Erstellt mit <HeartIcon size={14} /> mit React & Vite
        </Copyright>
      </Content>
    </Wrapper>
  );
}
