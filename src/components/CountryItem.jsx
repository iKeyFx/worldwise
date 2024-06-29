import styles from "./CountryItem.module.css";
import PropTypes from 'prop-types';



function CountryItem({ country, flagemojiToPNG }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
  flagemojiToPNG:PropTypes.func,
}
export default CountryItem;
