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
  border-radius: 12px;
  padding: 2.5rem;
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
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.accent.green}40,
      inset 0 0 20px ${({ theme }) => theme.colors.accent.green}10;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 0;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent.green}30,
      transparent
    );
  }

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
    padding: 1.25rem 0;
  }
`;

const IconContainer = styled(motion.div)`
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(0, 255, 65, 0.1)" : "rgba(0, 255, 65, 0.08)"};
  border: 1.5px solid ${({ theme }) => theme.colors.accent.green}40;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent.green}60,
      ${({ theme }) => theme.colors.accent.cyan}60,
      ${({ theme }) => theme.colors.accent.green}60
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent.green};
    width: 24px;
    height: 24px;
    z-index: 1;
    position: relative;
    filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.accent.green}60);
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(0, 255, 65, 0.2)" : "rgba(0, 255, 65, 0.15)"};
    border-color: ${({ theme }) => theme.colors.accent.green};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent.green}50,
      inset 0 0 15px ${({ theme }) => theme.colors.accent.green}20;
    transform: scale(1.05);

    &::before {
      opacity: 1;
    }

    svg {
      filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accent.green});
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    min-width: 48px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const InfoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.accent.green};
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: 0 0 8px ${({ theme }) => theme.colors.accent.green}60;
  display: block;
  line-height: 1.4;
`;

const LanguageText = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
  margin-top: 0.25rem;

  strong {
    color: ${({ theme }) => theme.colors.accent.green};
    font-weight: 600;
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.accent.green}50;
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

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
      >
        <SectionTitle variants={itemVariants}>
          Vitalii. Ihr Partner für professionelle Fullstack-Entwicklung.
        </SectionTitle>

        <Content variants={itemVariants}>
          <TextBlock>
            <p>
              Mit 24 Jahren bin ich ein spezialisierter Fullstack-Entwickler mit starkem
              Fokus auf UI/UX-Design. Meine Leidenschaft gilt sauberem, effizientem Code
              und einer herausragenden User Experience. Ich nutze moderne Technologien, um
              Produkte zu schaffen, die nicht nur visuell ansprechend, sondern auch
              leistungsstark sind.
            </p>
            <p>
              Ich lebe und arbeite in Freiburg, Deutschland, und freue mich auf die
              Zusammenarbeit in internationalen Teams.
            </p>
          </TextBlock>

          <InfoCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <InfoItem
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <IconContainer
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Code2 />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Role</InfoLabel>
                <InfoValue>Fullstack-Entwickler</InfoValue>
              </InfoContent>
            </InfoItem>
            <InfoItem
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <IconContainer
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <MapPin />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>Freiburg, Deutschland</InfoValue>
              </InfoContent>
            </InfoItem>
            <InfoItem
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <IconContainer
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Calendar />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Sprachkenntnisse</InfoLabel>
                <LanguageText>
                  <strong>Russisch, Ukrainisch:</strong> Muttersprache
                  <br />
                  <strong>Deutsch:</strong> B1 • <strong>Englisch:</strong> A2
                </LanguageText>
              </InfoContent>
            </InfoItem>
          </InfoCard>
        </Content>
      </motion.div>
    </Section>
  );
}
