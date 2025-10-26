import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCheckCircle, MdError, MdInfo } from 'react-icons/md';
import { hideToast } from '../../store/actions/uiActions';
import styles from './Toast.module.scss';

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.ui.toast);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast.show, dispatch]);

  if (!toast.show) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <MdCheckCircle />;
      case 'error':
        return <MdError />;
      case 'info':
        return <MdInfo />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.toast} ${styles[toast.type]}`}>
      <span className={styles.icon}>{getIcon()}</span>
      <span className={styles.message}>{toast.message}</span>
      <button className={styles.close} onClick={() => dispatch(hideToast())}>
        ×
      </button>
    </div>
  );
};

export default Toast;

