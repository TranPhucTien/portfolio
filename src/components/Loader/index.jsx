import classNames from "classnames/bind";
import styles from './Loader.module.scss'

const cx = classNames.bind(styles)

function Loader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("loader")}>
                <div className={cx("loader__bar")}></div>
                <div className={cx("loader__bar")}></div>
                <div className={cx("loader__bar")}></div>
                <div className={cx("loader__bar")}></div>
                <div className={cx("loader__bar")}></div>
                <div className={cx("loader__ball")}></div>
            </div>
        </div>
    );
}

export default Loader;
