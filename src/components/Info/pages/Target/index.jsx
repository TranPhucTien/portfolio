import classNames from 'classnames/bind';
import Infomation from '../../components/Infomation';
import { myTargetAPI } from '../../infomationAPI';
import styles from './Target.module.scss';

const cx = classNames.bind(styles);

function Target() {
    return (
        <div className={cx('wrapper')}>
            <Infomation title={'Mục Tiêu!'} api={myTargetAPI} />
        </div>
    );
}

export default Target;
