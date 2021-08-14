// library
import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Link,useLocation } from 'react-router-dom';
import { removeToken } from '../shared/token';
import { useDispatch } from 'react-redux';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Text } from '../elements/index';

function Header() {
    const path = useLocation().pathname;
  // const dispatch = useDispatch();
  // const logOut = () => {
  //   removeToken();
  //   window.location.reload();
  // };
  // const is_login = useSelector((state) => state.user.is_login);

  // React.useEffect(() => {
  //   dispatch(LogInCheck());
  // });
    return (
      <HeaderStyle>
      <Grid
        width="100%"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Grid>
          <Link to="/">
            <Text margin="0" fontSize="44px" fontWeight="bold">
              Image
            </Text>
          </Link>
        </Grid>

        <Grid
          width="165px"
          addstyle={() => {
            return css`
              ${flexBox('space-between')}
            `;
          }}
        >
          <Link to={path === '/' ? '/login' : '/'}>
            <Button width="100%">{path === '/' ? '로그인' : '취소하기'}</Button>
          </Link>
          <Link to={path === '/' ? '/signup' : '/signup'}>
            <Button>{path === '/' ? '회원가입' : '회원가입'}</Button>
          </Link>
        </Grid>
      </Grid>
    </HeaderStyle>
    );
};


const HeaderStyle = styled.header`
  background: rgb(${(props) => props.theme.palette.blue});
  width: 100%;
  ${borderBox(0, '20px')};
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  a {
    text-decoration: none;
  }
`;

export default Header
 
