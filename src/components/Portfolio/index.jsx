import classNames from 'classnames/bind';
import Slider from 'react-slick/lib/slider';

// Fontawesome
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import { itemsAPI } from './ItemAPI';
import styles from './Portfolio.module.scss';
import Item from './components/Item';
import { useContext, useRef } from 'react';
import click from '~/assets/audio/click.mp3';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function Portfolio() {
    const slideRef = useRef(null);
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    const clickSound = new Audio();
    clickSound.src = click;

    const handleClick = () => {
        clickSound.play();
    };

    const config = {
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
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
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 0.2,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')} style={{ background: darkMode ? 'var(--night)' : 'var(--background)' }}>
            <div className={classNames(styles.container, 'container')}>
                <div className={'sub-header-container'}>
                    <hr />
                    <h5 className={'sub-header'}>Portfolio</h5>
                </div>
                <h4 className={cx('title-header')}>Mình đã làm </h4>
            </div>
            <Slider {...config}>
                {itemsAPI.map((item, index) => (
                    <Item key={index} image={item.image} title={item.title} desc={item.desc} tags={item.tags} onClick={handleClick} />
                ))}
            </Slider>
            <div className={cx('navigation')} onClick={handleClick}>
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

export default Portfolio;
