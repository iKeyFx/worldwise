import styles from './Button.module.css'
import PropTypes from 'prop-types';

function Button({children, type, onclick}) {
    return (
        <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onclick: PropTypes.func,
}


export default Button
