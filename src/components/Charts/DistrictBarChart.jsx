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

const COLORS = ['#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5', '#ecfdf5'];

const DistrictBarChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.name}</p>
          <p className="tooltip-value">{payload[0].value.toLocaleString('en-IN')} students</p>
        </div>
      );
    }
    return null;
  };

  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <div className="chart-container">
        <h3 className="chart-title"><i className="fa-solid fa-location-dot" aria-hidden="true" /> District-wise Student Count</h3>
        <div className="chart-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '350px' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>No data available for the selected filters</p>
        </div>
      </div>
    );
  }

  const chartHeight = 400;

  return (
    <div className="chart-container">
      <h3 className="chart-title"><i className="fa-solid fa-location-dot" aria-hidden="true" /> District-wise Student Count</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 10, fill: '#6b7280' }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6b7280' }}
              tickFormatter={(value) => Number(value || 0).toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="students" radius={[4, 4, 0, 0]} maxBarSize={40}>
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

export default DistrictBarChart;
