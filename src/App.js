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
import LoginPage from './pages/auth/LoginPage';
import LandingPage from './pages/landing/LandingPage';


function AppRoutingOne() {


  let logged = sessionStorage.getItem('credential');
  
  useEffect(() => {
      let logged = sessionStorage.getItem('credential');
  }, [])

  return (
      <main className='App'>
        <Routes>
          <Route index element= { <LandingPage/> } />
          <Route path='/home' element= { <HomePage/> } />
          <Route path='/login' element= { logged ? <HomePage/> : <LoginPage/> } />
          <Route path='/profile' element={ logged ? <ProfilePage/> : <Navigate to='/login' replace/> } />
          <Route path='/about' element= { <AboutPage/> } />
          <Route path='*' element= { <NotFound/> } />
        </Routes>
      </main>
  );
}

export default AppRoutingOne;
