import classNames from 'classnames/bind';
import { useContext } from 'react';
import { ThemeContext } from '~/ThemeContext';
import Toggle from '../Toggle';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    const mql = window.matchMedia('only screen and (max-width: 1023px)');

    let borderBottom = ''

    if (mql.matches && darkMode) {
        borderBottom = { borderBottom: '1px solid #333' };
    } else if (mql.matches === false) {
        borderBottom = { borderBottom: 'none' };
    } else {
        borderBottom = { borderBottom: '1px solid #eee' };
    }

    return (
        <header
            className={classNames(styles.wrapper, 'container')}
            style={{...borderBottom}}
        >
            <div className={cx('left')}>
                <div className={cx('logo')}>PhucTien</div>
                <Toggle />
            </div>
            <div className={cx('menu')}>
                <ul className={cx('menu-list')}>
                    <li className={cx('menu-item')}>
                        <a href="#home" className={cx('menu-item-link')}>Home</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="#about" className={cx('menu-item-link')}>About</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="#work" className={cx('menu-item-link')}>Work</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
