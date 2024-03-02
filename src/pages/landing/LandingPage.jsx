import NavBar from '../../components/container/NavBar'
import DiceTray from '../../components/container/DiceTray'
import Bttn from '../../components/pure/Btn';

const LandingPage = () => {

    return (
        <div className='lnd pg container-fluid d-flex flex-column align-items-center justify-content-evenly'>
            <NavBar/>
            <div className='lnd-pg-content row py-5 align-items-center justify-content-between'>
                <div className='lnd-hl col-12 col-sm-5 text-center'>
                    <h1 className='lnd-hl-tittle'> The playground to make your fantasy real </h1>
                    <div className='separator'></div>
                    <h4 className='fw-regular'> Roll your dice with a click and ready your character for the adventure </h4>
                    <Bttn className='col my-md-5 cta-bttn' text='Get Started' click={() => alert('pss pss come later to check or news')}/>
                </div>
                <DiceTray/>
            </div>
        </div>
    );
}

export default LandingPage;