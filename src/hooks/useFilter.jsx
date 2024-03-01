import PropTypes from 'prop-types';


const useFilter = ({ die, face }) => {

    
    let value = 1;

    if (die === 20 && face >= 1 && face <= 30) {
        value = face
        return value
    } else if (die === 20 && face >= 1 && face > 30) {
        value = 30
        return value
    }  else if (face >= 1 && face <= die) {
        value = face
        return value
    }  else if (face >= 1 && face > die) {
        value = die
        return value
    } else return value

};


useFilter.propTypes = {
    die: PropTypes.number.isRequired,
    face: PropTypes.number.isRequired
};


export default useFilter;
