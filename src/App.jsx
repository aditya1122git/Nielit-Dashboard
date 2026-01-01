import { useState, useMemo, useEffect } from 'react';
import { enrollmentData, getUniqueCentres, getUniqueCourses, getUniqueCategories, getUniqueStates, getUniqueStatuses } from './data/enrollmentData';
import { 
  filterData, 
  getSummaryStats, 
  aggregateByCentre, 
  aggregateByDistrict,
  aggregateByCourse, 
  aggregateByCategory,
  aggregateForStackedChart 
} from './utils/dataUtils';
import SummaryCards from './components/SummaryCards/SummaryCards';
import FilterPanel from './components/FilterPanel/FilterPanel';
import DataTable from './components/DataTable/DataTable';
import { CentreBarChart, DistrictBarChart, CourseBarChart, CategoryDonutChart, StackedBarChart } from './components/Charts';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    status: 'All',
    centre: 'All',
    state: 'All',
    district: 'All',
    course: 'All',
    category: 'All'
  });

  // Get unique values for filter dropdowns
  const centres = useMemo(() => getUniqueCentres(), []);
  const states = useMemo(() => getUniqueStates(), []);
  const statuses = useMemo(() => getUniqueStatuses(), []);
  const courses = useMemo(() => getUniqueCourses(), []);
  const categories = useMemo(() => getUniqueCategories(), []);

  // Get districts based on current state and centre selection
  const districts = useMemo(() => {
    let relevantData = enrollmentData;

    // Filter by status if selected
    if (filters.status && filters.status !== 'All') {
      relevantData = relevantData.filter(d => d.status === filters.status);
    }
    
    // Filter by state if selected
    if (filters.state && filters.state !== 'All') {
      relevantData = relevantData.filter(d => d.state === filters.state);
    }
    
    // Filter by centre if selected
    if (filters.centre && filters.centre !== 'All') {
      relevantData = relevantData.filter(d => d.centre === filters.centre);
    }
    
    return [...new Set(relevantData.map(d => d.district))].sort();
  }, [filters.status, filters.state, filters.centre]);

  // Auto-reset district when it's no longer available in the filtered list
  useEffect(() => {
    if (filters.district !== 'All' && !districts.includes(filters.district)) {
      setFilters(prev => ({ ...prev, district: 'All' }));
    }
  }, [districts, filters.district]);

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return filterData(enrollmentData, filters);
  }, [filters]);

  // Calculate summary statistics
  const stats = useMemo(() => {
    return getSummaryStats(filteredData);
  }, [filteredData]);

  // Aggregate data for charts
  const centreData = useMemo(() => aggregateByCentre(filteredData), [filteredData]);
  const districtData = useMemo(() => aggregateByDistrict(filteredData), [filteredData]);
  const courseData = useMemo(() => aggregateByCourse(filteredData), [filteredData]);
  const categoryData = useMemo(() => aggregateByCategory(filteredData), [filteredData]);
  const stackedData = useMemo(() => aggregateForStackedChart(filteredData), [filteredData]);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-logo">
            <img className="logo-image" src="/NIELIT_L.png" alt="NIELIT" />
            <div className="logo-text">
              <h1>NIELIT Student Enrollment Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Summary Cards */}
        <SummaryCards stats={stats} />

        {/* Filter Panel */}
        <FilterPanel
          filters={filters}
          onFilterChange={setFilters}
          centres={centres}
          statuses={statuses}
          states={states}
          districts={districts}
          courses={courses}
          categories={categories}
        />

        {/* Charts Grid - Row 1 */}
        <div className="charts-grid">
          <CentreBarChart data={centreData} />
          <DistrictBarChart data={districtData} />
        </div>

        {/* Charts Grid - Row 2 */}
        <div className="charts-grid-small">
          <StackedBarChart data={stackedData} selectedCentre={filters.centre} fullWidth={false} height={280} barSize={48} />
          <CategoryDonutChart data={categoryData} />
        </div>

        {/* Course-wise Enrollment (Full Width) */}
        <div className="stacked-chart-section">
          <CourseBarChart data={courseData} fullWidth={true} height={400} />
        </div>

        {/* Data Table */}
        <section className="table-section">
          <DataTable data={filteredData} />
        </section>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2025 NIELIT - National Institute of Electronics & Information Technology. All rights reserved.</p>
        <p className="footer-note">SDUY MPR November 2025 - Student Enrollment Data</p>
      </footer>
    </div>
  );
}

export default App;
