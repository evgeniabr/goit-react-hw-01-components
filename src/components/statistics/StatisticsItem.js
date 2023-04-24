import propTypes from 'prop-types';

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
