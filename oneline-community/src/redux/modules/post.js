// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

export const addPostDB = (post) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/post/create', { contents: post, username: post.username })
      .then((res) => {
        console.log(res);
        dispatch(addPost(post));
        window.alert('글 작성이 완료되었습니다!');
        history.push('/');
      })
      .catch((err) => {
        window.alert('글 작성에 오류가 있습니다!');
        console.log(err);
        console.log(post.username);
        console.log(post);
      });
  };
};

export const getOnePostDB = (postId = '') => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/post/${postId}`)
      .then((res) => {
        console.log(res);
        let detailPage = res.data;
        dispatch(getOnePost(detailPage));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// 전체 리스트 조회
export const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get('/post')
      .then((res) => {
        let post_list = res.data;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        window.alert('페이지 오류!');
        console.log(err);
      });
  };
};

// 게시물 수정
export const editPostDB = (postId, contents) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`post/edit/${postId}`, { postId: postId, contents: contents })
      .then((res) => {
        history.replace('/');
        window.location.reload();
        window.alert('게시글 수정 완료');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/post/delete/${postId}`)
      .then((res) => {
        dispatch(deletePost(postId));
        history.replace('/');
        window.location.reload();
        window.alert('게시글 삭제 완료');
      })
      .catch((err) => {
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
      const username = action.payload.username;
      console.log(action.payload);
      state.list.push(contents, username);
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },

    getOnePost: (state, action) => {
      state.line = action.payload;
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

export const { addPost, getPost, editPost, deletePost, getOnePost } =
  post.actions;
export default post;
