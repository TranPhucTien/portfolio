import { useContext } from 'react';
import classNames from 'classnames/bind';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Item.module.scss';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function Item({ image, title, desc, tags, href, code, onClick }) {
    const themeContext = useContext(ThemeContext);
    const lightMode = themeContext.lightMode;

    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <div
                className={classNames(styles.container)}
                style={lightMode ? { color: '' } : { backgroundColor: '#FAD4D4' }}
            >
                <img src={image} alt="" className={cx('img')} />
                <div className={cx('content')}>
                    <h3 className={cx('content-title')} style={lightMode ? { color: '' } : { color: 'var(--black)' }}>
                        {title}
                    </h3>
                    <div className={cx('tag')}>
                        {tags.map((tag, index) => (
                            <div
                                className={cx('tag-item')}
                                key={index}
                                style={lightMode ? { color: '' } : { color: '#0d1137', borderColor: '#0d1137' }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <p className={cx('content-desc')} style={lightMode ? { color: '' } : { color: '#666' }}>
                        {desc}
                    </p>
                </div>
                <div className={cx('buttons')}>
                    <a href={code} target="_blank" rel="noreferrer" className={classNames('button-secondary', styles.buttonCode)}>
                        <FontAwesomeIcon icon={faCode} className={cx('button-code-icon')} />
                    </a>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={classNames('button-primary', styles.button)}
                    >
                        Live View
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Item;
