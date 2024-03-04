import DiceTray from '../../components/container/DiceTray'
import Bttn from '../../components/pure/Btn';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate()

    const goAbout = () => {
        navigate('/about')
    }

    return (
        <div className='pg container-fluid d-flex flex-column align-items-center justify-content-evenly'>
            <div className='lnd-pg-content row py-5 align-items-center justify-content-between'>
                <div className='pg-hl col-12 col-sm-5 text-center'>
                    <h1 className='pg-hl-tittle'> The playground to make your fantasy real </h1>
                    <div className='separator'></div>
                    <h4 className='fw-regular'> Roll your dice with a click and ready your character for the adventure </h4>
                    <Bttn className='col my-md-5 cta-bttn' text='Get Started' click={ goAbout }/>
                </div>
                <DiceTray/>
            </div>
        </div>
    );
}

export default LandingPage;