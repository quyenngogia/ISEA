import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import BoardSection from '../components/BoardSection';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('container')}>
        <Header />
        <div className={cx('inner')}>
          <BoardSection/>
          <div className={cx('child')}>
            {children}
          </div>
          </div>
      </div>
    </div>
  );
}

export default AdminLayout;
