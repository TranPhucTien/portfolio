import { FavouriteLottie, ProfileLottie, TargetLottie } from '~/components/Lottie';
import lottie from 'lottie-web';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ nameLottie, component, title }) {
    console.log(nameLottie);
    return (
        <button
            className={cx('button')}
            onMouseEnter={() => lottie.play(nameLottie)}
            onMouseLeave={() => lottie.pause(nameLottie)}
        >
            {component}
            <span className={cx('title')}>{title}</span>
        </button>
    );
}

export default Button;
