import lottie from 'lottie-web';
import classNames from 'classnames/bind';
import styles from './ButtonSelection.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function ButtonSelection({ nameLottie, component, title }) {
    const themeContext = useContext(ThemeContext)
    const darkMode = themeContext.darkMode

    return (
        <button
            style={{
                color: darkMode ? 'var(--white)' : 'var(--night)'
            }}
            className={cx('button')}
            onMouseEnter={() => lottie.play(nameLottie)}
            onMouseLeave={() => lottie.pause(nameLottie)}
        >
            {component}
            <span className={cx('title')}>{title}</span>
        </button>
    );
}

export default ButtonSelection;
