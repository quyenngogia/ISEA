import classNames from 'classnames/bind';
import styles from './HomeNews.module.scss';
import HomeNewsItem from '../HomeNewsItem/HomeNewsItem';

const cx = classNames.bind(styles);

function HomeNews({ title, newsArr }) {
  return (
    <div className={cx('right-news')}>
      <div className={cx('heading-news')}>{title}</div>
      <ul className={cx('list-news')}>
        {newsArr.map((item, index) => {
          return <HomeNewsItem key={index} src={item.src} title={item.title} publish={item.publish} tagArr={item.tagArr} />;
        })}
      </ul>
    </div>
  );
}

export default HomeNews;
