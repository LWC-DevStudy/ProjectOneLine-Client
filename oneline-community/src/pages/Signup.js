import React from 'react';
// style
import styled, { css } from 'styled-components';
import { flexBox } from '../shared/style';

// elements
import Grid from '../elements/Grid.js';
import Input from '../elements/Input.js';
import Button from '../elements/Button';

function Signup() {
  return (
    <React.Fragment>
      <SignWrap>
        <Grid width="100%" margin="auto" padding="0" bgColor="blue">
          <Once>One line a day</Once>
          <SignForm>
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
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
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
                  addstyle={() => {
                    return css`
                      display: block;
                    `;
                  }}
                />
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
                  placeholder="비밀번호를 입력해주세요."
                  id="password"
                  name="password"
                  type="password"
                  margin="auto"
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
            >
              로그인
            </Button>
          </SignForm>
        </Grid>
      </SignWrap>
    </React.Fragment>
  );
}

const SignWrap = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(${(props) => props.theme.palette.blue});
`;

const Once = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
`;

const SignForm = styled.form`
  width: 100%;
  margin: 15% auto;
`;
export default Signup;
