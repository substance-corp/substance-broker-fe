import { useRouter } from 'next/router';
import { MdArrowBack } from 'react-icons/md';
import CommonForm from '../../components/Common/CommonForm';
import formsConfig from '../../config/forms.json';
import styles from '../../styles/CreatePage.module.scss';

export default function CreateRole() {
  const router = useRouter();

  const handleSubmit = (formData) => {
    console.log('Create role data:', formData);
    // Handle role creation logic here
    router.push('/roles');
  };

  const handleCancel = () => {
    router.push('/roles');
  };

  return (
    <div className={styles.createPage}>
      <button className={styles.backButton} onClick={handleCancel}>
        <MdArrowBack />
        <span>Back to Roles</span>
      </button>

      <CommonForm 
        config={formsConfig.createRole}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

