import classNames from 'classnames/bind';
import ReadMore from '~/components/ReadMore';
import styles from './Quote.module.scss';

const cx = classNames.bind(styles);

function Quote({ image, name, desc }) {
    let displayShowMore = false;

    const mobileL = window.matchMedia('screen and (max-width: 739px)');
    const mobileS = window.matchMedia('screen and (max-width: 400px)');

    let maxContent;

    if (mobileL.matches) {
        displayShowMore = true;
        maxContent = 140;
    }

    if (mobileS.matches) {
        displayShowMore = true;
        maxContent = 130;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={image} alt="" className={cx('img')} />
            </div>
            <div className={cx('content')}>
                <h5 className={cx('name')}>{name}</h5>
                <p className={cx('description')}>
                    {displayShowMore ? <ReadMore maxTextContent={maxContent}>{desc}</ReadMore> : desc}
                </p>
            </div>
        </div>
    );
}

export default Quote;
