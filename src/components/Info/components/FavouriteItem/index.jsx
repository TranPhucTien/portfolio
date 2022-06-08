import classNames from 'classnames/bind';
import styles from './FavouriteItem.module.scss';

const cx = classNames.bind(styles);

function FavouriteItem({ api }) {
    return (
        <div className={cx('wrapper')}>
        {api.map((favourite, index) => (
            <div className={cx('favourite-container')} key={index} >
                <img src={favourite.image} className={cx('favourite-image')} />
                <div className={cx('favourite-content')}>
                    <h4 className={cx('favourite-title')}>{favourite.title}</h4>
                    <p className={cx('favourite-desc')}>{favourite.desc}</p>
                </div>
            </div>
        ))}
        </div>
    );
}

export default FavouriteItem;
