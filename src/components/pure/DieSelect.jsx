import PropTypes from 'prop-types';
import Select from 'react-select';

const diceOptions = [
    { value: '4', label: 'D4' },
    { value: '6', label: 'D6' },
    { value: '8', label: 'D8' },
    { value: '10', label: 'D10' },
    { value: '12', label: 'D12' },
    { value: '20', label: 'D20' }
  ]

const DieSelect = ({ change, className }) => {


    return (
        <Select
            options={ diceOptions } 
            onChange={ change } 
            className={ className +' dice-select' } 
            defaultValue={ diceOptions[5] }
            isSearchable={ false }
            unstyled
            classNames={{ 
                option: ()=> 'dice-option',
                dropdownIndicator: ()=> 'nn',
                menu: ()=> 'dice-menu'
            }}
        />
    );
}


DieSelect.propTypes = {
    change: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};


export default DieSelect;
