import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import './Charts.css';

const COLORS = {
  GEN: '#4361ee',
  SC: '#10b981',
  ST: '#f59e0b',
  EWS: '#8b5cf6',
  Female: '#f72585',
  Male: '#3a0ca3'
};

const CategoryDonutChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const total = data.reduce((sum, item) => sum + Number(item.value || 0), 0);
      const percentage = total > 0 ? ((Number(payload[0].value || 0) / total) * 100).toFixed(1) : '0.0';
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.name}</p>
          <p className="tooltip-value">{Number(payload[0].value || 0).toLocaleString('en-IN')} students</p>
          <p className="tooltip-percent">{percentage}% of total</p>
        </div>
      );
    }
    return null;
  };

  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <div className="chart-container">
        <h3 className="chart-title"><i className="fa-solid fa-chart-pie" aria-hidden="true" /> Category Distribution</h3>
        <div className="chart-wrapper donut-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '280px' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>No data available for the selected filters</p>
        </div>
      </div>
    );
  }

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight={600}
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const renderLegend = (props) => {
    const { payload } = props;
    const total = data.reduce((sum, item) => sum + Number(item.value || 0), 0);

    // Create array of legend items with their percentages
    const legendItems = payload.map((entry) => {
      const dataItem = data.find(d => d.name === entry.value);
      const value = Number(dataItem?.value || 0);
      const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
      
      return {
        entry,
        value,
        percentage: parseFloat(percentage)
      };
    });

    // Sort by percentage in descending order
    legendItems.sort((a, b) => b.percentage - a.percentage);

    return (
      <ul className="custom-legend">
        {legendItems.map((item, index) => (
          <li key={`legend-${index}`} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: item.entry.color }} />
            <span className="legend-text">
              {item.entry.value}: {item.percentage.toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title"><i className="fa-solid fa-chart-pie" aria-hidden="true" /> Category Distribution</h3>
      <div className="chart-wrapper donut-wrapper">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={110}
              innerRadius={55}
              dataKey="value"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.name] || '#6b7280'}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryDonutChart;
