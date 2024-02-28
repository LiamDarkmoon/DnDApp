import React, { useState } from 'react';
import PropTypes from 'prop-types';


const useShowComponent = () => {

    const [show, setShow] = useState(false)
    
    const showComponent = () => setShow(!show)

    return showComponent

};


useShowComponent.propTypes = {

};


export default useShowComponent;
