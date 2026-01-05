import './SummaryCards.css';
import { formatNumber } from '../../utils/dataUtils';

const SummaryCards = ({ stats }) => {
  const cards = [
    {
      title: 'Total Students',
      value: formatNumber(stats.totalStudents),
      iconClass: 'fa-solid fa-user-graduate',
      color: '#4361ee'
    },
    {
      title: 'States',
      value: stats.totalStates,
      iconClass: 'fa-solid fa-map',
      color: '#10b981'
    },
    {
      title: 'Districts',
      value: stats.totalDistricts,
      iconClass: 'fa-solid fa-location-dot',
      color: '#f59e0b'
    },
    {
      title: 'Courses',
      value: stats.totalCourses,
      iconClass: 'fa-solid fa-book',
      color: '#7209b7'
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      iconClass: 'fa-solid fa-chart-pie',
      color: '#f72585'
    }
  ];

  return (
    <div className="summary-cards">
      {cards.map((card, index) => (
        <div key={index} className="summary-card" style={{ borderTopColor: card.color }}>
          <div className="card-icon" style={{ backgroundColor: `${card.color}15` }}>
            <i className={card.iconClass} aria-hidden="true" style={{ color: card.color }} />
          </div>
          <div className="card-content">
            <h3 className="card-value">{card.value}</h3>
            <p className="card-title">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
