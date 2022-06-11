import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import classNames from 'classnames/bind';

import { useContext } from 'react';
import { ThemeContext } from '~/ThemeContext';
import styles from './Toggle.module.scss';

const cx = classNames.bind(styles);

const Toggle = () => {
    const themeContext = useContext(ThemeContext);
    const lightMode = themeContext.lightMode;

    return (
        <div className={cx('wrapper')} onClick={themeContext.toggleTheme}>
            <Moon className={cx('icon')} />
            <Sun className={cx('icon')} />
            <div 
                className={cx('button')} 
                style={lightMode ? {left: '2px'} : {right: '2px'}}
            ></div>
        </div>
    );
};

export default Toggle;
