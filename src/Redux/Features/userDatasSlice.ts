import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Stores/store';
import { ICurrentUser } from '@/Interfaces/GlobalInterfaces';

const initialState = {
  userData: {} as ICurrentUser,
};

const userDatasSlice = createSlice({
  name: 'userDatas',
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { getCurrentUser } = userDatasSlice.actions;

export const selectCurrentUserData = (state: RootState) =>
  state.userDatasSlice.userData;
// export const selectUser = (state) => state.userDatasSlice;

export default userDatasSlice.reducer;
