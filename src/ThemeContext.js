const { createContext, useState } = require('react');

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(darkMode ? false : true);
    };

    const value = {
        darkMode,
        toggleTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
