import { MdTrendingUp, MdTrendingDown, MdWarning } from 'react-icons/md';
import { FaFileAlt, FaClipboardList, FaDollarSign, FaChartLine } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.scss';

export default function Dashboard() {
  const stats = [
    {
      title: 'Active Policies',
      value: '1,247',
      change: '+12% from last month',
      trend: 'up',
      icon: <FaFileAlt />,
      color: 'primary'
    },
    {
      title: 'Pending Quotes',
      value: '89',
      change: '24 need attention',
      trend: 'warning',
      icon: <FaClipboardList />,
      color: 'warning'
    },
    {
      title: 'Monthly Revenue',
      value: '$847K',
      change: '+8% from last month',
      trend: 'up',
      icon: <FaDollarSign />,
      color: 'success'
    },
    {
      title: 'Claims Ratio',
      value: '12.4%',
      change: '↓ 2% from last month',
      trend: 'down',
      icon: <FaChartLine />,
      color: 'danger'
    }
  ];

  const activities = [
    {
      title: 'New quote request submitted',
      subtitle: 'Commercial Property - Acme Corp',
      time: '2 minutes ago',
      icon: 'quote',
      color: 'primary'
    },
    {
      title: 'Policy bound successfully',
      subtitle: 'Auto Insurance - Smith & Associates',
      time: '1 hour ago',
      icon: 'check',
      color: 'success'
    },
    {
      title: 'Payment received',
      subtitle: 'Premium payment - $12,450',
      time: '3 hours ago',
      icon: 'dollar',
      color: 'success'
    },
    {
      title: 'Document upload required',
      subtitle: 'Missing certificate - Tech Solutions LLC',
      time: '5 hours ago',
      icon: 'warning',
      color: 'danger'
    }
  ];

  const quickActions = [
    { label: 'New Quote', icon: 'MdAdd', path: '/quotes/create' },
    { label: 'Search Policies', icon: 'MdSearch', path: '/policies' },
    { label: 'Upload Documents', icon: 'MdUploadFile', path: '/documents/upload' },
    { label: 'Generate Report', icon: 'MdBarChart', path: '/reports' }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, John. Here&apos;s what&apos;s happening with your agency today.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statIcon}>
              {stat.icon}
            </div>
            <div className={styles.statContent}>
              <h3>{stat.title}</h3>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={`${styles.statChange} ${styles[stat.trend]}`}>
                {stat.trend === 'up' && <MdTrendingUp />}
                {stat.trend === 'down' && <MdTrendingDown />}
                {stat.trend === 'warning' && <MdWarning />}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.recentActivity}>
          <div className={styles.cardHeader}>
            <h3>Recent Activity</h3>
            <a href="#" className={styles.viewAll}>View All</a>
          </div>
          <div className={styles.activityList}>
            {activities.map((activity, index) => (
              <div key={index} className={styles.activityItem}>
                <div className={`${styles.activityIcon} ${styles[activity.color]}`}>
                  {activity.icon === 'quote' && <FaClipboardList />}
                  {activity.icon === 'check' && '✓'}
                  {activity.icon === 'dollar' && '$'}
                  {activity.icon === 'warning' && '⚠'}
                </div>
                <div className={styles.activityContent}>
                  <h4>{activity.title}</h4>
                  <p>{activity.subtitle}</p>
                  <span className={styles.activityTime}>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.quickActions}>
          <div className={styles.cardHeader}>
            <h3>Quick Actions</h3>
          </div>
          <div className={styles.actionsList}>
            {quickActions.map((action, index) => (
              <a key={index} href={action.path} className={styles.actionItem}>
                <div className={styles.actionIcon}>
                  {action.label.includes('New') && '+'}
                  {action.label.includes('Search') && '🔍'}
                  {action.label.includes('Upload') && '📤'}
                  {action.label.includes('Generate') && '📊'}
                </div>
                <span>{action.label}</span>
                <div className={styles.actionArrow}>→</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

