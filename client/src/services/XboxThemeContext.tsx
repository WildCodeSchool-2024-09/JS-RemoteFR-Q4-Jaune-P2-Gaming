import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Créer le context

interface MyContextProps {
  children: ReactNode;
}

interface XboxThemeProps {
  xboxTheme: boolean;
  setXboxTheme: (darkTheme: boolean) => void;
}

const XboxThemeContext = createContext(null as null | XboxThemeProps);

// Créer le provider

export function XboxThemeProvider({ children }: MyContextProps) {
  const [xboxTheme, setXboxTheme] = useState(false as boolean);

  return (
    <XboxThemeContext.Provider value={{ xboxTheme, setXboxTheme }}>
      {children}
    </XboxThemeContext.Provider>
  );
}

// Créer le hook personnalisé

export const useDarkTheme = () => {
  const context = useContext(XboxThemeContext);
  if (context == null) {
    throw new Error("Un context doit être utilisé");
  }

  return context;
};
