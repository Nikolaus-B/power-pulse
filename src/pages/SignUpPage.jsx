import { useDispatch } from 'react-redux';
import React from 'react';
import { fetchUserRegister } from '../redux/user/operations';
import { Formik, ErrorMessage } from 'formik';
import pulseIcon from '../img/pulse-icons.svg';
import * as Yup from 'yup';
import { useState } from 'react';

import {
  StyledForm,
  Input,
  Button,
  ErrorText,
  Contsform,
  MessageInput,
  SvgIcon,
  SuccessText,
  SuccessSvg,
  Icons,
} from '../components/FormStyle/StyledForm.styled';

import AuthLayout from '../components/AuthLayout/AuthLayout';

function SignInPage() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const SignUp = Yup.object().shape({
    name: Yup.string().min(2).max(20).required('Required'),
    email: Yup.string()
      .min(6, 'The email address must be at least 6 characters long!')
      .max(40, 'The email address is too long!')
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
        onSubmit={values => {
          dispatch(fetchUserRegister(values));
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <Contsform>
              <label htmlFor="name">
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  autoComplete="off"
                  className={`
                    ${errors.name && touched.name ? 'error' : ''}
                    ${touched.name && !errors.name ? 'success' : ''}`}
                />
                {errors.name && touched.name && (
                  <MessageInput>
                    <SvgIcon>
                      <use href={`${pulseIcon}#checkbox`} />
                    </SvgIcon>
                    <ErrorMessage component={ErrorText} name="name" />
                  </MessageInput>
                )}
                {!errors.name && touched.name && (
                  <MessageInput>
                    <SuccessSvg>
                      <use href={`${pulseIcon}#checkbox`} />
                    </SuccessSvg>
                    <SuccessText>Success name</SuccessText>
                  </MessageInput>
                )}
              </label>
              <label htmlFor="email">
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  autoComplete="off"
                  className={`
                    ${errors.email && touched.email ? 'error' : ''}
                    ${touched.email && !errors.email ? 'success' : ''}`}
                />

                {errors.email && touched.email && (
                  <MessageInput>
                    <SvgIcon>
                      <use href={pulseIcon + '#checkbox'}></use>
                    </SvgIcon>
                    <ErrorMessage component={ErrorText} name="email" />
                  </MessageInput>
                )}
                {!errors.email && touched.email && (
                  <MessageInput>
                    <SuccessSvg>
                      <use href={`${pulseIcon}#checkbox`} />
                    </SuccessSvg>
                    <SuccessText>Success email</SuccessText>
                  </MessageInput>
                )}
              </label>
              <label htmlFor="password">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={`${
                    errors.password && touched.password ? 'error' : ''
                  }
                                    ${
                                      touched.password && !errors.password
                                        ? 'success'
                                        : ''
                                    }`}
                />
                {errors.password && touched.password && (
                  <MessageInput>
                    <SvgIcon>
                      <use href={`${pulseIcon}#checkbox`} />
                    </SvgIcon>
                    <ErrorMessage component={ErrorText} name="password" />
                  </MessageInput>
                )}
                {!errors.password && touched.password && (
                  <MessageInput>
                    <SuccessSvg>
                      <use href={`${pulseIcon}#checkbox`} />
                    </SuccessSvg>
                    <SuccessText>Success password</SuccessText>
                  </MessageInput>
                )}
                {!showPassword && (
                  <Icons onClick={() => setShowPassword(!showPassword)}>
                    <use href={pulseIcon + '#icon-eye'}></use>
                  </Icons>
                )}
                {showPassword && (
                  <Icons onClick={() => setShowPassword(!showPassword)}>
                    <use href={pulseIcon + '#icon-eye-off'}></use>
                  </Icons>
                )}
              </label>
            </Contsform>
            <Button type="submit">Sign Up</Button>
          </StyledForm>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default SignInPage;
