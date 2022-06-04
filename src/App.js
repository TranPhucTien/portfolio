import { useContext } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import { ThemeContext } from './ThemeContext';

function App() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    if (darkMode) {
        document.body.style=`background-color: var(--black)`
    }
    else {
        document.body.style=`background-color: var(--white)`
    }

    return (
        <div
            className={'wrapper'}
            style={{
                background: darkMode ? 'var(--black)' : '',
                color: darkMode ? 'var(--white)' : '',
            }}
        >
            <Navbar />
            <Intro />
            <Portfolio />
        </div>
    );
}

export default App;
