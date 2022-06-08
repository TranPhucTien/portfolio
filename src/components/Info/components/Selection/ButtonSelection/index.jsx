import lottie from 'lottie-web';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './ButtonSelection.module.scss';
import click from '~/assets/audio/click.mp3';
import { useContext } from 'react';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function ButtonSelection({ nameLottie, component, title, path, index }) {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    const clickSound = new Audio();
    clickSound.src = click;

    const handleClick = (e) => {
        clickSound.play();
    };

    return (
        <NavLink
            style={{
                color: darkMode ? 'var(--white)' : 'var(--night)',
            }}
            className={({ isActive }) => classNames(styles.button, { 'active-selection': isActive })}
            onMouseEnter={() => lottie.play(nameLottie)}
            onMouseLeave={() => lottie.pause(nameLottie)}
            onClick={handleClick}
            to={path}
            id={index}
        >
            <div className={cx('lottie')}>{component}</div>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default ButtonSelection;
