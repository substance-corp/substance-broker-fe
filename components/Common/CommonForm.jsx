import { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FcIcons from 'react-icons/fc';
import * as SiIcons from 'react-icons/si';
import styles from './CommonForm.module.scss';

const CommonForm = ({ config, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({});
  const [permissions, setPermissions] = useState({});

  const getIcon = (iconName) => {
    if (!iconName) return null;
    const Icon = MdIcons[iconName] || FcIcons[iconName] || SiIcons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (moduleId, permission) => {
    setPermissions(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [permission]: !prev[moduleId]?.[permission]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ ...formData, permissions });
  };

  const renderField = (field) => {
    const colClass = field.col ? `col-md-${field.col}` : 'col-12';

    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
        return (
          <div key={field.name} className={colClass}>
            <div className="mb-3">
              <label className="form-label">{field.label} {field.required && <span className="text-danger">*</span>}</label>
              <div className={styles.inputGroup}>
                {field.icon && <span className={styles.inputIcon}>{getIcon(field.icon)}</span>}
                <input
                  type={field.type}
                  className={`form-control ${field.icon ? styles.withIcon : ''}`}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 'select':
        return (
          <div key={field.name} className={colClass}>
            <div className="mb-3">
              <label className="form-label">{field.label} {field.required && <span className="text-danger">*</span>}</label>
              <select
                className="form-select"
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.name} className={colClass}>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id={field.name}
                onChange={(e) => handleChange(field.name, e.target.checked)}
              />
              <label className="form-check-label" htmlFor={field.name}>
                {field.label}
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.formContainer}>
      {config.title && (
        <div className={styles.formHeader}>
          <h2>{config.title}</h2>
          {config.subtitle && <p>{config.subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          {config.fields?.map(field => renderField(field))}
        </div>

        {/* Permissions Section for Role Form */}
        {config.permissionsSection && (
          <div className={styles.permissionsSection}>
            <div className={styles.permissionsHeader}>
              <h5>{config.permissionsSection.title}</h5>
              <p>{config.permissionsSection.subtitle}</p>
            </div>

            <div className={styles.permissionsTable}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Module</th>
                    {config.permissionsSection.modules[0]?.permissions.map(perm => (
                      <th key={perm}>{perm}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.permissionsSection.modules.map(module => (
                    <tr key={module.id}>
                      <td>
                        <div className={styles.moduleName}>
                          {getIcon(module.icon)}
                          <span>{module.name}</span>
                        </div>
                      </td>
                      {module.permissions.map(perm => (
                        <td key={perm}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={() => handlePermissionChange(module.id, perm)}
                            checked={permissions[module.id]?.[perm] || false}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer with Social Login */}
        {config.footer && (
          <div className={styles.formFooter}>
            {config.footer.forgotPassword && (
              <div className={styles.forgotPassword}>
                <a href={config.footer.forgotPassword.link}>
                  {config.footer.forgotPassword.text}
                </a>
              </div>
            )}

            {config.footer.socialLogin && (
              <div className={styles.socialLogin}>
                <p>{config.footer.socialLogin.text}</p>
                <div className={styles.socialButtons}>
                  {config.footer.socialLogin.providers.map(provider => (
                    <button
                      key={provider.name}
                      type="button"
                      className={styles.socialButton}
                    >
                      {getIcon(provider.icon)}
                      <span>{provider.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {config.footer.signup && (
              <div className={styles.signupLink}>
                <span>{config.footer.signup.text} </span>
                <a href={config.footer.signup.link}>
                  {config.footer.signup.linkText}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Form Buttons */}
        <div className={styles.formButtons}>
          {config.buttons?.map((button, index) => (
            <button
              key={index}
              type={button.type}
              className={`btn btn-${button.variant} ${button.fullWidth ? 'w-100' : ''}`}
              onClick={button.type === 'button' ? onCancel : undefined}
            >
              {button.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CommonForm;

