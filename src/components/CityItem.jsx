import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'
import PropTypes from 'prop-types';
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));


function CityItem({ city, flagemojiToPNG }) {
    // console.log(city)
    const {currentCity, deleteCity} = useCities()
    const {cityName, emoji, date, id, position} = city
    // console.log(emoji)
    function handleClick (e) {
        e.preventDefault()
        deleteCity(id)
    }
    return (
        <li>
            <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}  className={`${styles.cityItem} 
            ${id === currentCity.id ? styles['cityItem--active'] : ""}`}>
                <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
            </Link>
        </li>
    )
}

CityItem.propTypes = {
    flagemojiToPNG: PropTypes.func,
    city: PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        position: PropTypes.object.isRequired,
        
    }).isRequired,
};

export default CityItem
