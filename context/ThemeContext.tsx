"use client"
import React, { createContext, useState, useEffect, ReactNode, FC, useContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getFromLocalStorage = (): string => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Default theme if localStorage is not available
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storedTheme = getFromLocalStorage();
    setTheme(storedTheme);
  }, []);

  const toggle = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (typeof window !== 'undefined') {
        localStorage.setItem("theme", newTheme); // Update localStorage
      }
      return newTheme; // Update theme state
    });
  };

  const value = { theme, setTheme, toggle };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook for consuming the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

// Example component that consumes the context
const ThemedComponent: FC = () => {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.body.style.background = theme === "light" ? "#fff" : "#333";
  }, [theme]);

  return (
    <div>
      <p>The current theme is {theme}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
};

// Example usage of the provider and consumer component
const App: FC = () => (
  <ThemeContextProvider>
    <ThemedComponent />
  </ThemeContextProvider>
);

export default App;
