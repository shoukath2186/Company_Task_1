import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: JSON.parse(localStorage.getItem('userData')) || null, 
};

const UserStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.data = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload)); 
    },
    removeUserData(state) {
      state.data = null;
      localStorage.removeItem('userData'); 
    },
  },
});

export const { setUserData, removeUserData } = UserStore.actions;
export default UserStore.reducer;

