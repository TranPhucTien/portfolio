import { useContext } from 'react';
import Info from './components/Info';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Slick from './components/Slick';
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
            {/* <Info /> */}
            <Portfolio />
            {/* <Slick /> */}
        </div>
    );
}

export default App;
