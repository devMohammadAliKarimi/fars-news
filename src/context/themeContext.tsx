import React, { createContext, useMemo, useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface ThemeContextType {
    mode: "light" | "dark";
    toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeContextType>({
    mode: "light",
    toggleMode: () => { },
});

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">(
        (localStorage.getItem("muiMode") as "light" | "dark") || "light"
    );

    const toggleMode = () => {
        const next = mode === "light" ? "dark" : "light";
        setMode(next);
        localStorage.setItem("muiMode", next);
    };

    const theme = useMemo(
        () =>
            createTheme({
                direction: "rtl",
                palette: {
                    mode,
                    primary: { main: "#1976d2" },
                    secondary: { main: "#388e3c" },
                },
                typography: {
                    fontFamily: "Inter, Roboto, Arial",
                },
            }),
        [mode]
    );

    return (
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    );
};
