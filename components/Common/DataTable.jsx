import { useState } from 'react';
import { useRouter } from 'next/router';
import * as MdIcons from 'react-icons/md';
import styles from './DataTable.module.scss';

const DataTable = ({ config, data = [], onEdit, onDelete }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getIcon = (iconName) => {
    const Icon = MdIcons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderCellContent = (column, row) => {
    const value = row[column.key];

    switch (column.type) {
      case 'user':
        return (
          <div className={styles.userCell}>
            <div className={styles.userAvatar}>
              {row.name?.charAt(0) || 'U'}
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{row.name}</div>
            </div>
          </div>
        );

      case 'badge':
        return (
          <span className={`badge bg-primary ${styles.badge}`}>
            {value}
          </span>
        );

      case 'status':
        const statusClass = value === 'active' ? 'success' : 'secondary';
        return (
          <span className={`badge bg-${statusClass} ${styles.badge}`}>
            {value}
          </span>
        );

      case 'date':
        return formatDate(value);

      case 'count':
        return <span className={styles.count}>{value}</span>;

      case 'actions':
        return (
          <div className={styles.actions}>
            {config.actions?.map((action, index) => (
              <button
                key={index}
                className={`btn btn-sm btn-outline-${action.variant}`}
                onClick={() => {
                  if (action.label === 'Edit') onEdit && onEdit(row);
                  if (action.label === 'Delete') onDelete && onDelete(row);
                }}
                title={action.label}
              >
                {getIcon(action.icon)}
              </button>
            ))}
          </div>
        );

      default:
        return value;
    }
  };

  const filteredData = data.filter(row => {
    // Search filter
    const matchesSearch = Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Custom filters
    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return row[key] === value;
    });

    return matchesSearch && matchesFilters;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.tableInfo}>
          <h2>{config.title}</h2>
          <p>{config.subtitle}</p>
        </div>
        <div className={styles.tableActions}>
          {config.headerActions?.map((action, index) => (
            <button
              key={index}
              className={`btn btn-${action.variant}`}
              onClick={() => router.push(action.path)}
            >
              {getIcon(action.icon)}
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableFilters}>
        <div className={styles.searchBox}>
          <MdIcons.MdSearch size={20} />
          <input
            type="text"
            placeholder={config.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {config.filters?.map((filter, index) => (
          <select
            key={index}
            className="form-select"
            onChange={(e) => setFilters(prev => ({ ...prev, [filter.name]: e.target.value }))}
          >
            {filter.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className={styles.tableWrapper}>
        <table className="table">
          <thead>
            <tr>
              {config.columns?.map((column) => (
                <th key={column.key} style={{ width: column.width }}>
                  {column.label}
                  {column.sortable && <MdIcons.MdUnfoldMore size={16} />}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={row.id || index}>
                {config.columns?.map((column) => (
                  <td key={column.key}>
                    {renderCellContent(column, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length > itemsPerPage && (
        <div className={styles.pagination}>
          <div className={styles.paginationInfo}>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className={styles.paginationButtons}>
            <button
              className="btn btn-sm btn-outline-secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`btn btn-sm ${page === currentPage ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="btn btn-sm btn-outline-secondary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;

