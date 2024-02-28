import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        role: ROLES.USER,
        confirm: '',
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(8, 'username must have at least 8 characters')
                .max(16, 'Max 16 characters')
                .required('username is required please enter one'),
            email: Yup.string()
                .email('Invalid email please try again')
                .required('Please enter an email'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You mas select a role')
                .required('Required'),
            password: Yup.string()
                .required('Please enter a password')
                .min(8, 'Password is too short')
                .max(16, 'Max 16 characters'),
            confirm: Yup.string()
                .when('password',  {
                    is: value => (value && value.length > 0 ? true : false),
                    then: () => Yup.string().oneOf(
                        [Yup.ref('password')],
                        '¡Passwords must match!'
                    ),
                    otherwise: () => Yup.string().required('Please confirm Password')
                })
        }
    )

    const submit = (values) => {
        alert('Register User')
    }

    return (
        <div>
            <Formik
                initialValues = { initialValues }
                validationSchema = { registerSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credential', values)
                }}
            >
            {({ values,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form className='border rounded m-3 p-4'>
                        <h1 className='mb-4'>Register Form</h1>
                        <div className='form-floating my-2'>
                            <Field className='form-control' id='username' type='text' name='username' placeholder='LiamDarkmoon' />
                            <label htmlFor='username'>Username</label>
                            <ErrorMessage className='text-danger' component='div' name='username'/>
                        </div>
                        
                        <div className='form-floating my-2'>
                            <Field className='form-control' id='email' type='email' name='email' placeholder='LiamDarkmoon@gmail.com' />
                            <label htmlFor='email'>Email</label>
                            <ErrorMessage className='text-danger' component='div' name='email'/>
                        </div>


                        <div className='form-floating my-2'>
                            <Field className='form-control' id='password' type='password' name='password' placeholder='Password Here' />
                            <label htmlFor='password'>Password</label>
                            <ErrorMessage className='text-danger' component='div' name='password'/>
                        </div>


                        <div className='form-floating my-2'>
                            <Field className='form-control' id='confirm' type='password' name='confirm' placeholder='Confirm Password' />
                            <label htmlFor='confirm'>Confirm Password</label>
                            <ErrorMessage className='text-danger' component='div' name='confirm'/>
                        </div>

                        <button className='my-3' type='submit'>Register Account</button>
                        { isSubmitting ? (<h3>Creating your account</h3>) : null }
                    </Form>
                )
            }

            </Formik>
            
        </div>
    );
}

export default RegisterFormik;
