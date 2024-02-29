import PropTypes from 'prop-types';


const Bttn = ({ className, click, text }) => {
    return (
        <button className={ className + ' bttn' } type="submit" onClick={ click }> { text } </button>
    );
};


Bttn.propTypes = {
    click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,

};


export default Bttn;
