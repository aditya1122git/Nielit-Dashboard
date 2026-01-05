import { useState, useMemo, useEffect } from 'react';
import { enrollmentData, getUniqueCentres, getUniqueCategories, getUniqueStates, getUniqueStatuses } from './data/enrollmentData';
import { 
  filterData, 
  canonicalCourseName,
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
    status: 'Certified',
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
  const categories = useMemo(() => getUniqueCategories(), []);

  // Normalize course names (merge duplicates; keep full names)
  const normalizedEnrollmentData = useMemo(() => {
    return enrollmentData.map((row) => ({
      ...row,
      course: canonicalCourseName(row.course),
    }));
  }, []);

  const courses = useMemo(() => {
    return [...new Set(normalizedEnrollmentData.map((d) => d.course))]
      .filter((c) => c && c !== '__ALL_COURSES__')
      .sort();
  }, [normalizedEnrollmentData]);

  // Get districts based on current state and centre selection
  const districts = useMemo(() => {
    let relevantData = normalizedEnrollmentData;

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
  }, [filters.status, filters.state, filters.centre, normalizedEnrollmentData]);

  // Auto-reset district when it's no longer available in the filtered list
  useEffect(() => {
    if (filters.district !== 'All' && !districts.includes(filters.district)) {
      setFilters(prev => ({ ...prev, district: 'All' }));
    }
  }, [districts, filters.district]);

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return filterData(normalizedEnrollmentData, filters);
  }, [filters]);

  const matchesBaseFilters = (row) => {
    const statusMatch = !filters.status || filters.status === 'All' || row.status === filters.status;
    const centreMatch = !filters.centre || filters.centre === 'All' || row.centre === filters.centre;
    const stateMatch = !filters.state || filters.state === 'All' || row.state === filters.state;
    const districtMatch = !filters.district || filters.district === 'All' || row.district === filters.district;
    const isFemaleRow = String(row.category ?? '').toLowerCase() === 'female';
    const courseMatch = isFemaleRow || !filters.course || filters.course === 'All' || row.course === filters.course;
    return statusMatch && centreMatch && stateMatch && districtMatch && courseMatch;
  };

  // Calculate summary statistics
  const stats = useMemo(() => {
    return getSummaryStats(filteredData);
  }, [filteredData]);

  // Aggregate data for charts
  const centreData = useMemo(() => aggregateByCentre(filteredData), [filteredData]);
  const districtData = useMemo(() => aggregateByDistrict(filteredData), [filteredData]);
  const courseData = useMemo(() => aggregateByCourse(filteredData), [filteredData]);
  const categoryData = useMemo(() => {
    if (String(filters.category ?? '').toLowerCase() === 'female') {
      const femaleCount = normalizedEnrollmentData
        .filter((d) => matchesBaseFilters(d) && String(d.category ?? '').toLowerCase() === 'female')
        .reduce((sum, d) => sum + Number(d.student_count || 0), 0);

      const totalCount = normalizedEnrollmentData
        .filter((d) => matchesBaseFilters(d) && String(d.category ?? '').toLowerCase() !== 'female')
        .reduce((sum, d) => sum + Number(d.student_count || 0), 0);

      const maleCount = Math.max(0, totalCount - femaleCount);

      return [
        { name: 'Female', value: femaleCount },
        { name: 'Male', value: maleCount },
      ].filter((x) => Number(x.value || 0) > 0);
    }

    return aggregateByCategory(filteredData);
  }, [filteredData, filters.category, filters.status, filters.centre, filters.state, filters.district, filters.course, normalizedEnrollmentData]);

  const stackedData = useMemo(() => {
    const stackedFiltered = normalizedEnrollmentData.filter((d) => {
      if (!matchesBaseFilters(d)) return false;

      const cat = String(d.category ?? '');
      const catLower = cat.toLowerCase();
      const filterCatLower = String(filters.category ?? '').toLowerCase();

      if (!filters.category || filters.category === 'All') {
        return ['gen', 'sc', 'st', 'ews', 'female'].includes(catLower);
      }

      return catLower === filterCatLower;
    });

    return aggregateForStackedChart(stackedFiltered);
  }, [filters.category, filters.status, filters.centre, filters.state, filters.district, filters.course, normalizedEnrollmentData]);

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
          <div className="header-logos-right">
            <img className="right-logo-image" src="/IndiaAIlogo.svg" alt="India AI" />
            <img className="right-logo-image" src="/digital-india-logo.jpg" alt="Digital India" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
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

        {/* Summary Cards */}
        <SummaryCards stats={stats} />

        {/* Charts Grid - Row 1 */}
        <div className="charts-grid">
          <CentreBarChart data={centreData} />
          <CategoryDonutChart data={categoryData} />
        </div>

        {/* District-wise Enrollment (Full Width) */}
        <div className="stacked-chart-section">
          <DistrictBarChart data={districtData} />
        </div>

        {/* Category Distribution by Centre (Full Width) */}
        <div className="stacked-chart-section">
          <StackedBarChart data={stackedData} selectedCentre={filters.centre} fullWidth={true} height={280} barSize={48} />
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
