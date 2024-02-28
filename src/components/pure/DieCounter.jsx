import { useRef } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import Btn from './Btn';


const DiceCounter = ( { die, diceNumber, mod, roll, last, result, clear, diceRoll, chooseMod, chooseDie, chooseDNumber } ) => {

    const qnt = useRef(null);
    const cMod = useRef(null);
    const sel = useRef(null);

    const clearI = () => {
        qnt.current.value = 1;
        cMod.current.value = 0;
        sel.current.value = 20;
    }

    const resetValue = () => {
        qnt.current.value = 1;
    }

    return (
        <div className='die col-10 d-flex flex-column align-items-center'>

            <div className='upper-log col-12'>
                <h5>{ diceNumber === 1 ? "Your Roll" : "Last Roll" } </h5>
                <h3>{ diceNumber < 1 ? 1 : diceNumber }D{ die }: { last } + { mod } = { result >= 1 ? result : 1 } </h3>
            </div>
            
            <div className='col-12 row justify-content-evenly'>
                <div className='col-sm-6 col-10 row ms-1 my-1 p-0'>
                    <input className='l col-4' type='number' ref={ qnt } defaultValue={ 1 } min={ 1 } onChange={ chooseDNumber }/>
                    <select className='col-4' name="dice" id="dice" ref={ sel } defaultValue={"20"} onClick={ resetValue } onChange={ chooseDie } >
                        <option value="4">d4</option>
                        <option value="6">d6</option>
                        <option value="8">d8</option>
                        <option value="10">d10</option>
                        <option value="12">d12</option>
                        <option value="20">d20</option>
                    </select>
                    <input className='r col-4' type='number' ref={ cMod } defaultValue={ 0 } onChange={ chooseMod }/>
                </div>
                <div className='col-sm-6 col-8 row ms-2 my-1 p-0'>
                    <Btn type="submit" click={ diceRoll } text='Roll'/>
                    <button className='col-5 secondary-bttn mx-1' type="submit" onClick={() => { clearI(); clear();}}> Clear </button>
                </div>
            </div>

            <div className='under-log col-12'>
                <h5> Result: </h5>
                <div className='row justify-content-center px-3'>{ roll.length > 0 ? roll.map((r, i) => <Die key={i} className='col-3 col-sm-2 d-border' die={ die } faces={ r } />) : <p>¡wep!</p> }</div>
            </div>

        </div>
    );
};

DiceCounter.propTypes = {
    diceNumber: PropTypes.number.isRequired,
    chooseDNumber: PropTypes.func.isRequired,
    die: PropTypes.number.isRequired,
    chooseDie: PropTypes.func.isRequired,
    diceRoll: PropTypes.func.isRequired,
    mod: PropTypes.number.isRequired,
    chooseMod: PropTypes.func.isRequired,
    roll: PropTypes.any.isRequired,
    last: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired,
    clear: PropTypes.func.isRequired,
};


export default DiceCounter;
