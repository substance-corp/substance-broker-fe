import styles from '../styles/Dashboard.module.scss';

export default function Analytics() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <div>
          <h1>Analytics</h1>
          <p>View detailed analytics and insights</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '0.75rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}>
        <p style={{ color: '#64748b' }}>Analytics page content coming soon...</p>
      </div>
    </div>
  );
}

