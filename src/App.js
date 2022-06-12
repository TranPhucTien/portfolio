import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Info from './components/Info';
import Intro from './components/Intro';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import { ThemeContext } from './ThemeContext';

function App() {
    const themeContext = useContext(ThemeContext);
    const lightMode = themeContext.lightMode;

    if (lightMode) {
        document.body.style = `background-color: var(--white)`;
    } else {
        document.body.style = `background-color: var(--black)`;
    }

    return (
        <Router>
            <div
                className={'wrapper'}
                style={{
                    background: lightMode ? '' : 'var(--night)',
                    color: lightMode ? 'var(--text-color)' : 'var(--white)',
                }}
            >
                <Loader />
                <Navbar />
                <Intro />
                <Info />
                <Portfolio />
            </div>
        </Router>
    );
}

export default App;
