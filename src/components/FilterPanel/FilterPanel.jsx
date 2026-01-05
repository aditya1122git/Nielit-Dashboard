import './FilterPanel.css';

const FilterPanel = ({ filters, onFilterChange, centres, states, districts, courses, categories, statuses }) => {
  const handleChange = (filterName, value) => {
    onFilterChange({
      ...filters,
      [filterName]: value
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <span className="filter-icon"><i className="fa-solid fa-filter" aria-hidden="true" /></span>
        <h3>Filters</h3>
      </div>
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="status-filter">Status</label>
          <select
            id="status-filter"
            value={filters.status}
            onChange={(e) => handleChange('status', e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="state-filter">State</label>
          <select
            id="state-filter"
            value={filters.state}
            onChange={(e) => handleChange('state', e.target.value)}
          >
            <option value="All">All States</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="district-filter">District</label>
          <select
            id="district-filter"
            value={filters.district}
            onChange={(e) => handleChange('district', e.target.value)}
          >
            <option value="All">All Districts</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="course-filter">Course</label>
          <select
            id="course-filter"
            value={filters.course}
            onChange={(e) => handleChange('course', e.target.value)}
          >
            <option value="All">All Courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category-filter">Category</label>
          <select
            id="category-filter"
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button
          className="reset-btn"
          onClick={() => onFilterChange({ status: 'Registered', centre: 'All', state: 'All', district: 'All', course: 'All', category: 'All' })}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
