import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import FormGroup from '~/components/FormGroup';
import { useContext, useEffect, useRef, useState } from 'react';
import { postData } from '~/hooks/apiService';
import { isNotEmpty, isNumber } from '~/hooks/validate';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import { LoadBarContext } from '~/components/Context/LoadBarPovider';
import PreviousPageBTN from '~/components/PreviousPage';
import Button from '~/components/Button';
import PostForm from '../PostForm/PostForm';

const cx = classNames.bind(styles);


function CreatePost() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const { showLoadBar, hideLoadBar } = useContext(LoadBarContext);

  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    showLoadBar();

    hideLoadBar();
  }, []);

  const { addToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const response = await postData('/post/create', formData);
      console.log(response);
      addToast(response);
      if (response.status === 'success') {
        navigate(config.routes.admin.recruitmentList);
      }
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <PreviousPageBTN />
          <span className={cx('post-title')}>Đăng bài</span>
        </div>
        <Button title="Lưu lại" onClick={handleSubmit} />
      </div>
      <PostForm/>
    </div>
  );
}

export default CreatePost;
