import classNames from 'classnames/bind';
import ReadMore from '~/components/ReadMore';
import styles from './FavouriteItem.module.scss';

const cx = classNames.bind(styles);

function FavouriteItem({ api }) {
    let displayShowMore = false;

    const mobileL = window.matchMedia('screen and (max-width: 739px)');
    const mobileS = window.matchMedia('screen and (max-width: 400px)');

    let maxContent;

    if (mobileL.matches) {
        displayShowMore = true; 
        maxContent = 85;
    }

    if (mobileS.matches) {
        displayShowMore = true; 
        maxContent = 70;
    }

    return (
        <div className={cx('wrapper')}>
            {api.map((favourite, index) => (
                <div className={cx('favourite-container')} key={index}>
                    <img src={favourite.image} className={cx('favourite-image')} alt={favourite.alt} />
                    <div className={cx('favourite-content')}>
                        <h4 className={cx('favourite-title')}>{favourite.title}</h4>
                        <p className={cx('favourite-desc')}>
                            {displayShowMore ? (
                                <ReadMore maxTextContent={maxContent}>{favourite.desc}</ReadMore>
                            ) : (
                                favourite.desc
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FavouriteItem;
