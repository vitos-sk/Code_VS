import styled, { keyframes } from "styled-components";
import { skills } from "../data/skills";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Section = styled.section`
  padding: 90px 0;
  position: relative;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: visible;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;

  @media (max-width: 1024px) {
    padding: 70px 0;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    padding: 50px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: block;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.accent.green};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;
  padding: 0 2rem;
  box-sizing: border-box;

  &::before {
    content: "> ";
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan},
      ${({ theme }) => theme.colors.accent.amber}
    );
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60,
      0 0 20px ${({ theme }) => theme.colors.accent.green}40;
    animation: pulse-line 2s ease-in-out infinite;
  }

  @keyframes pulse-line {
    0%,
    100% {
      width: 80px;
      opacity: 1;
    }
    50% {
      width: 120px;
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const ScrollWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: visible;
  width: 100%;
  position: relative;
  padding: 10px 0 15px 0;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
`;

const ScrollContainer = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 25s linear infinite;
  gap: 0;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 768px) {
    animation-duration: 22s;
  }

  @media (max-width: 480px) {
    animation-duration: 20s;
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    gap: 0.875rem;
    padding: 0 1.75rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0 1rem;
  }
`;

const SkillCard = styled.div`
  min-width: 200px;
  max-width: 200px;
  background: transparent;
  border: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    min-width: 180px;
    max-width: 180px;
    padding: 0.875rem;
  }

  @media (max-width: 768px) {
    min-width: 160px;
    max-width: 160px;
    padding: 0.75rem;
    gap: 0.625rem;
  }

  @media (max-width: 480px) {
    min-width: 140px;
    max-width: 140px;
    padding: 0.625rem;
    gap: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $accentColor }) => theme.colors.accent[$accentColor]};
  transition: all 0.3s ease;
  flex-shrink: 0;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.green};
  text-align: center;
  letter-spacing: -0.01em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const getAccentColor = (index) => {
  const colors = ["green", "amber", "cyan"];
  return colors[index % colors.length];
};

const renderSkillCard = (skill, index, isDuplicate = false) => {
  const Icon = skill.icon;
  const accentColor = getAccentColor(index);
  const key = isDuplicate ? `${skill.name}-duplicate-${index}` : `${skill.name}-${index}`;

  return (
    <SkillCard key={key} $accentColor={accentColor}>
      <IconWrapper $accentColor={accentColor}>
        <Icon size={28} strokeWidth={1.8} />
      </IconWrapper>
      <SkillName>{skill.name}</SkillName>
    </SkillCard>
  );
};

export default function SkillsScroll() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <ScrollWrapper>
        <ScrollContainer>
          <SkillsWrapper>
            {skills.map((skill, index) => renderSkillCard(skill, index))}
          </SkillsWrapper>
          <SkillsWrapper aria-hidden="true">
            {skills.map((skill, index) => renderSkillCard(skill, index, true))}
          </SkillsWrapper>
        </ScrollContainer>
      </ScrollWrapper>
    </Section>
  );
}
