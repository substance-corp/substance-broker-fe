import { useState } from 'react';
import DataTable from '../../components/Common/DataTable';
import tablesConfig from '../../config/tables.json';

export default function Roles() {
  const [roles] = useState([
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access with all permissions',
      permissions: 25,
      users: 5,
      createdAt: '2024-01-10'
    },
    {
      id: 2,
      name: 'Manager',
      description: 'Can manage users and view reports',
      permissions: 18,
      users: 12,
      createdAt: '2024-01-12'
    },
    {
      id: 3,
      name: 'Editor',
      description: 'Can create and edit content',
      permissions: 10,
      users: 25,
      createdAt: '2024-01-15'
    },
    {
      id: 4,
      name: 'Viewer',
      description: 'Read-only access to content',
      permissions: 5,
      users: 50,
      createdAt: '2024-01-20'
    }
  ]);

  const handleEdit = (role) => {
    console.log('Edit role:', role);
  };

  const handleDelete = (role) => {
    console.log('Delete role:', role);
  };

  return (
    <div>
      <DataTable
        config={tablesConfig.roles}
        data={roles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

