import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  Input,
  Button,
} from '../components/AuthLayout/StyledForm.styled';

import AuthLayout from '../components/AuthLayout/AuthLayout';

function SignInPage() {
  const SignUp = Yup.object().shape({
    name: Yup.string().min(2).max(20).required('Required'),
    email: Yup.string()
      .min(6, 'The email address must be at least 6 characters long!')
      .max(20, 'The email address is too long!')
      .email('Error email')
      .required('Required'),
    password: Yup.string()
      .min(6, 'The password address must be at least 6 characters long!')
      .max(20, 'The password length is too long!')
      .required('Required'),
  });

  return (
    <AuthLayout
      title="Sign up"
      paragraph="Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."
      bottomText="Already have an account?"
      linkName="Sign In"
      linkUrl="/login"
    >
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
        }}
        validationSchema={SignUp}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <label htmlFor="name">
              <Input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                className={`${'defoult'}
                ${touched.name && !errors.name && 'success'}
                ${touched.name && errors.name && 'error'}`}
              />
            </label>
            <label htmlFor="email">
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className={`${'defoult'}
                    ${touched.email && !errors.email && 'success'}
                    ${touched.email && errors.email && 'error'}`}
              />
            </label>
            <label htmlFor="password">
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="text"
                className={`${'defoult'}
                    ${touched.password && !errors.password && 'success'}
                    ${touched.password && errors.password && 'error'}`}
              />
            </label>
            <Button type="submit">Sign Up</Button>
          </StyledForm>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default SignInPage;