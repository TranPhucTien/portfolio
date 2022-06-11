const { createContext, useState, useEffect } = require('react');

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const getTheme = () => {
        return JSON.parse(localStorage.getItem('lightMode')) || false;
    };

    const [lightMode, setDarkMode] = useState(getTheme());

    const toggleTheme = () => {
        setDarkMode(lightMode ? false : true);
    };

    useEffect(() => {
        localStorage.setItem('lightMode', JSON.stringify(lightMode));
    }, [lightMode]);

    const value = {
        lightMode,
        toggleTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
