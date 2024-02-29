import NavBar from '../../components/container/NavBar'
import DiceTray from '../../components/container/DiceTray'

const LandingPage = () => {

    return (
        <div className='lnd pg container-fluid d-flex flex-column align-items-center justify-content-evenly'>
            <NavBar/>
            <div className='row py-5 align-items-center justify-content-between'>
                <div className='col col-sm-5 text-center'>
                    <h1 className='lnd-hl'> The playground to make your fantasy real </h1>
                    <div className='separator'></div>
                    <h4 className='fw-regular'> Roll your dice with a click and ready your character for the adventure </h4>
                </div>
                <DiceTray/>
            </div>
        </div>
    );
}

export default LandingPage;