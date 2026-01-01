import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import './Charts.css';

const COLORS = ['#4361ee', '#7209b7', '#f72585', '#4cc9f0'];

const CourseBarChart = ({ data, height = 250, fullWidth = false }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.name}</p>
          <p className="tooltip-value">{Number(payload[0].value || 0).toLocaleString('en-IN')} students</p>
        </div>
      );
    }
    return null;
  };

  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <div className={`chart-container${fullWidth ? ' full-width' : ''}`}>
        <h3 className="chart-title"><i className="fa-solid fa-book" aria-hidden="true" /> Course-wise Enrollment</h3>
        <div className="chart-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: `${height}px` }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>No data available for the selected filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`chart-container${fullWidth ? ' full-width' : ''}`}>
      <h3 className="chart-title"><i className="fa-solid fa-book" aria-hidden="true" /> Course-wise Enrollment</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              angle={-35}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 11, fill: '#6b7280' }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6b7280' }}
              tickFormatter={(value) => Number(value || 0).toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="students" radius={[4, 4, 0, 0]} maxBarSize={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseBarChart;
