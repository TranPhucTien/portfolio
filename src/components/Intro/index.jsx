import classNames from 'classnames/bind';
import { faGithub, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Intro.module.scss';
import { IntroLottie } from '../Lottie';

const cx = classNames.bind(styles);

function Intro() {
    // Check iOS
    let _iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);
    let facebookLink = 'https://www.facebook.com/tranphuctien2003/'; // Open facebook in web

    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return 'Windows Phone';
        }

        if (/android/i.test(userAgent)) {
            return 'Android';
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return 'iOS';
        }

        return 'unknown';
    }

    if (getMobileOperatingSystem() === 'iOS') {
        facebookLink = 'fb://page/?id=100009531825526'; // Open facebook app in ios
    }

    return (
        <section className={classNames(styles.wrapper, 'container')}>
            <div className={cx('content')}>
                <div className={cx('content-title')}>
                    <h2 className={cx('content-hello')}>Xin chào!</h2>
                    <h2 className={cx('content-name')}>Mình tên là Tiến</h2>
                </div>
                <div className={cx('content-desc')}>
                    Hiện tại mình là một frontEnd-developer và sẽ trở thành fullstack-developer ^^
                </div>
                <a
                    target={'_blank'}
                    rel="noreferrer"
                    href={facebookLink}
                    className={classNames(styles.button, 'button button-shadow button-border button-primary')}
                >
                    Kết nối với mình
                </a>
                <div className={cx('icons')}>
                    <a target={'_blank'} rel="noreferrer" href="https://github.com/TranPhucTien/">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className={cx('icon', 'fill-shadow-large', 'cursor-pointer')}
                        />
                    </a>
                    <a target={'_blank'} rel="noreferrer" href={facebookLink}>
                        <FontAwesomeIcon icon={faFacebook} className={cx('icon', 'fill-shadow', 'cursor-pointer')} />
                    </a>
                    <a target={'_blank'} rel="noreferrer" href="http://discordapp.com/users/691483254393536512">
                        <FontAwesomeIcon icon={faDiscord} className={cx('icon', 'fill-shadow', 'cursor-pointer')} />
                    </a>
                </div>
            </div>
            <div className={cx('image')}>
                <IntroLottie />
            </div>
        </section>
    );
}

export default Intro;
