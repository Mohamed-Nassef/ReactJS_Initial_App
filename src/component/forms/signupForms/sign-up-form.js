import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/

function onChange(value) {
    console.log("Captcha value:", value);
}

export const DefaultInput = ({ label, children }) => (
    <div className="form-group row">
        <label className="col-sm-2 col-form-label">{label}</label>
        <div className="col-sm-10">
            {children}
        </div>
    </div>
)

const SignUpForm = () => (
    <div>
        <h1>Sign Up Page</h1>
        <Formik
            initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
            validationSchema={Yup.object({
                name: Yup.string().max(15, 'Do not enter a huge name').min(3, 'Do not enter a tiny name').required('Name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string().matches(passwordPattern, 'Password is not elligible').required('Password is required'),
                passwordConfirm: Yup.string().oneOf([Yup.ref('password')], 'Please enter a similar password').required('Please confirm your password'),

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
                        <DefaultInput label="Name" >
                            <Field type="text" name="name" className="form-control" />
                            {touched.name && errors.name && <p className="form-text text-danger"> {errors.name} </p>}
                        </DefaultInput>
                        <DefaultInput label="Email">
                            <Field type="email" name="email" className="form-control" />
                            {touched.email && errors.email && <p className="form-text text-danger"> {errors.email} </p>}
                        </DefaultInput>
                        <DefaultInput label="Password">
                            <Field type="password" name="password" className="form-control" />
                            {touched.password && errors.password && <p className="form-text text-danger" > {errors.password}</p>}
                        </DefaultInput>
                        <DefaultInput label="Confirm Password">
                            <Field type="password" name="passwordConfirm" className="form-control" />
                            {touched.passwordConfirm && errors.passwordConfirm && <p className="form-text text-danger" >{errors.passwordConfirm}</p>}
                        </DefaultInput>
                        <ReCAPTCHA
                            sitekey="6Legp2EUAAAAAKZhVvBOIj-d6mbHGwrWBfPEoiMX"
                            onChange={onChange}
                        />
                        <button className="mt-4 btn btn-default" type="submit" disabled={!dirty || isSubmitting || Object.keys(errors).length}>  Submit  </button>
                    </form>
                )}
        </Formik>
    </div>
);
export default SignUpForm;