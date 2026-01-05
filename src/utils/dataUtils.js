/**
 * Data processing utilities for dashboard aggregations
 */

/**
 * Filter data based on selected filters
 */
export const filterData = (data, filters) => {
  return data.filter(item => {
    const centreMatch = !filters.centre || filters.centre === 'All' || item.centre === filters.centre;
    const stateMatch = !filters.state || filters.state === 'All' || item.state === filters.state;
    const districtMatch = !filters.district || filters.district === 'All' || item.district === filters.district;
    const itemCategoryLower = safeLower(item.category);
    const filterCategoryLower = safeLower(filters.category);
    const isFemaleRow = itemCategoryLower === 'female';
    const isFemaleFilter = filterCategoryLower === 'female';
    const courseMatch =
      isFemaleFilter || !filters.course || filters.course === 'All' || item.course === filters.course;
    const categoryMatch =
      !filters.category || filters.category === 'All'
        ? !isFemaleRow
        : itemCategoryLower === filterCategoryLower;
    const statusMatch = !filters.status || filters.status === 'All' || item.status === filters.status;
    return centreMatch && stateMatch && districtMatch && courseMatch && categoryMatch && statusMatch;
  });
};

const toNumber = (value) => {
  const n = typeof value === 'number' ? value : Number(String(value ?? '').replace(/,/g, ''));
  return Number.isFinite(n) ? n : 0;
};

const safeLower = (value) => String(value ?? '').toLowerCase();

const normalizeCourseKey = (value) =>
  String(value ?? '')
    .replace(/^\uFEFF/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

// Prefer full (expanded) course names as canonical values.
// Add more aliases here as you spot duplicates in the Filter dropdown.
const COURSE_CANONICAL = {
  'iot': 'Foundation course in Internet of Things (IoT)',
  'foundation course in internet of things (iot)': 'Foundation course in Internet of Things (IoT)',

  'o level': 'O Level (IT)',
  'o level (it)': 'O Level (IT)',

  'machine learning': 'Foundation course in Machine Learning using Python',
  'foundation course in machine learning using python': 'Foundation course in Machine Learning using Python',

  'info security': 'Foundation course in Information Security',
  'information security': 'Foundation course in Information Security',
  'foundation course in information security': 'Foundation course in Information Security',

  'web developer': 'Certified Web Developer',
  'certified web developer': 'Certified Web Developer',

  'ccaapa': 'Certified Computer Application Accounting and Publishing Assistant',
  'computer application accounting': 'Certified Computer Application Accounting and Publishing Assistant',
  'certified computer application accounting and publishing assistant': 'Certified Computer Application Accounting and Publishing Assistant',

  // Keep this conservative: only obvious aliases for the same course
  'certified data entry and office assistant (upskilling)': 'Certified Data Entry and Office Assistant (Upskilling)',
  'data entry': 'Certified Data Entry and Office Assistant (Upskilling)',
  'data entry assistant': 'Certified Data Entry and Office Assistant (Upskilling)',

  'product assembly assistant': 'Product Assembly Assistant (Solar-LED)',
  'product assembly assistant (solar-led)': 'Product Assembly Assistant (Solar-LED)',
};

export const canonicalCourseName = (course) => {
  const key = normalizeCourseKey(course);
  return COURSE_CANONICAL[key] ?? String(course ?? '').trim();
};

/**
 * Get summary statistics
 */
export const getSummaryStats = (data) => {
  const totalStudents = data.reduce((sum, item) => sum + toNumber(item.student_count), 0);
  const totalCentres = new Set(data.map(d => d.centre)).size;
  const totalStates = new Set(data.map(d => d.state)).size;
  const totalDistricts = new Set(data.map(d => d.district)).size;
  const totalCourses = new Set(data.map(d => d.course)).size;
  const totalCategories = new Set(data.map(d => d.category)).size;
  
  return {
    totalStudents,
    totalCentres,
    totalStates,
    totalDistricts,
    totalCourses,
    totalCategories
  };
};

/**
 * Aggregate data by centre for bar chart
 */
export const aggregateByCentre = (data) => {
  const centreMap = new Map();
  
  data.forEach(item => {
    const current = centreMap.get(item.centre) || 0;
    centreMap.set(item.centre, current + toNumber(item.student_count));
  });
  
  return Array.from(centreMap, ([name, students]) => ({ name, students }))
    .sort((a, b) => b.students - a.students);
};

/**
 * Aggregate data by district for bar chart
 */
export const aggregateByDistrict = (data) => {
  const districtMap = new Map();
  
  data.forEach(item => {
    const current = districtMap.get(item.district) || 0;
    districtMap.set(item.district, current + toNumber(item.student_count));
  });
  
  return Array.from(districtMap, ([name, students]) => ({ name, students }))
    .sort((a, b) => b.students - a.students);
};

/**
 * Aggregate data by course for horizontal bar chart
 */
export const aggregateByCourse = (data) => {
  const courseMap = new Map();
  
  data.forEach(item => {
    const current = courseMap.get(item.course) || 0;
    courseMap.set(item.course, current + toNumber(item.student_count));
  });
  
  return Array.from(courseMap, ([name, students]) => ({ name, students }))
    .sort((a, b) => b.students - a.students);
};

/**
 * Aggregate data by category for pie/donut chart
 */
export const aggregateByCategory = (data) => {
  const categoryMap = new Map();
  
  data.forEach(item => {
    const current = categoryMap.get(item.category) || 0;
    categoryMap.set(item.category, current + toNumber(item.student_count));
  });
  
  return Array.from(categoryMap, ([name, value]) => ({ name, value }));
};

/**
 * Aggregate data for stacked bar chart (category distribution per centre)
 */
export const aggregateForStackedChart = (data) => {
  const centreMap = new Map();
  
  data.forEach(item => {
    if (!centreMap.has(item.centre)) {
      centreMap.set(item.centre, { name: item.centre, GEN: 0, SC: 0, ST: 0, EWS: 0, Female: 0 });
    }
    const centreData = centreMap.get(item.centre);
    centreData[item.category] = (centreData[item.category] || 0) + toNumber(item.student_count);
  });
  
  return Array.from(centreMap.values())
    .sort((a, b) => (b.GEN + b.SC + b.ST + b.EWS) - (a.GEN + a.SC + a.ST + a.EWS));
};

/**
 * Format number with commas for display
 */
export const formatNumber = (num) => {
  const n = toNumber(num);
  return n.toLocaleString('en-IN');
};

/**
 * Search and sort data for table
 */
export const searchAndSortData = (data, searchTerm, sortConfig) => {
  let result = [...data];
  
  // Search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    result = result.filter(item => 
      safeLower(item.centre).includes(term) ||
      safeLower(item.state).includes(term) ||
      safeLower(item.district).includes(term) ||
      safeLower(item.status).includes(term) ||
      safeLower(item.course).includes(term) ||
      safeLower(item.category).includes(term) ||
      String(item.student_count ?? '').includes(term)
    );
  }
  
  // Sort
  if (sortConfig.key) {
    result.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      
      if (typeof aVal === 'string') {
        return sortConfig.direction === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      return sortConfig.direction === 'asc' 
        ? aVal - bVal 
        : bVal - aVal;
    });
  }
  
  return result;
};
