import { useRef } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import Bttn from './Btn';
import DieSelect from './DieSelect';


const DiceCounter = ( { die, diceNumber, mod, roll, clear, diceRoll, chooseMod, chooseDie, chooseDNumber } ) => {

    const qnt = useRef(null);
    const cMod = useRef(null);

    const handleClearButton = () => {
        clear()
        qnt.current.value = 1;
        cMod.current.value = 0;
    }


    //suming the result of the last roll
    const lastRoll = []
    roll.forEach((e) => {
        if (e + mod >= 1 && e + mod <= die && die !== 20) {
            lastRoll.push(e + mod)
        } else if (die === 20 && e + mod >= 1 && e + mod <= 30) {
            lastRoll.push(e + mod)
        } else if (e + mod >= 1 && e + mod > die && die !== 20) {
            lastRoll.push(die)
        } else if (die === 20 && e + mod > 30) {
            lastRoll.push(30)
        } else lastRoll.push(1)
    })


  /*  const handleSelectDie = () => {
        qnt.current.value = 1;
        chooseDie()
    } */

    return (
        <div className='die col-10 d-flex flex-column align-items-center'>
            <div className='upper-log col-12'>
                <h5>{ diceNumber === 1 ? "Your Roll" : "Last Roll" } </h5>
                <h3>{ diceNumber }D{ Number(die) }: { Number(roll[roll.length -1]) } + { Number(mod) } = { lastRoll[lastRoll.length -1] } </h3>
            </div>  
            <div className='col-12 row justify-content-evenly'>
                <div className='col-sm-6 col-10 row ms-1 my-1 p-0'>
                    <input className='l col-4' type='number' ref={ qnt } defaultValue={ 1 } min={ 1 } onChange={ chooseDNumber }/>
                    <DieSelect className='col-4 p-0' change={ chooseDie} />
                    <input className='r col-4' type='number' ref={ cMod } defaultValue={ 0 } onChange={ chooseMod }/>
                </div>
                <div className='col-sm-6 col-10 row ms-2 my-1 p-0'>
                    <Bttn className='col-5 mx-1' type="submit" click={ diceRoll } text='Roll'/>
                    <button className='col-5 mx-1 secondary-bttn' type="submit" onClick={ handleClearButton }> Clear </button>
                </div>
            </div>
            <div className='under-log col-12'>
                <h5> { diceNumber !== 1 ? 'Results:' : 'Result:' } </h5>
                <div className='col-12'>
                    {die !== 20 && mod !== 0 ? lastRoll.map((result, i) =>  <span className='mb-2 fw-bold m-log' key={i}> { result } </span> ) : null}
                </div>
                <div className='row justify-content-center px-3'>{ roll.length > 0 ? roll.map((r, i) => <Die key={i} className='col-3 col-sm-2 d-border' die={ die } faces={ die === 20 || r === roll[roll.length -1] ? lastRoll[i] : r } fillcolor='withe'/>) : <p>¡wep!</p> }</div>
            </div>
        </div>
    );
}

DiceCounter.propTypes = {
    diceNumber: PropTypes.number.isRequired,
    chooseDNumber: PropTypes.func.isRequired,
    die: PropTypes.number.isRequired,
    chooseDie: PropTypes.func.isRequired,
    diceRoll: PropTypes.func.isRequired,
    mod: PropTypes.number.isRequired,
    chooseMod: PropTypes.func.isRequired,
    roll: PropTypes.any.isRequired,
    clear: PropTypes.func.isRequired,
};


export default DiceCounter;
