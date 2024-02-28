import React from 'react';
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid Email, please try again')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')

    }
);


const LoginForm = ({ login, fetching, onLogin }) => {
    
    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h1>Login Form</h1>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                }}
                >

                {({ isSubmitting }) => (
                    <Form className='border rounded m-3 p-4'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <Field className='form-control' id='email' type='email' name='email' placeholder='Camilolopez@gmail.com'/>

                        <ErrorMessage className='text-danger' component='div' name='email'/>


                        <label className='form-label' htmlFor='password'>Password</label>
                        <Field className='form-control' id='password' type='password' name='password' placeholder='Password'/>

                        <ErrorMessage className='text-danger' component='div' name='password'/>

                        <button className='my-2' type='submit'>Login</button>
                        { fetching ? <p>LOADING...</p> : null }
                    </Form>
                )}
            </Formik>
        </div>
    );
}

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm;
