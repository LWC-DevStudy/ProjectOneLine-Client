//import
import instance from '../../shared/axios.js';
import { createSlice } from '@reduxjs/toolkit';

//token
import { setToken, removeToken } from '../../shared/token.js';

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
      const message = sigunup.data.message;
      if (message !== 'success') {
        window.alert(signup.data.message);
        return;
      }
      history.replace('/login');
      window.alert('회원가입이 완료되었습니다!');
    } catch (err) {
      window.alert(err);
    }
  };
