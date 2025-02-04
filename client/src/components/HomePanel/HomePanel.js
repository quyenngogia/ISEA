import classNames from 'classnames/bind';
import styles from './HomePanel.module.scss';
import HomePanelItem from '../HomePanelItem/HomePanelItem';

const cx = classNames.bind(styles);

function HomePanel({ title, arrItem }) {
  return (
    <div className={cx('left-wrapper')}>
      <div className={cx('left-item')}>
        <div className={cx('heading')}>{title}</div>
        <ul className={cx('list-link')}>
          {arrItem.map((item, index) => {
            return <HomePanelItem key={index} src={item.src} content={item.content} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default HomePanel;
