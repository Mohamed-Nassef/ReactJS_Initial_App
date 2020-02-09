import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

export const DefaultInput = ({ label, children }) => (
    <div className="form-group row">
        <label className="col-sm-2 col-form-label">{label}</label>
        <div className="col-sm-10">
            {children}
        </div>
    </div>


)

const LogInForm = () => (
    <div>
        <h1>LogIn Bage</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: (Yup.string().oneOf(['mo@gmail', 'es@gmail'], 'Please enter a valid email')).required('Email is required'),
                password: (Yup.string().oneOf(['123'], 'Please enter a valid password')).required('Password is required'),

            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                errors,
                touched,
                handleSubmit,
                isSubmitting,
                dirty,
            }) => (
                    <form onSubmit={handleSubmit}>
                        <DefaultInput label="Email">
                            <Field type="email" name="email" className="form-control" />
                            {touched.email && errors.email && <p className="form-text text-danger"> {errors.email} </p>}
                        </DefaultInput>
                        <DefaultInput label="Password">
                            <Field type="password" name="password" className="form-control" />
                            {touched.password && errors.password && <p className="form-text text-danger" > {errors.password}</p>}
                        </DefaultInput>
                        <button className="mt-4 btn btn-default" type="submit" disabled={!dirty || isSubmitting || Object.keys(errors).length}>  LogIn  </button>
                    </form>
                )}
        </Formik>
    </div>
);
export default LogInForm;