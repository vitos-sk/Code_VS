import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: ${({ theme, scrolled }) =>
    scrolled
      ? `${
          theme.name === "dark" ? "rgba(13, 17, 23, 0.95)" : "rgba(245, 245, 245, 0.95)"
        }`
      : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(20px) saturate(180%)" : "none")};
  border-bottom: ${({ theme, scrolled }) =>
    scrolled ? `1px solid ${theme.colors.accent.green}40` : "none"};
  box-shadow: ${({ scrolled, theme }) =>
    scrolled
      ? `0 2px 20px ${theme.colors.accent.green}20, inset 0 1px 0 ${theme.colors.accent.green}10`
      : "none"};
  transition: all 0.3s ease;
  padding: 1.5rem 2rem;
  border-image: ${({ scrolled, theme }) =>
    scrolled
      ? `linear-gradient(90deg, ${theme.colors.accent.green}40, transparent, ${theme.colors.accent.cyan}40) 1`
      : "none"};

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const NavLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  color: ${({ theme, active }) =>
    active ? theme.colors.accent.green : theme.colors.textSecondary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-shadow: ${({ active, theme }) =>
    active ? `0 0 10px ${theme.colors.accent.green}60` : "none"};

  &::before {
    content: "${({ active }) => (active ? ">" : "")}";
    position: absolute;
    left: -0.5rem;
    color: ${({ theme }) => theme.colors.accent.green};
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.3s ease;
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.accent.green};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.green};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;
    background: ${({ theme }) => theme.colors.accent.green}10;
    transform: translateX(4px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan}
    );
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;
    transition: width 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ThemeButton = styled(motion.button)`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(0, 255, 65, 0.1)" : "rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  color: ${({ theme }) => theme.colors.accent.green};
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.mono};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.green};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent.green}60,
      inset 0 0 10px ${({ theme }) => theme.colors.accent.green}20;
    transform: scale(1.1);
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(0, 255, 65, 0.2)" : "rgba(0, 255, 65, 0.1)"};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    position: static;
    width: 36px;
    height: 36px;
  }
`;

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContent>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            active={activeSection === item.href.substring(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </NavLink>
        ))}
        <ThemeButton
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          {theme.name === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </ThemeButton>
      </NavContent>
    </Nav>
  );
}
