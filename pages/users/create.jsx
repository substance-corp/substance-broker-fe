import { useRouter } from 'next/router';
import { MdArrowBack } from 'react-icons/md';
import CommonForm from '../../components/Common/CommonForm';
import formsConfig from '../../config/forms.json';
import styles from '../../styles/CreatePage.module.scss';

export default function CreateUser() {
  const router = useRouter();

  const handleSubmit = (formData) => {
    console.log('Create user data:', formData);
    // Handle user creation logic here
    router.push('/users');
  };

  const handleCancel = () => {
    router.push('/users');
  };

  return (
    <div className={styles.createPage}>
      <button className={styles.backButton} onClick={handleCancel}>
        <MdArrowBack />
        <span>Back to Users</span>
      </button>

      <CommonForm 
        config={formsConfig.createUser}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

