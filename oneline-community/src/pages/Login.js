import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logInDB } from '../redux/modules/user';
// style
import styled, { css } from 'styled-components';
import { flexBox } from '../shared/style';

// elements
import Grid from '../elements/Grid.js';
import Input from '../elements/Input.js';
import Button from '../elements/Button';

function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      username: Yup.string().required('아이디를 입력해주세요!!'),
      password: Yup.string().required('패스워드를 입력해주세요!'),
    }),

    onSubmit: (values) => {
      dispatch(logInDB(values));
    },
  });
  return (
    <React.Fragment>
      <LoginWrap>
        <Grid width="100%" margin="auto" padding="0" bgColor="blue">
          <Once>One line a day</Once>
          <LoginForm name="loginForm" onSubmit={formik.handleSubmit}>
            <Grid margin="auto">
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
                  padding="15px"
                  bgColor="white"
                  placeholder="아이디를 입력해주세요."
                  label="아이디"
                  id="username"
                  name="username"
                  type="username"
                  margin="5% auto"
                  changeEvent={formik.handleChange}
                  value={formik.values.username}
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
              </Grid>
              <Grid
                margin="0px 0px 0px -16px"
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
                  changeEvent={formik.handleChange}
                  value={formik.values.password}
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
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
              fontWeight="bold"
              color="black"
            >
              로그인
            </Button>
          </LoginForm>
        </Grid>
      </LoginWrap>
    </React.Fragment>
  );
}

const LoginWrap = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(${(props) => props.theme.palette.blue});
`;

const Once = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
`;

const LoginForm = styled.form`
  width: 100%;
  margin: 5% auto;
`;

export default Login;
