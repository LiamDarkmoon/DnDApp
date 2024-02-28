import React, { useState } from 'react';
import PropTypes from 'prop-types';
 
 
 const useRandomNumber = ( maxValue ) => {

    // State for random number //
    const [randomValue, setRandomValue] = useState()
    
    // random generated number //
    const min = 1;
    const max = maxValue;
    const randomNumber = (min, max) => {
       return Math.floor(Math.random()
             * (max - min + 1)) + min;
     };

     const getRandom = () => setRandomValue(randomNumber(maxValue))

     getRandom()

    return  randomValue
 };
 
 
 useRandomNumber.propTypes = {
   max: PropTypes.number.isRequired
 };
 
 
 export default useRandomNumber;
 