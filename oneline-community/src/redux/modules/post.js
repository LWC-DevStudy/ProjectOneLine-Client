// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

export const addPostDB = (contents) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/post/create', { contents: contents })
      .then((res) => {
        console.log(res);
        dispatch(addPost({ contents: contents }));
        window.alert('글 작성이 완료되었습니다!');
        // history.push('/');
      })
      .catch((err) => {
        window.alert('글 작성에 오류가 있습니다!');
        console.log(err);
      });
  };
};

const initialState = {
  list: [],
};

// 리덕스
const post = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action) {
      const contents = action.payload.contents;
      state.list.push(contents);
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },

    editPost: (state, action) => {
      const editList = state.list.map((post) => {
        if (post.postId === action.postId) {
          return action.post;
        }
        return post;
      });
      return { ...state, list: editList };
    },

    deletePost: (state, action) => {
      const deleteList = state.list.filter(
        (post) => post.postId !== action.postId
      );

      return { ...state, list: deleteList };
    },
  },
});

export const { addPost, getPost, editPost, deletePost } = post.actions;
export default post;
