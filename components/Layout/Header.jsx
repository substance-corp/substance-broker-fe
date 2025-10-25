import { MdNotifications, MdArrowDropDown } from 'react-icons/md';
import styles from './Header.module.scss';

const Header = ({ user = { name: 'John Doe', role: 'Admin', avatar: '/avatar.png' } }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          {/* Empty for now, can add breadcrumbs or search */}
        </div>

        <div className={styles.headerRight}>
          <div className={styles.notifications}>
            <MdNotifications size={24} />
            <span className={styles.badge}>3</span>
          </div>

          <div className={styles.userMenu}>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.userRole}>{user.role}</span>
            </div>
            <div className={styles.userAvatar}>
              {user.name.charAt(0)}
            </div>
            <MdArrowDropDown size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

