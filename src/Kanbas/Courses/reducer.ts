import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

const initialState = {
    courses: courses,
    // course: {
    //     _id: "",
    //     name: "",
    //     description: "",
    //     number: "",
    //     credits: "",
    //     startDate: "",
    //     endDate: "",
    // }
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const newCourse: any = {
        _id: new Date().getTime().toString(),
        ...action.payload
      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (m: any) => !(m.course._id === action.payload.course) ) as any;
      
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((m: any) =>
        m._id === action.payload._id ? action.payload : m) as any;
  },

    
  },
});
export const { addCourse, deleteCourse, 
  updateCourse} =
  coursesSlice.actions;
export default coursesSlice.reducer;