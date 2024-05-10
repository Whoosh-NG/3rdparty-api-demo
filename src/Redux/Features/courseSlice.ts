import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Stores/store';

interface ICourse {
  courseId: string;
}

const initialState: ICourse = {
  courseId: '',
};

const courseSlice = createSlice({
  name: 'allCourses',
  initialState,
  reducers: {
    getCourseId: (state, action) => {
      state.courseId = action.payload;
    },
  },
});

export const { getCourseId } = courseSlice.actions;
export const selectCourseId = (state: RootState) => state.courseSlice.courseId;

export default courseSlice.reducer;
