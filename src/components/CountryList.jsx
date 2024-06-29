import PropTypes from 'prop-types';
import CountryItem from './CountryItem'
import styles from './countryList.module.css'
import Spinner from "./Spinner" 
import Message from "./Message"
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
    const {isLoading, cities, flagemojiToPNG} = useCities()
    if(isLoading) return <Spinner />

    const countries = cities.reduce((arr, city) => {
        if(!arr.map(el => el.country).includes(city.country))  { 
            return [...arr, {country: city.country, emoji: city.emoji}]
    }  else {
        return arr
    }
    }, [])

    if(!countries.length) return <Message message="Add your first country by clicking on a city on the map"/>
    return (
        <ul className={styles.countryList}>
            {countries.map(country => 
            <CountryItem key={country.country} country={country} flagemojiToPNG={flagemojiToPNG}/>
            )}
        </ul>
    )
}
// CountryList.propTypes = {
//     isLoading: PropTypes.bool.isRequired,
//     cities: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             // name: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default CountryList
