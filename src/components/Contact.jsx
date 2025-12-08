import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 3.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  text-decoration: none;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.mono};

  &::before {
    content: "→";
    position: absolute;
    left: 1rem;
    color: ${({ theme }) => theme.colors.accent.green};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.green},
      ${({ theme }) => theme.colors.accent.cyan}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.green};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent.green}60,
      inset 0 0 20px ${({ theme }) => theme.colors.accent.green}10;
    transform: translateX(5px);
    padding-left: 2.5rem;

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
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accent.green}60);
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.accent.cyan};
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.accent.cyan}80);
    transform: scale(1.1);
  }
`;

const LinkText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const LinkLabel = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

const LinkValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  padding: 1rem;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.green};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent.green}20,
      0 0 15px ${({ theme }) => theme.colors.accent.green}40;
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(13, 17, 23, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(13, 17, 23, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${({ theme }) => theme.colors.accent.green}40;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.green};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent.green}20,
      0 0 15px ${({ theme }) => theme.colors.accent.green}40;
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(13, 17, 23, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent.green},
    ${({ theme }) => theme.colors.accent.cyan}
  );
  color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.accent.green};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  align-self: flex-start;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent.green}40,
    inset 0 0 20px ${({ theme }) => theme.colors.accent.green}20;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent.cyan},
      ${({ theme }) => theme.colors.accent.green}
    );
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.accent.green}60,
      inset 0 0 30px ${({ theme }) => theme.colors.accent.green}30;
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
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
    value: "vitalii@example.com",
    href: "mailto:vitalii@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/vitalii",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vitalii",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@vitalii",
    href: "https://twitter.com",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Section id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
      >
        <SectionTitle variants={itemVariants}>Get in touch</SectionTitle>
        <Subtitle variants={itemVariants}>
          Have a project in mind or want to collaborate? Feel free to reach out!
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

          <ContactForm onSubmit={handleSubmit} variants={itemVariants}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" placeholder="Your name" required />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your message..."
                required
              />
            </InputGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send size={18} />
            </SubmitButton>
          </ContactForm>
        </Content>
      </motion.div>
    </Section>
  );
}
