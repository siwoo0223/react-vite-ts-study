import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    username: null,
    name: null,
  }
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = {
        ...state.userInfo, // 기존 상태 유지
        ...action.payload, // 전달된 데이터만 덮어쓰기
      };
    },
    logout: (state) => {
      state.userInfo = initialState.userInfo; // 초기 상태로 되돌리기
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;