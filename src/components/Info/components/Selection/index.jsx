import classNames from 'classnames/bind';
import styles from './Selection.module.scss';
import ButtonSelection from './ButtonSelection';
import selectionAPI from './selectionAPI';

const cx = classNames.bind(styles);

function Selection({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={classNames(styles.container)}>
                {selectionAPI.map((selection, index) => {
                    return (
                        <ButtonSelection
                            nameLottie={selection.nameLottie}
                            title={selection.title}
                            component={selection.nameComponent}
                            key={index}
                            path={selection.path}
                            index={index}
                            onClick={onClick}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Selection;
