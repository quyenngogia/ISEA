import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import style from './Status.module.scss';
import globalStyle from '../../../components/GlobalStyles/GlobalStyles.module.scss';

const cx = classNames.bind({ ...style, ...globalStyle });

function Status() {
  const [has, setHas] = useState(false);
  const [loading, setLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);
  const { publicUser, fetchGet } = useContext(HomeContext);
  const state = [
    { text: 'Có lỗi xảy ra', class: 'deny' },
    { text: 'Chờ duyệt', class: 'wait' },
    { text: 'Đã duyệt', class: 'done' },
    { text: 'Từ chối', class: 'deny' },
  ];

  useEffect(() => {
    if (!publicUser?.id) return;

    const fetchApplicant = async () => {
      setLoading(true);
      const data = await fetchGet(`applicant/detail?user=${publicUser.id}`);
      setApplicants(data);

      if (data.length > 0) {
        setHas(true);
      }

      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    fetchApplicant();
  }, [publicUser, fetchGet]);

  return (
    <ul className={cx('notify-list', { init: loading })}>
      {!has ? <p>Bạn chưa ứng tuyển bài nào</p> : null}
      {applicants?.map((applicant, index) => (
        <li key={index} className={cx('notify-item')}>
          <div className={cx('post-apply')}>
            <div className={cx('post-title')}>{applicant?.title}</div>
            <div className={cx('post-info')}>
              <div className={cx('post-salary')}>{applicant?.salary}</div>
              <div className={cx('post-location')}>{applicant?.location}</div>
            </div>
          </div>
          <div className={cx('applicant-status')}>
            <span className={cx(state[applicant?.status].class)}>{state[applicant?.status].text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Status;
