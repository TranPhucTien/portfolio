import classNames from 'classnames/bind';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Quote from '../../components/Quote';
import quotes from '../../components/Quote/quotesAPI';
import styles from './Profile.module.scss';
import { myProfileDesc } from '../../infomationAPI';
import Infomation from '../../components/Infomation';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <Infomation api={myProfileDesc} title={'Giới thiệu!'} />
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
    );
}

export default Profile;
