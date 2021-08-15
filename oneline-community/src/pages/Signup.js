import React from 'react';
// style
import styled, { css } from 'styled-components';
import { flexBox } from '../shared/style';

// elements
import Grid from '../elements/Grid.js';
import Input from '../elements/Input.js';
import Button from '../elements/Button';

//package
import * as Yup from 'yup';
import { useFormik } from 'formik';

//redux
import { useDispatch } from 'react-redux';
import { signUpDB } from '../redux/modules/user';

function Signup() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordCheck: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, '아이디는 4자리 이상이여야 합니다.')
        .required('아이디를 입력해주세요.'),
      password: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 입력해주세요.'),
      passwordCheck: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 재입력해주세요')
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    }),
    onSubmit: (values) => {
      dispatch(signUpDB(values));
    },
  });
  return (
    <React.Fragment>
      <SignUpWrap>
        <Grid width="100%" margin="auto" padding="0" bgColor="blue">
          <Once>One line a day</Once>
          <SignUpForm onSubmit={formik.handleSubmit}>
            <Grid margin="auto">
              <Grid
                margin="20px 0px 0px -8px"
                addstyle={() => {
                  return css`
                    ${flexBox('space-between', 'space-between')}
                  `;
                }}
              >
                <Input
                  width="80%"
                  padding="15px"
                  bgColor="white"
                  placeholder="아이디를 입력해주세요."
                  label="아이디"
                  id="username"
                  name="username"
                  type="username"
                  margin="5% auto"
                  value={formik.values.username}
                  changeEvent={formik.handleChange}
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
                {formik.errors.username && formik.touched.username && (
                  <p>{formik.errors.username}</p>
                )}
              </Grid>
              <Grid
                margin="0px 0px 0px -12px"
                addstyle={() => {
                  return css`
                    ${flexBox('space-between', 'space-between')}
                  `;
                }}
              >
                <Input
                  width="80%"
                  bgColor="white"
                  padding="15px"
                  label="비밀번호"
                  placeholder="비밀번호를 입력해주세요."
                  id="password"
                  name="password"
                  type="password"
                  margin="auto"
                  value={formik.values.password}
                  changeEvent={formik.handleChange}
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
                {formik.errors.password && formik.touched.password && (
                  <p>{formik.errors.password}</p>
                )}
              </Grid>
              <Grid
                margin="23px 0px 0px -20px"
                addstyle={() => {
                  return css`
                    ${flexBox('space-between', 'space-between')}
                  `;
                }}
              >
                <Input
                  width="80%"
                  bgColor="white"
                  padding="15px"
                  label="비밀번호 확인"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  id="passwordCheck"
                  name="passwordCheck"
                  type="password"
                  margin="auto"
                  value={formik.values.passwordCheck}
                  changeEvent={formik.handleChange}
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
                {formik.errors.passwordCheck &&
                  formik.touched.passwordCheck && (
                    <p>{formik.errors.passwordCheck}</p>
                  )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              width="100px"
              padding="12px"
              margin="3% auto"
              addstyle={() => {
                return css`
                  display: block;
                `;
              }}
            >
              회원가입
            </Button>
          </SignUpForm>
        </Grid>
      </SignUpWrap>
    </React.Fragment>
  );
}

const SignUpWrap = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(${(props) => props.theme.palette.blue});
`;

const Once = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
`;

const SignUpForm = styled.form`
  width: 100%;
  margin: 5% auto;
`;
export default Signup;
