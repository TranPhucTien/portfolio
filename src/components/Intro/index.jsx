import classNames from 'classnames/bind';
import { faGithub, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Intro.module.scss';
import { IntroLottie } from '../Lottie';

const cx = classNames.bind(styles);

function Intro() {
    return (
        <div className={classNames(styles.wrapper, 'container')}>
            <div className={cx('content')}>
                <div className={cx('content-title')}>
                    <span className={cx('content-hello')}>Xin chào! Mình là </span>
                    <span className={cx('content-name')}>Trần Phúc Tiến</span>
                </div>
                <div className={cx('content-desc')}>
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
                <IntroLottie />
            </div>
        </div>
    );
}

export default Intro;
