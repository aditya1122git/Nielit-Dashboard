import { useState, useMemo } from 'react';
import { searchAndSortData, formatNumber } from '../../utils/dataUtils';
import './DataTable.css';

const DataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'student_count', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const processedData = useMemo(() => {
    return searchAndSortData(data, searchTerm, sortConfig);
  }, [data, searchTerm, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return processedData.slice(startIndex, startIndex + rowsPerPage);
  }, [processedData, currentPage]);

  const totalPages = Math.ceil(processedData.length / rowsPerPage);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
    setCurrentPage(1);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <i className="fa-solid fa-sort" aria-hidden="true" />;
    return sortConfig.direction === 'asc'
      ? <i className="fa-solid fa-sort-up" aria-hidden="true" />
      : <i className="fa-solid fa-sort-down" aria-hidden="true" />;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="data-table-container">
      <div className="table-header">
        <h3><i className="fa-solid fa-table" aria-hidden="true" /> Enrollment Details</h3>
        <div className="table-controls">
          <div className="search-box">
            <span className="search-icon"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /></span>
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <span className="record-count">{formatNumber(processedData.length)} records</span>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('status')}>
                Status <span className="sort-icon">{getSortIcon('status')}</span>
              </th>
              <th onClick={() => handleSort('state')}>
                State <span className="sort-icon">{getSortIcon('state')}</span>
              </th>
              <th onClick={() => handleSort('district')}>
                District <span className="sort-icon">{getSortIcon('district')}</span>
              </th>
              <th onClick={() => handleSort('centre')}>
                Centre <span className="sort-icon">{getSortIcon('centre')}</span>
              </th>
              <th onClick={() => handleSort('course')}>
                Course <span className="sort-icon">{getSortIcon('course')}</span>
              </th>
              <th onClick={() => handleSort('category')}>
                Category <span className="sort-icon">{getSortIcon('category')}</span>
              </th>
              <th onClick={() => handleSort('student_count')}>
                Students <span className="sort-icon">{getSortIcon('student_count')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr key={index}>
                  <td>{row.status}</td>
                  <td>{row.state}</td>
                  <td>{row.district}</td>
                  <td>{row.centre}</td>
                  <td>
                    <span className="course-badge">
                      {row.course === '__ALL_COURSES__' || !row.course ? '—' : row.course}
                    </span>
                  </td>
                  <td>
                    <span className={`category-badge category-${String(row.category ?? '').toLowerCase()}`}>
                      {row.category ?? ''}
                    </span>
                  </td>
                  <td className="student-count">{formatNumber(row.student_count)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="page-btn"
          >
            ««
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="page-btn"
          >
            «
          </button>
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="page-btn"
          >
            »
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="page-btn"
          >
            »»
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
