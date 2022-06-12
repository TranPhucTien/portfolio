import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import FavouriteItem from '../../components/FavouriteItem';
import { myFavouriteAPI } from '../../infomationAPI';
import styles from './Favourite.module.scss';

const cx = classNames.bind(styles);

function Favourite() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])

    return (
        <div className={cx('wrapper')}>
            {loading && <FavouriteItem.Loading api={myFavouriteAPI} />}
            {!loading && <FavouriteItem api={myFavouriteAPI} />}
        </div>
    );
}

export default Favourite;
