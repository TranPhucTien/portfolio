const { createContext, useState, useEffect } = require('react');

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const getTheme = () => {
        return JSON.parse(localStorage.getItem('darkMode')) || true;
    };

    console.log(JSON.parse(localStorage.getItem('darkMode')));

    const [darkMode, setDarkMode] = useState(getTheme());
    
    const toggleTheme = () => {
        setDarkMode(darkMode ? false : true);
    };
    
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode]);

    const value = {
        darkMode,
        toggleTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
