import { useRouter } from 'next/router';
import Link from 'next/link';
import * as MdIcons from 'react-icons/md';
import styles from './Sidebar.module.scss';

const Sidebar = ({ modules = [], logo = 'AdminPanel', subtitle = 'Role Management' }) => {
  const router = useRouter();

  const getIcon = (iconName) => {
    const Icon = MdIcons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  const isActive = (path) => {
    return router.pathname === path || router.pathname.startsWith(path + '/');
  };

  // Group modules by section
  const mainModules = modules.filter(m => m.section === 'main');
  const adminModules = modules.filter(m => m.section === 'admin');

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <MdIcons.MdSecurity size={24} />
        </div>
        <div className={styles.logoText}>
          <h4>{logo}</h4>
          <span>{subtitle}</span>
        </div>
      </div>

      <nav className={styles.nav}>
        {mainModules.map((module) => (
          <Link
            key={module.id}
            href={module.path}
            className={`${styles.navItem} ${isActive(module.path) ? styles.active : ''}`}
          >
            <span className={styles.navIcon}>{getIcon(module.icon)}</span>
            <span className={styles.navText}>{module.name}</span>
          </Link>
        ))}

        {adminModules.length > 0 && (
          <>
            <div className={styles.navDivider}>
              <span>ADMINISTRATION</span>
            </div>
            {adminModules.map((module) => (
              <Link
                key={module.id}
                href={module.path}
                className={`${styles.navItem} ${isActive(module.path) ? styles.active : ''}`}
              >
                <span className={styles.navIcon}>{getIcon(module.icon)}</span>
                <span className={styles.navText}>{module.name}</span>
              </Link>
            ))}
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

