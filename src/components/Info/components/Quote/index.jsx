import classNames from 'classnames/bind';
import styles from './Quote.module.scss';

const cx = classNames.bind(styles);

function Quote({ image, name, desc }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={image} alt="" className={cx('img')} />
            </div>
            <div className={cx('content')}>
                <h5 className={cx('name')}>{name}</h5>
                <p className={cx('description')}>{desc}</p>
            </div>
        </div>
    );
}

export default Quote;
