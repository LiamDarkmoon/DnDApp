import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';


const useClasses = ({ className }) => {

    let classN = className;
    let animation = ' rot-d';

    const [rolling, setRolling] = useState(false);
    const [classes, setClasses] = useState(classN);

    const dRolling = () => {
        setRolling(true);
        if (rolling) {
            setClasses(classN + animation);
            setRolling(false);
        }
        else setClasses(classN);
        console.log(classes);
      }

    return dRolling;
};




export default useClasses;
