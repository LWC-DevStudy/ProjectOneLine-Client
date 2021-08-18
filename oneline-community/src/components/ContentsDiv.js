// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { history } from '../redux/configStore';

import { useDispatch, useSelector } from 'react-redux';
// STYLE
import { flexBox } from '../shared/style';
import FavoriteIcon from '@material-ui/icons/Favorite';
//ELEMENTS
import { Grid, Text } from '../elements/index';
import { likeToggleDB } from '../redux/modules/like';

function ContentsDiv(post) {
  const dispatch = useDispatch();
  const postId = post.postId;
  const userLike = post.userLike;
  const myPost = useSelector((state) => state.user.user_info.username);
  const updateLikes = () => {
    dispatch(likeToggleDB(postId));
  };
  return (
    <Grid
      bgColor="yellow"
      height="auto"
      padding="10px 0 0 30px"
      margin="30px 0 0 0"
      border="2px solid #FFD32A"
      addstyle={() => {
        return css`
          ${flexBox('space-between')}
          position: relative;
          top: 170px;
          cursor: pointer;
        `;
      }}
    >
      <Grid
        padding="4px"
        margin="4px"
        clickEvent={() => {
          if (post.username === myPost) {
            history.push(`/detail/${post.postId}`);
          }
        }}
      >
        <Text width="400px" color="black" fontWeight="bold" fontSize="20px">
          {post.contents}
        </Text>
      </Grid>

      <Grid
        addstyle={() => {
          return css`
            position: relative;
            left: 40px;
            bottom: 20px;
            z-index: 1000;
          `;
        }}
      >
        <FavoriteIcon
          onClick={updateLikes}
          style={{
            color: userLike ? 'red' : 'gray',
            fontSize: '20px',
            position: 'relative',
            top: '3px',
            marginRight: '5px',
          }}
        ></FavoriteIcon>
        {post.likeCnt}
      </Grid>
    </Grid>
  );
}

export default ContentsDiv;
