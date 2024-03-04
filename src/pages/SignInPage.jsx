import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledFormIn,
  Input,
  Button,
} from '../components/AuthLayout/StyledForm.styled';

import AuthLayout from 'components/AuthLayout/AuthLayout';

function SignInPage() {
  const SignIn = Yup.object().shape({
    email: Yup.string()
      .min(3, 'The email address must be at least 3 characters long!')
      .max(20, 'The email address is too long!')
      .email('Error email')
      .required('Required'),
    password: Yup.string().required('Required').min(6).max(20),
  });

  return (
    <AuthLayout
      title="Sign in"
      paragraph="Some text about Welcome! Please enter your credentials to login to the platform:"
      bottomText="Don’t have an account?"
      linkName="Sign up"
      linkUrl="/register"
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validation={SignIn}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <StyledFormIn>
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
            <Button type="submit">Sign In</Button>
          </StyledFormIn>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default SignInPage;
