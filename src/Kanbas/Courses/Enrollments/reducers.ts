import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, action) => {
      const newEnrollment: any = {
          _id: new Date().getTime().toString(),
          ...action.payload
        };
        state.enrollments = [...state.enrollments, newEnrollment] as any;
  },
    unenrollCourse: (state, action)=>{
      state.enrollments = state.enrollments.filter(
          (m: any) => !(m.course === action.payload.course && m.user === action.payload.user) );
  },
},
});
export const { enrollInCourse, unenrollCourse} =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;