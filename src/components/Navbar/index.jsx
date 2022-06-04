import classNames from 'classnames/bind';
import Toggle from '../Toggle';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return <header className={classNames(styles.wrapper, 'container')}>
        <div className={cx('left')}>
            <div className={cx('logo')}>PhucTien</div>
            <Toggle />
        </div>
        <div className={cx('menu')}>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>Home</li>
                <li className={cx('menu-item')}>About</li>
                <li className={cx('menu-item')}>Work</li>
            </ul>
        <button className={classNames(styles.button, 'button button-primary button-shadow button-border')}>Contact</button>
        </div>
    </header>;
}

export default Navbar;
