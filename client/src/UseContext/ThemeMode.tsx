// import { createContext, useContext, useState } from "react";

// const XboxModeContext = createContext(null);

// export function XboxModeProvider({ children }) {
//   const [theme, setTheme] = useState("XboxMode");

//   return (
//     <XboxModeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </XboxModeContext.Provider>
//   );
// }

// export const useXboxMode = () => {
//   const value = useContext(XboxModeContext);

//   if (value == null) {
//     throw new Error("useTheme has to be used within <ThemeProvider>");
//   }

//   return value;
// };
