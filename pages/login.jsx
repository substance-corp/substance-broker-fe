import { useRouter } from 'next/router';
import { MdSecurity } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import CommonForm from '../components/Common/CommonForm';
import formsConfig from '../config/forms.json';
import styles from '../styles/Login.module.scss';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (formData) => {
    console.log('Login data:', formData);
    // Handle login logic here
    router.push('/dashboard');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <MdSecurity size={40} />
          </div>
        </div>
        
        <h1>Welcome Back</h1>
        <p>Sign in to access your dashboard and manage your account with ease.</p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <FaCheckCircle />
            <span>Secure authentication</span>
          </div>
          <div className={styles.feature}>
            <FaCheckCircle />
            <span>24/7 customer support</span>
          </div>
          <div className={styles.feature}>
            <FaCheckCircle />
            <span>Advanced security features</span>
          </div>
        </div>
      </div>

      <div className={styles.loginRight}>
        <div className={styles.formWrapper}>
          <CommonForm 
            config={formsConfig.login} 
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

