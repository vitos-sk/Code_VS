import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }
  return context;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? lightTheme : darkTheme;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.name === "dark" ? lightTheme : darkTheme;
      localStorage.setItem("theme", newTheme.name);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.name);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
