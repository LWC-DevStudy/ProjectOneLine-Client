//import
import instance from '../../shared/axios.js';
import { createSlice } from '@reduxjs/toolkit';

//token
import { setToken, removeToken } from '../../shared/token.js';

const initialState = {
  user_info: { username: '정진우' },
  is_login: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user_info.username = action.payload.username;
      setToken('token', action.payload.token);
      state.is_login = true;
    },
  },
});

//회원가입
export const signUpDB =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    const username = user_info.username;
    const password = user_info.password;
    const passwordCheck = user_info.passwordCheck;
    try {
      const signup = await instance.post('/register', {
        username,
        password,
        passwordCheck,
      });
      history.replace('/login');
      window.alert('회원가입이 완료되었습니다!');
    } catch (err) {
      window.alert(err);
    }
  };

//로그인
export const logInDB =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    const username = user_info.username;
    const password = user_info.password;
    try {
      const login = await instance.post('/login', {
        username,
        password,
      });
      const login_info = {
        token: login.data.token,
        username: login.data.username,
      };
      dispatch(SetUser(login_info));
      history.replace('/');
      window.alert('로그인 완료!');
    } catch (err) {
      console.log(err);
    }
  };

export const { SetUser } = user.actions;

export default user;
