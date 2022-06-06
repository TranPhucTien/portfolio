import { useContext } from 'react';
import classNames from 'classnames/bind';
import Infomation from './components/Infomation';
import Selection from './components/Selection';
import styles from './Info.module.scss';
import { ThemeContext } from '~/ThemeContext';

const cx = classNames.bind(styles);

function Info() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    return (
        <div className={cx('wrapper')}>
            <div className={classNames(styles.container, 'container')}>
                <div
                    className={cx('selection')}
                    style={darkMode ? { background: ' rgba(255, 255, 255, 0.2)' } : { background: 'rgba(255, 255, 255, 0.5)' }}
                >
                    <Selection />
                </div>
                <div
                    className={cx('show')}
                    style={darkMode ? { background: ' rgba(255, 255, 255, 0.2)' } : { background: 'rgba(255, 255, 255, 0.5)' }}
                >
                    <Infomation />
                </div>
            </div>
        </div>
    );
}

export default Info;
