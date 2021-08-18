// library
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// redux
import { addPostDB } from '../redux/modules/post';

// style
import { flexBox } from '../shared/style';
// elements
import { Grid, Button, Text } from '../elements';

function Write() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user_info.username);

  //input 값
  const [contents, setContent] = React.useState();

  const $contents = (e) => {
    setContent(e.target.value);
  };

  const writeBtn = () => {
    dispatch(addPostDB(contents, username));
  };

  return (
    <Grid width="100%" height="100vh">
      <Grid margin="auto">
        <Text fontSize="40px">작성 페이지</Text>
      </Grid>
      <Grid margin="auto"></Grid>
      <Grid
        margin="100px auto 0"
        height="auto"
        addstyle={() => {
          return css`
            ${flexBox('center')}
          `;
        }}
      >
        <Textarea onChange={$contents} />
      </Grid>

      <Grid
        margin="auto"
        width="205px"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Button
          margin="3px"
          padding="12px"
          fontWeight="bold"
          color="black"
          clickEvent={writeBtn}
        >
          작성하기
        </Button>
        <Link to="./">
          <Button margin="3px" padding="12px" fontWeight="bold" color="black">
            취소하기
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 21px;
  margin: 2% auto 5%;
  outline: none;
`;

export default Write;
