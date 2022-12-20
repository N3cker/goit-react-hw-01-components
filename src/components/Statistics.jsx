import PropTypes from 'prop-types';
import css from '../css/components/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.statList}>
        {stats.map((stat, i) => (
          <li
            className={css.statListItem}
            style={{ backgroundColor: getRandomColor() }}
            key={i}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  tittle: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
