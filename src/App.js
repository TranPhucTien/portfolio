import { useContext } from 'react';
import Info from './components/Info';
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
                background: darkMode ? 'var(--night)' : '',
                color: darkMode ? 'var(--white)' : 'var(--night)',
            }}
        >
            <Navbar />
            <Intro />
            <Info />
            <Portfolio />
        </div>
    );
}

export default App;
