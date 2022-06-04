import { useContext } from 'react';
import classNames from 'classnames/bind';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Item.module.scss';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function Item({ image, title, desc, tags }) {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    return (
        <div className={cx('wrapper')}>
            <div
                className={classNames(styles.container)}
                style={darkMode ? { backgroundColor: '#FAD4D4' } : { color: '' }}
            >
                <img src={image} alt="" className={cx('img')} />
                <div className={cx('content')}>
                    <h3 className={cx('content-title')} style={darkMode ? { color: 'var(--black)' } : { color: '' }}>
                        {title}
                    </h3>
                    <div className={cx('tag')}>
                        {tags.map((tag, index) => (
                            <div
                                className={cx('tag-item')}
                                key={index}
                                style={darkMode ? { color: '#0d1137', borderColor: '#0d1137' } : { color: '' }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <p className={cx('content-desc')} style={darkMode ? { color: '#666' } : { color: '' }}>
                        {desc}
                    </p>
                </div>
                <div className={cx('buttons')}>
                    <button className={classNames('button-secondary')}>
                        <FontAwesomeIcon icon={faCode} className={cx('button-code')} />
                    </button>
                    <button className={classNames('button-primary', styles.button)}>Live View</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
