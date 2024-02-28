import { useState } from 'react';
import { randomDieFace } from '../../models/logics';
import Modal from 'react-bootstrap/Modal';
import DiceCounter from '../pure/DieCounter';
import { D20 }  from '../pure/Dice';


export const DiceTray = () => {

    // State //
    const [show, setShow] = useState(false)
    const [dieNumber, setDieNumber] = useState(1);
    const [die, setDie] = useState(20);
    const [roll, setRoll] = useState([1]);
    const [mod, setMod] = useState(0);
    
    let last = roll[roll.length - 1];
    const lastResult = last + mod >= 1 ? last + mod : 1;


    // Roll Dice //
    const rollDice = () => {

        let multRand = [];

        for (let i = 1; i <= dieNumber; i++) {
            multRand.push(randomDieFace( die ));
            setRoll([...multRand])
        }
    };


    // inputHandler functions //
    const chooseDie = (e) => {
        setDie(Number(e.target.value));
        setRoll([1]);
        setDieNumber(1);
    };

    const chooseMod = (e) => {
        setMod(Number(e.target.value));
    };

    const chooseDNumber = (e) => {
        setDieNumber(Number(e.target.value));
    };


    // Clear Button //
    const clearTray = () => {
        setRoll([1]);
        setMod(0);
        setDie(20);
        setDieNumber(1);
        
    };

    // Show DiceTray //
    const showM = () => setShow(true);
    const closeM = () => setShow(false);
    
  return (
    <div className='col'>
        <button className='bttn cta-bttn' onClick={ showM }>
            Try the DiceTray
        </button>
        <Modal show={ show } centered onHide={ closeM } contentClassName='dicetray'>
            <div className='col dicetray text-center py-3'>
                <h2 className="tray-ttl fw-bold col-sm-5 col-9"> Dice tray: <D20 className='col-sm-3 col-2 my-2' faces={ lastResult <= 30 ? lastResult : 30 }/></h2>
                <DiceCounter 
                    diceNumber={ dieNumber } 
                    die={ die } 
                    roll={ roll }
                    last={ last }
                    mod={ mod }
                    result={ lastResult }
                    diceRoll={ rollDice }
                    clear={ clearTray } 
                    chooseMod={ chooseMod } 
                    chooseDie={ chooseDie } 
                    chooseDNumber={ chooseDNumber }
                    />
            </div>
        </Modal>
    </div>
  )
}


export default DiceTray