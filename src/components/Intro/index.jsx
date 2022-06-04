import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Intro.module.scss';
import gifWhite from '~/assets/images/intro_white.gif';
import gifBlack from '~/assets/images/intro_black.gif';
import { faGithub, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function Intro() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    return (
        <div className={classNames(styles.wrapper, 'container')}>
            <div className={cx('intro')}>
                <div className={cx('intro-title')}>
                    <span className={cx('intro-hello')}>Xin chào! Mình là </span>
                    <span className={cx('intro-name')}>Trần Phúc Tiến</span>
                </div>
                <div className={cx('intro-desc')}>
                    Hiện tại mình là một front-end developer và sẽ trở thành fullstack-developer ^^
                </div>
                <button className={classNames(styles.button, 'button button-shadow button-border button-primary')}>
                    Kết nối với mình
                </button>
                <div className={cx('icons')}>
                    <FontAwesomeIcon icon={faGithub} className={cx('icon', 'fill-shadow-large', 'cursor-pointer')} />
                    <FontAwesomeIcon icon={faFacebook} className={cx('icon', 'fill-shadow', 'cursor-pointer')} />
                    <FontAwesomeIcon
                        icon={faFacebookMessenger}
                        className={cx('icon', 'fill-shadow', 'cursor-pointer')}
                    />
                </div>
            </div>
            <div className={cx('image')}>
                <img src={darkMode ? gifBlack : gifWhite} alt="developer" height="580px" width="580px" />
            </div>
        </div>
    );
}

export default Intro;
