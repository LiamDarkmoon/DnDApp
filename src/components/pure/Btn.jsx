import React from 'react';
import PropTypes from 'prop-types';


const Btn = ({ click, text }) => {
    return (
        <button className='col-5 bttn mx-1' type="submit" onClick={ click }> { text } </button>
    );
};


Btn.propTypes = {
    click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired

};


export default Btn;
