import { Routes, Route } from 'react-router-dom';
import { useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import Profile from './pages/Profile';
import Selection from './components/Selection';
import styles from './Info.module.scss';
import { ThemeContext } from '~/ThemeContext';
import click from '~/assets/audio/click.mp3';
import Target from './pages/Target';
import Favourite from './pages/Favourite';

const cx = classNames.bind(styles);

function Info() {
    const aboutRef = useRef(null);
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    const clickSound = new Audio();
    clickSound.src = click;

    const handleClick = () => {
        aboutRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        });
        clickSound.play();
    };

    return (
        <div className={cx('wrapper')} style={{ background: darkMode ? 'var(--night)' : 'var(--background-darker)' }}>
            <div className={'container'}>
                <div className={'sub-header-container'}>
                    <hr />
                    <h5 className={'sub-header'} id={'about'} ref={aboutRef}>
                        About
                    </h5>
                </div>
            </div>
            <div className={classNames(styles.container, 'container')}>
                <div
                    className={cx('selection')}
                    style={{
                        background: darkMode ? 'rgb(120, 88, 166)' : 'rgba(255, 255, 255, 0.5)',
                    }}
                >
                    <Selection onClick={handleClick} />
                </div>
                <div
                    className={cx('show')}
                    style={{
                        background: darkMode ? 'rgb(120, 88, 166)' : 'rgba(255, 255, 255, 0.5)',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/target" element={<Target />} />
                        <Route path="/favourite" element={<Favourite />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Info;
