import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
        <Router>
            <div
                className={'wrapper'}
                style={{
                    background: darkMode ? 'var(--night)' : '',
                    color: darkMode ? 'var(--white)' : 'var(--text-color)',
                }}
            >
                <Navbar />
                <Intro />
                <Info />
                <Portfolio />
            </div>
        </Router>
    );
}

export default App;
