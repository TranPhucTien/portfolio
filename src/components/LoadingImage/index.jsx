import classNames from "classnames/bind";
import styles from './LoadingImage.module.scss'

const cx = classNames.bind(styles)

function LoadingImage({ styles = "" }) {
    return <div className={cx('skeleton')} style={{...styles}}></div>;
}

export default LoadingImage;
