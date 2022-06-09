import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { ThemeContext } from '~/ThemeContext';
import styles from './ReadMore.module.scss';

const cx = classNames.bind(styles);

function ReadMore({ children, maxTextContent }) {
    const text = children;
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <>
            {isReadMore ? text.slice(0, maxTextContent) : text}
            {text.length > maxTextContent && (
                <span onClick={toggleReadMore} className={cx('read-or-hide')}
                    style={{color: darkMode ? '#333' : '#fff'}}
                >
                    {isReadMore ? '... more' : ' less'}
                </span>
            )}
        </>
    );
}

export default ReadMore;
