import Sidebar from './Sidebar';
import Header from './Header';
import styles from './Layout.module.scss';
import modulesConfig from '../../config/modules.json';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar modules={modulesConfig.modules} />
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

