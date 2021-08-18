// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

export const likeToggleDB = (postId) => {
    return function (dispatch, getState, {history}) {
        instance
          .post(`/post/like/${postId}`)
          .then((res) => {
            dispatch(likeToggle())
            history.replace('/');
            window.location.reload();
          })
          .catch((err) => {
            console.log(err)
          })
    }
}

export const getLikeDB = (postId) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/post/like/${postId}`)
      .then((res) => {
        dispatch(getLike(res.data.liked))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const unlikeToggleDB = (postId) => {
  return function (dispatch, getState, {history}) {
    instance
      .post(`/post/like/${postId}`)
      .then((res) => {
        dispatch(unlikeToggle())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const getAllLikeDB = (postId) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/post/like/${postId}`)
      .then((res) => {
        dispatch(getAllLike(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const initialState = {
  like_list: [],
}

const favorite = createSlice({
  name:"favorite",
  initialState,
  reducers:{
    likeToggle: (state, action) => {
      state.is_like = true
    },
    getLike: (state, action) => {
      state.is_like = action.payload
    },
    unlikeToggle: (state, action) => {
      state.is_like = false
    },
    getAllLike: (state, action) => {
      state.like_list = action.payload
    }
  }
})

export const { likeToggle, getLike, unlikeToggle, getAllLike } = favorite.actions;

export default favorite;