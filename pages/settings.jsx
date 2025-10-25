import styles from '../styles/Dashboard.module.scss';

export default function Settings() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <div>
          <h1>Settings</h1>
          <p>Manage your application settings and preferences</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '0.75rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}>
        <p style={{ color: '#64748b' }}>Settings page content coming soon...</p>
      </div>
    </div>
  );
}

