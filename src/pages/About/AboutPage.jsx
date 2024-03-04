import { Link } from 'react-router-dom';
import Bttn from '../../components/pure/Btn';
import Card from '../../components/pure/Card';

const AboutPage = () => {

    console.log('we are in:', location.pathname)

    return (
        <div className='pg about container-fluid row align-items-center justify-content-evenly'>
            <div className='about-card pg-hl col-sm-8 d-flex flex-column align-items-center justify-content-evenly'>
                <h1 className='pg-hl-tittle'>Hi im Nahuel Lopez</h1>
                <div className='separator col-8'></div>
                <h4 className='my-3'> a big fan of TTRPGs </h4> 
                <p className='fw-bold mb-3 col-11'>
                    With this humble app im trying to reach to every TTRPGs fan like me that loves to have their needs at hands reach,
                    hope you enjoy this as much as i do.
                </p>
                <div className='separator col-11'></div>
            </div>
            <Card className='col-8 col-sm-3 p-0 pg-hl' 
                  title='Archdruid of the moon' 
                  text='"Calm as Powerfull, wise as old. The Archdruid watch over the glades life like a father would for his children"'
                  img='./Archdruid.png'
                  />
            <div className='about-card col-12 d-flex flex-column align-items-center justify-content-evenly mb-4'>
                <h2> About this Project </h2>
                <div className='separator col-8'></div>
                <p className='my-3 col-8'>
                    This project begins with a little idea, puting all the D&D content posible (including 3rd party) in one place, and so create D&D content meanwhile building couple of functionalities from a fan perspective
                    trying to be as loyal and objective as i can, <span className='fw-bolder d-inline'> this is a one man proyect </span>. Im open to every idea or feedback.
                </p>
                <Bttn className='mt-3' click={ ()=> console.log('mailme')} text='Contact me'/>
            </div>
        </div>
    );
}

export default AboutPage;
