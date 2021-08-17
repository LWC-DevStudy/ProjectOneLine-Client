// library
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { borderBox, flexBox, flexHoz, flexVer } from '../shared/style';
// elements
import { Grid, Button, Text } from '../elements';
import ContentsDiv from '../components/ContentsDiv';
import { getOnePostDB } from '../redux/modules/post';

function Detail(post) {
  const postId = post.match.params.postId;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOnePostDB(postId));
  }, []);

  const path = useLocation().pathname;
  //input 값
  const [contents, setContent] = React.useState();

  const $contents = (e) => {
    setContent(e.target.value);
  };

  return (
    <Grid width="100%" height="100vh">
      <Grid margin="auto">
        <Text fontSize="40px">수정 페이지</Text>
      </Grid>
      <Grid
        margin="100px auto 0"
        height="auto"
        addstyle={() => {
          return css`
            ${flexBox('center')}
          `;
        }}
      >
        <Textarea
          placeholder={'수정하실 내용을 입력하시거나 삭제하실 수 있습니다.'}
          onChange={$contents}
        />
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
        <Button margin="3px" padding="12px" fontWeight="bold" color="black">
          수정하기
        </Button>
        <Link to="/">
          <Button margin="3px" padding="12px" fontWeight="bold" color="black">
            삭제하기
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

export default Detail;
