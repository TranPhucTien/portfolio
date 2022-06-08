import classNames from 'classnames/bind';
import styles from './Infomation.module.scss';

const cx = classNames.bind(styles);

function Infomation({ api, title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <div className={cx('content')}>
                {api.map((profile, index) => (
                    <div key={index} className={cx('api-wrapper')}>
                        <p className={cx('api-title')}>
                            {profile.title}
                            {profile.status && <span className={cx('api-status')}> ({profile.status})</span>}
                        </p>
                        {profile.desc && <p className={cx('api-desc')}>{profile.desc}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Infomation;
