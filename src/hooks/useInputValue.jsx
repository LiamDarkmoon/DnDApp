import React, { useState } from 'react';
import PropTypes from 'prop-types';


const useInputValue = (event) => {

    const [value, setValue] = useState('')

    const getValue = (event) => {
        setValue(Number(event.target.value));
        console.log(value)
    }

    getValue(event)

    return (
        value
    );
};


useInputValue.propTypes = {
    event: PropTypes.any.isRequired
};


export default useInputValue;
