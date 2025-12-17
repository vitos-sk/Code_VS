import styled from "styled-components";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const getAccentColor = (theme, color) => {
  const colorMap = {
    green: theme.colors.accent.green,
    amber: theme.colors.accent.amber,
    cyan: theme.colors.accent.cyan,
    blue: theme.colors.accent.green,
    red: theme.colors.accent.amber,
    yellow: theme.colors.accent.cyan,
  };
  return colorMap[color] ?? theme.colors.accent.green;
};

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${({ theme, color }) => getAccentColor(theme, color)}40;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);
  font-family: ${({ theme }) => theme.fonts.mono};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme, color }) => getAccentColor(theme, color)},
      ${({ theme }) => theme.colors.accent.cyan},
      ${({ theme, color }) => getAccentColor(theme, color)}
    );
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    animation: gradient-flow 3s linear infinite;
    z-index: 2;
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
    border-color: ${({ theme, color }) => getAccentColor(theme, color)};
    box-shadow: 0 0 20px ${({ theme, color }) => getAccentColor(theme, color)}60,
      inset 0 0 20px ${({ theme, color }) => getAccentColor(theme, color)}10;
    transform: translateY(-8px);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme }) =>
          theme.name === "dark" ? "rgba(13, 17, 23, 0.4)" : "rgba(255, 255, 255, 0.4)"}
        100%
    );
    transition: background 0.3s ease;
  }

  ${ProjectCard}:hover & {
    &::after {
      background: linear-gradient(
        to bottom,
        transparent 0%,
        ${({ theme }) =>
            theme.name === "dark" ? "rgba(13, 17, 23, 0.2)" : "rgba(255, 255, 255, 0.2)"}
          100%
      );
    }
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.green};
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.green}60;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent.green};
    opacity: 0.7;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.6)" : "rgba(255, 255, 255, 0.6)"};
  border: 1px solid ${({ theme, color }) => getAccentColor(theme, color)}40;
  color: ${({ theme, color }) => getAccentColor(theme, color)};
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme, color }) => getAccentColor(theme, color)}20;
    border-color: ${({ theme, color }) => getAccentColor(theme, color)};
    color: ${({ theme, color }) => getAccentColor(theme, color)};
    box-shadow: 0 0 15px ${({ theme, color }) => getAccentColor(theme, color)}40;
    transform: translateY(-2px) scale(1.1);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => theme.colors.accent.cyan}15;
  color: ${({ theme }) => theme.colors.accent.cyan};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accent.cyan}40;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;

  &::before {
    content: "#";
    margin-right: 0.25rem;
    opacity: 0.7;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accent.cyan}25;
    border-color: ${({ theme }) => theme.colors.accent.cyan};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.cyan}40;
    transform: translateY(-2px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
      >
        <SectionTitle variants={cardVariants}>Projekte</SectionTitle>

        <Grid variants={containerVariants}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              color={project.color || "blue"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {project.image && <ProjectImage $image={project.image} />}

              <ProjectContent>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <IconWrapper>
                    {project.github && (
                      <IconLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={project.color || "blue"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github />
                      </IconLink>
                    )}
                    {project.demo && (
                      <IconLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={project.color || "blue"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink />
                      </IconLink>
                    )}
                  </IconWrapper>
                </ProjectHeader>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Tags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </Tags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </motion.div>
    </Section>
  );
}
