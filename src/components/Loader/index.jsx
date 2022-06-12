import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
    const wrapperLoaderRef = useRef(null);
    const [isLoader, setIsLoader] = useState(true);

    const time = Math.floor(Math.random() *  1000 + 1000)

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false);
        }, time);

    }, [time]);

    if (!isLoader) {
        wrapperLoaderRef.current.style.display = 'none';
    }

    // Nhanh quá không đẹp :v
    // window.addEventListener('load', function () {
    //     wrapperLoaderRef.current.style.display = 'none';
    // });

    return (
        <div className={cx('wrapper')} ref={wrapperLoaderRef}>
            <div className={cx('loader')}>
                <div className={cx('loader__bar')}></div>
                <div className={cx('loader__bar')}></div>
                <div className={cx('loader__bar')}></div>
                <div className={cx('loader__bar')}></div>
                <div className={cx('loader__bar')}></div>
                <div className={cx('loader__ball')}></div>
            </div>
        </div>
    );
}

export default Loader;
