import styled from "styled-components";
import { motion } from "framer-motion";
import { Code2, MapPin, Calendar } from "lucide-react";

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
  margin-bottom: 3rem;
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
    transition: all 0.3s ease;
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

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const TextBlock = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;

  p {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: "// ";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent.green}60;
      font-size: 0.9em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan},
      ${({ theme }) => theme.colors.accent.green}
    );
    background-size: 200% 100%;
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.green};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent.green}40,
      inset 0 0 20px ${({ theme }) => theme.colors.accent.green}10;
    transform: translateY(-5px);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent.green};
    flex-shrink: 0;
    transition: color 0.3s ease;
  }
`;

const InfoLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-right: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &::after {
    content: ":";
    color: ${({ theme }) => theme.colors.accent.green};
    margin-left: 0.25rem;
  }
`;

const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.accent.green};
  font-weight: 600;
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.accent.green}60;
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

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
      >
        <SectionTitle variants={itemVariants}>About me</SectionTitle>

        <Content variants={itemVariants}>
          <TextBlock>
            <p>
              I'm a frontend developer based in Germany, specializing in React,
              JavaScript, and modern web technologies. I'm passionate about creating
              clean, minimal, and elegant interfaces that provide exceptional user
              experiences.
            </p>
            <p>
              My approach to development focuses on writing clean, maintainable code and
              building applications that are both performant and accessible. I enjoy
              working with cutting-edge technologies and staying up-to-date with the
              latest trends in web development.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new frameworks, contributing to
              open-source projects, and continuously learning to improve my craft.
            </p>
          </TextBlock>

          <InfoCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <InfoItem>
              <Code2 size={20} />
              <div>
                <InfoLabel>Role:</InfoLabel>
                <InfoValue>Fullstack Developer</InfoValue>
              </div>
            </InfoItem>
            <InfoItem>
              <MapPin size={20} />
              <div>
                <InfoLabel>Location:</InfoLabel>
                <InfoValue>Germany</InfoValue>
              </div>
            </InfoItem>
            <InfoItem>
              <Calendar size={20} />
              <div>
                <InfoLabel>Age:</InfoLabel>
                <InfoValue>24 years</InfoValue>
              </div>
            </InfoItem>
          </InfoCard>
        </Content>
      </motion.div>
    </Section>
  );
}
