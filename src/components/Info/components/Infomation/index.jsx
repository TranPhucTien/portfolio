import classNames from 'classnames/bind';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Quote from '../Quote';
import quotes from '../Quote/quotesAPI';
import styles from './Infomation.module.scss';
import { myProfileDesc } from '../../infomationAPI';

const cx = classNames.bind(styles);

function Infomation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Giới thiệu!</h2>
                <div className={cx('content')}>
                    {myProfileDesc.map((profile, index) => (
                        <p className={cx('description')} key={index}>
                            {profile.desc}
                        </p>
                    ))}
                </div>
                <div className={cx('slide', 'mt-32')}>
                    <h2 className={cx('title')}>Một số câu nói mình rất thích</h2>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={'auto'}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {quotes.map((quote, index) => (
                            <SwiperSlide key={index}>
                                <Quote image={quote.image} name={quote.name} desc={quote.desc} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Infomation;
