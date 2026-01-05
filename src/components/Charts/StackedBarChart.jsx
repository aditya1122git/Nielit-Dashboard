import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
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
  Female: '#f72585'
};

const StackedBarChart = ({ data, selectedCentre = 'All', height = 400, fullWidth = true, barSize = 32 }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Only sum SC, ST, and EWS (not Female, as Female is already part of the total)
      const total = payload
        .filter(p => ['SC', 'ST', 'EWS'].includes(p.dataKey))
        .reduce((sum, p) => sum + Number(p.value || 0), 0);
      return (
        <div className="custom-tooltip stacked-tooltip">
          <p className="tooltip-label">{String(label ?? '').replace('NIELIT ', '')}</p>
          <div className="tooltip-items">
            {payload.map((p, index) => (
              <p key={index} className="tooltip-item" style={{ color: p.fill }}>
                {p.dataKey}: {Number(p.value || 0).toLocaleString('en-IN')}
              </p>
            ))}
          </div>
          <p className="tooltip-total">Total: {total.toLocaleString('en-IN')}</p>
        </div>
      );
    }
    return null;
  };

  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <div className={`chart-container${fullWidth ? ' full-width' : ''}`}>
        <h3 className="chart-title"><i className="fa-solid fa-layer-group" aria-hidden="true" /> Category Distribution by Centre</h3>
        <div className="chart-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: `${height}px` }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>No data available for the selected filters</p>
        </div>
      </div>
    );
  }

  const isSingleCentre = selectedCentre && selectedCentre !== 'All' && data.length === 1;

  if (isSingleCentre) {
    const row = data[0] || {};
    const categoryBars = [
      { name: 'SC', students: Number(row.SC || 0) },
      { name: 'ST', students: Number(row.ST || 0) },
      { name: 'EWS', students: Number(row.EWS || 0) },
      { name: 'Female', students: Number(row.Female || 0) },
    ].filter(d => d.students > 0);

    return (
      <div className={`chart-container${fullWidth ? ' full-width' : ''}`}>
        <h3 className="chart-title"><i className="fa-solid fa-layer-group" aria-hidden="true" /> Category Distribution (Centre: {String(selectedCentre ?? '').replace('NIELIT ', '')})</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={height}>
            <BarChart
              data={categoryBars}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#6b7280' }}
                tickFormatter={(value) => Number(value || 0).toLocaleString()}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="custom-tooltip stacked-tooltip">
                        <p className="tooltip-label">{label}</p>
                        <p className="tooltip-item" style={{ color: payload[0].fill }}>
                          Students: {Number(payload[0].value || 0).toLocaleString('en-IN')}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="students" radius={[4, 4, 0, 0]} barSize={Math.max(36, barSize)}>
                {categoryBars.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#6b7280'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  return (
    <div className={`chart-container${fullWidth ? ' full-width' : ''}`}>
      <h3 className="chart-title"><i className="fa-solid fa-layer-group" aria-hidden="true" /> Category Distribution by Centre</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={height}>
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
              tick={{ fontSize: 11, fill: '#6b7280' }}
              tickFormatter={(value) => String(value ?? '').replace('NIELIT ', '')}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6b7280' }}
              tickFormatter={(value) => Number(value || 0).toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="square"
            />
            <Bar dataKey="SC" stackId="a" fill={COLORS.SC} radius={[0, 0, 0, 0]} barSize={barSize} />
            <Bar dataKey="ST" stackId="a" fill={COLORS.ST} radius={[0, 0, 0, 0]} barSize={barSize} />
            <Bar dataKey="EWS" stackId="a" fill={COLORS.EWS} radius={[4, 4, 0, 0]} barSize={barSize} />
            <Bar dataKey="Female" stackId="a" fill={COLORS.Female} radius={[4, 4, 0, 0]} barSize={barSize} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBarChart;
