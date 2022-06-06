import classNames from 'classnames/bind';
import { FavouriteLottie, ProfileLottie, TargetLottie } from '~/components/Lottie';
import styles from './Selection.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '~/ThemeContext';
import Button from './Button';
import selectionAPI from './selectionAPI';

const cx = classNames.bind(styles);

function Selection() {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.darkMode;

    return (
        <div className={cx('wrapper')}>
            <div className={classNames(styles.container)}>

                {selectionAPI.map((selection, index) => {
                    let component
                    switch(index) {
                        case 0: 
                            component = <ProfileLottie/>
                            break;
                        case 1: 
                            component = <TargetLottie/>
                            break;
                        case 2: 
                            component = <FavouriteLottie/>
                            break;
                        default:
                            component = ""
                    }

                    return (
                        <Button
                            nameLottie={selection.nameLottie}
                            title={selection.title}
                            component={component}
                            key={index}
                        />
                    );
                })}

            </div>
        </div>
    );
}

export default Selection;
