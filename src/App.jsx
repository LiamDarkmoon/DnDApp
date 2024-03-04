import { useEffect } from 'react';
import { Route, Routes, Navigate, } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../src/styles/AppStyle.css';


import HomePage from './pages/home/HomePage';
import NotFound from './pages/404/NotFound';
import AboutPage from './pages/About/AboutPage';
import ProfilePage from './pages/Profile/ProfilePage';
import LandingPage from './pages/landing/LandingPage';
import NavBar from './components/container/NavBar';


function App() {


  let logged = sessionStorage.getItem('credential');
  
  useEffect(() => {
      let logged = sessionStorage.getItem('credential');
  }, [])

  return (
      <main className='App'>
        <NavBar/>
        <Routes>
          <Route index element= { <LandingPage/> } />
          <Route path='/home' element= { <HomePage/> } />
          <Route path='/profile' element={ logged ? <ProfilePage/> : <Navigate to='/login' replace/> } />
          <Route path='/about' element= { <AboutPage/> } />
          <Route path='*' element= { <NotFound/> } />
        </Routes>
      </main>
  );
}

export default App;
