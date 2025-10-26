import { useSelector } from 'react-redux';
import styles from './Loader.module.scss';

const Loader = () => {
  const { isLoading, loadingMessage } = useSelector((state) => state.ui);

  if (!isLoading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        {loadingMessage && <p className={styles.message}>{loadingMessage}</p>}
      </div>
    </div>
  );
};

export default Loader;

