import PropTypes from 'prop-types';
import Section from '../Section/Section';

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics" title={title}>
      <ul className="statList">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
