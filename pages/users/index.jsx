import { useState } from 'react';
import DataTable from '../../components/Common/DataTable';
import tablesConfig from '../../config/tables.json';

export default function Users() {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Manager',
      status: 'active',
      createdAt: '2024-01-20'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'Editor',
      status: 'inactive',
      createdAt: '2024-02-01'
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      role: 'Viewer',
      status: 'active',
      createdAt: '2024-02-10'
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'Manager',
      status: 'active',
      createdAt: '2024-02-15'
    }
  ]);

  const handleEdit = (user) => {
    console.log('Edit user:', user);
  };

  const handleDelete = (user) => {
    console.log('Delete user:', user);
  };

  return (
    <div>
      <DataTable
        config={tablesConfig.users}
        data={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

