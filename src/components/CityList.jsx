
import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from "./Spinner" 
import Message from "./Message"
import { useCities } from '../contexts/CitiesContext';

function CityList() {
    const {isLoading, cities, flagemojiToPNG} = useCities()
    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>
    
    return (
        <ul className={styles.cityList}>
            {cities.map(city => 
            <CityItem key={city.id} city={city} flagemojiToPNG={flagemojiToPNG}/>
            )}
        </ul>
    )
}
// CityList.propTypes = {
//     isLoading: PropTypes.bool.isRequired,
//     cities: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             // name: PropTypes.string.isRequired
//         })
//     ).isRequired,
// };

export default CityList
