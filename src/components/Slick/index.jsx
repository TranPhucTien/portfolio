import { useRef } from 'react';
import Slider from 'react-slick/lib/slider';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import styles from './Slick.module.scss';
// Fontawesome
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { itemsAPI } from '../Portfolio/ItemAPI';
import Item from '../Portfolio/components/Item';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Slick() {
    const slideRef = useRef(null);

    const config = {
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3.2,
        initialSlide: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        cssEase: 'linear',
        touchMove: true,
        arrows: false,
        ref: slideRef,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                },
            },
        ],
    };

    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div className={cx('wrapper')}>
            <Slider {...config}>
                {itemsAPI.map((item, index) => (
                    <Item key={index} image={item.image} title={item.title} desc={item.desc} tags={item.tags} />
                ))}
                {/* {arr.map((oneArr, index) => (
                    <div className={cx('arr')} key={index}>{oneArr}</div>
                ))} */}
            </Slider>
            <div className={cx('navigation')}>
                <button className={classNames('button-border button-primary', styles.btn)}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={cx('arrow-icon')}
                        onClick={() => slideRef.current.slickPrev()}
                    />
                </button>
                <button className={classNames('button-border button-primary', styles.btn)}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx('arrow-icon')}
                        onClick={() => slideRef.current.slickNext()}
                    />
                </button>
            </div>
        </div>
    );
}

export default Slick;
