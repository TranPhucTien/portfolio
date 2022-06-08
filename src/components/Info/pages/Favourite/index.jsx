import classNames from 'classnames/bind';
import FavouriteItem from '../../components/FavouriteItem';
import { myFavouriteAPI } from '../../infomationAPI';
import styles from './Favourite.module.scss';

const cx = classNames.bind(styles);

function Favourite() {
    return (
        <div className={cx('wrapper')}>
            <FavouriteItem api={myFavouriteAPI} />
        </div>
    );
}

export default Favourite;
